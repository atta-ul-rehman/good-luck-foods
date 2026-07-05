import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { BlogPost, getBlogPostBySlugWithFallback } from '../data/blogs';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      setPost(null);
      return;
    }

    let isMounted = true;

    const loadPost = async () => {
      const foundPost = await getBlogPostBySlugWithFallback(slug);

      if (!isMounted) {
        return;
      }

      setPost(foundPost || null);
      setIsLoading(false);
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen animate-pulse">
        <section className="bg-slate-900 py-12 md:py-16">
          <div className="site-shell px-4 sm:px-6 lg:px-8">
            <div className="h-4 w-32 bg-white/20 rounded mb-6" />
            <div className="h-3 w-40 bg-white/20 rounded mb-4" />
            <div className="h-10 md:h-14 w-full max-w-3xl bg-white/20 rounded" />
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="site-shell px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="h-5 w-full bg-slate-200 rounded" />
            <div className="h-5 w-11/12 bg-slate-200 rounded" />
            <div className="h-5 w-10/12 bg-slate-200 rounded" />
            <div className="h-5 w-9/12 bg-slate-200 rounded" />
            <div className="pt-6">
              <div className="h-3 w-24 bg-slate-200 rounded mb-3" />
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-slate-200 rounded-full" />
                <div className="h-6 w-16 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? [post.image] : [],
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Good Luck Foods Ltd.'
    },
    mainEntityOfPage: `https://www.goodluckfoods.co.uk/blog/${post.slug}`
  };

  const blogBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.goodluckfoods.co.uk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.goodluckfoods.co.uk/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.goodluckfoods.co.uk/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        schema={[articleSchema, blogBreadcrumbSchema]}
      />

      <section className="bg-slate-900 py-12 md:py-16">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-green hover:text-lime-300 text-xs font-black uppercase tracking-wider mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 uppercase tracking-wider font-bold mb-4">
            <span>{new Date(post.publishedAt).toLocaleDateString('en-GB')}</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          {/* {post.image && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 mb-10">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            </div>
          )} */}

          {post.contentHtml ? (
            <article
              className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-slate-700 prose-p:text-lg prose-p:leading-8 prose-a:text-brand-green prose-a:font-semibold hover:prose-a:text-lime-500 prose-blockquote:border-l-brand-green prose-strong:text-slate-900 prose-strong:font-bold prose-code:text-red-600 prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-li:text-slate-700 prose-li:text-lg"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          ) : (
            <div className="prose prose-slate max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-slate-700 text-lg leading-8 mb-6 font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {(post.tags.length > 0 ? post.tags : ['General']).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
