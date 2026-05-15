export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  contentHtml?: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
}

interface WordPressRenderedField {
  rendered: string;
}

interface WordPressTerm {
  name: string;
}

interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  title: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  content: WordPressRenderedField;
  _embedded?: {
    author?: Array<{ name: string }>;
    ['wp:featuredmedia']?: Array<{ source_url: string }>;
    ['wp:term']?: WordPressTerm[][];
  };
}

const DEFAULT_WP_API_BASE = 'https://darkgreen-louse-200218.hostingersite.com/wp-json/wp/v2';
const WORDPRESS_API_BASE =
  (import.meta.env.VITE_WP_API_BASE_URL || DEFAULT_WP_API_BASE).replace(/\/$/, '');
const FALLBACK_BLOG_IMAGE = '/assets/external/blog-wholesale.jpg';
const WP_FETCH_TIMEOUT_MS = Number(import.meta.env.VITE_WP_FETCH_TIMEOUT_MS || 12000);
const WP_FETCH_RETRY_COUNT = Number(import.meta.env.VITE_WP_FETCH_RETRY_COUNT || 2);
const BLOG_CACHE_KEY = 'glf_wp_blog_posts_cache_v1';

const stripHtml = (html: string): string => {
  if (!html) {
    return '';
  }

  if (typeof window !== 'undefined' && typeof window.DOMParser !== 'undefined') {
    const doc = new window.DOMParser().parseFromString(html, 'text/html');
    return (doc.body.textContent || '').trim();
  }

  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
};

const toParagraphs = (text: string): string[] =>
  text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

const estimateReadTime = (text: string): string => {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

const extractTags = (post: WordPressPost): string[] => {
  const terms = post._embedded?.['wp:term'] || [];
  const names = terms.flat().map((term) => term.name).filter(Boolean);
  return [...new Set(names)].slice(0, 5);
};

const mapWordPressPostToBlogPost = (post: WordPressPost): BlogPost => {
  const title = stripHtml(post.title?.rendered || 'Untitled');
  const excerpt = stripHtml(post.excerpt?.rendered || '');
  const contentHtml = post.content?.rendered || '';
  const contentText = stripHtml(contentHtml);
  const content = toParagraphs(contentText);
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || FALLBACK_BLOG_IMAGE;
  const author = post._embedded?.author?.[0]?.name || 'Good Luck Foods Team';

  return {
    id: `wp-${post.id}`,
    slug: post.slug,
    title,
    excerpt: excerpt || contentText.slice(0, 180),
    content: content.length > 0 ? content : ['No content available.'],
    contentHtml,
    author,
    publishedAt: post.date,
    readTime: estimateReadTime(contentText),
    image,
    tags: extractTags(post)
  };
};

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const fetchWithTimeout = async (url: string, timeoutMs: number): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
};

const fetchWithRetry = async (url: string): Promise<Response> => {
  let lastError: unknown;

  for (let attempt = 0; attempt <= WP_FETCH_RETRY_COUNT; attempt += 1) {
    try {
      return await fetchWithTimeout(url, WP_FETCH_TIMEOUT_MS);
    } catch (error) {
      lastError = error;

      if (attempt < WP_FETCH_RETRY_COUNT) {
        const backoffMs = 600 * Math.pow(2, attempt);
        await wait(backoffMs);
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error('WordPress API request failed.');
};

const savePostsCache = (posts: BlogPost[]): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(BLOG_CACHE_KEY, JSON.stringify(posts));
  } catch {
    // Ignore cache write failures to avoid breaking blog rendering.
  }
};

const readPostsCache = (): BlogPost[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(BLOG_CACHE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as BlogPost[]) : [];
  } catch {
    return [];
  }
};

const fetchWordPressPosts = async (query = '_embed&orderby=date&order=desc'): Promise<WordPressPost[]> => {
  const response = await fetchWithRetry(`${WORDPRESS_API_BASE}/posts?${query}`);

  if (!response.ok) {
    throw new Error(`WordPress API request failed with status ${response.status}`);
  }

  const json = await response.json();

  if (!Array.isArray(json)) {
    throw new Error('WordPress API returned an unexpected format.');
  }

  return json as WordPressPost[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'how-to-choose-wholesale-food-supplier-uk',
    title: 'How to Choose a Reliable Wholesale Food Supplier in the UK',
    excerpt:
      'A short practical guide for restaurants and takeaways to select a trusted wholesale partner for quality, delivery consistency, and better margins.',
    content: [
      'Choosing the right wholesale supplier can directly affect your food quality, customer satisfaction, and operating costs. Start by checking product consistency and delivery performance before comparing prices.',
      'A strong supplier should offer clear communication, stable inventory, and flexible ordering options. Ask about lead times, order cut-off windows, and how they handle urgent stock shortages.',
      'At Good Luck Foods Ltd., we focus on dependable weekly supply for restaurants, takeaways, and retailers. If your business needs a stable food supply chain, begin with a small test order and evaluate service reliability over a few weeks.'
    ],
    author: 'Good Luck Foods Team',
    publishedAt: '2026-04-27',
    readTime: '3 min read',
    image: '/assets/external/blog-wholesale.jpg',
    tags: ['Wholesale', 'B2B', 'Supply Chain']
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((post) => post.slug === slug);

export const fetchWordPressBlogPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetchWordPressPosts('per_page=50&_embed&orderby=date&order=desc');
  const mappedPosts = posts.map(mapWordPressPostToBlogPost).filter((post) => Boolean(post.slug));
  if (mappedPosts.length > 0) {
    savePostsCache(mappedPosts);
  }
  return mappedPosts;
};

export const fetchWordPressBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await fetchWordPressPosts(`slug=${encodeURIComponent(slug)}&_embed`);
  const firstPost = posts[0];
  return firstPost ? mapWordPressPostToBlogPost(firstPost) : undefined;
};

export const getBlogPostsWithFallback = async (): Promise<BlogPost[]> => {
  try {
    const posts = await fetchWordPressBlogPosts();
    if (posts.length > 0) {
      return posts;
    }
  } catch {
    // Fallback handling below keeps the listing stable during temporary API outages.
  }

  const cachedPosts = readPostsCache();
  return cachedPosts.length > 0 ? cachedPosts : BLOG_POSTS;
};

export const getBlogPostBySlugWithFallback = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    const post = await fetchWordPressBlogPostBySlug(slug);
    if (post) {
      return post;
    }
  } catch {
    // Fallback below keeps blog pages working when WordPress is unavailable.
  }

  const cachedPost = readPostsCache().find((post) => post.slug === slug);
  if (cachedPost) {
    return cachedPost;
  }

  return getBlogPostBySlug(slug);
};
