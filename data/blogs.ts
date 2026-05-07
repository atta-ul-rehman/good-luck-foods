export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
}

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
