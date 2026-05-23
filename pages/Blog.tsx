import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS, BlogPost, getBlogPostsWithFallback } from '../data/blogs';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadPosts = async () => {
      const nextPosts = await getBlogPostsWithFallback();

      if (!isMounted) {
        return;
      }

      setPosts(nextPosts);
      setIsLoading(false);
    };

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <SEO
        title="Blog - Wholesale Food Tips and Industry Insights"
        description="Read practical wholesale food tips, distribution insights, and buying guides from Good Luck Foods Ltd. for UK restaurants, takeaways, and retailers."
        path="/blog"
      />

      <section className="bg-slate-900 py-16">
        <div className="site-shell px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-10 h-px bg-brand-green"></span>
            <span className="text-brand-green text-xs font-black uppercase tracking-[0.25em]">
              Insights
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            Good Luck Foods Blog
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto font-light">
            Practical updates and short guides for food businesses that want a better and
            more reliable supply chain.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <article
                  key={`blog-skeleton-${index}`}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-slate-200" />
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="h-3 w-32 bg-slate-200 rounded" />
                    <div className="h-7 w-full bg-slate-200 rounded" />
                    <div className="h-7 w-3/4 bg-slate-200 rounded" />
                    <div className="h-4 w-full bg-slate-200 rounded" />
                    <div className="h-4 w-5/6 bg-slate-200 rounded" />
                    <div className="flex gap-2 pt-2">
                      <div className="h-6 w-20 bg-slate-200 rounded-full" />
                      <div className="h-6 w-16 bg-slate-200 rounded-full" />
                    </div>
                    <div className="h-4 w-28 bg-slate-200 rounded" />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image || '/assets/external/blog-wholesale.jpg'}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 uppercase tracking-wider font-bold mb-4">
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-GB')}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                      <Link to={`/blog/${post.slug}`} className="hover:text-brand-red transition-colors">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-slate-600 font-light mb-6">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {(post.tags.length > 0 ? post.tags : ['General']).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-red font-black uppercase tracking-wider text-xs hover:gap-3 transition-all"
                    >
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
