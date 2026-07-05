import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICE_KEYWORD_PAGES } from './servicesData';

const Services: React.FC = () => {
  const servicesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Wholesale Services',
    description:
      'Wholesale service pages for food, drinks, frozen supply, cleaning, spices and packaging support across UK businesses.',
    url: 'https://www.goodluckfoods.co.uk/services',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Good Luck Foods Ltd.',
      url: 'https://www.goodluckfoods.co.uk',
    },
  };

  const breadcrumbSchema = {
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
        name: 'Services',
        item: 'https://www.goodluckfoods.co.uk/services',
      },
    ],
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      <SEO
        title="Wholesale Services UK – Food, Drinks, Frozen, Packaging"
        description="Explore wholesale service pages from Good Luck Foods Ltd. for food supply, drinks, frozen categories, cleaning essentials, spices and packaging support in the UK."
        path="/services"
        schema={[servicesPageSchema, breadcrumbSchema]}
      />

      <section className="bg-slate-900 py-16">
        <div className="site-shell px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-10 h-px bg-brand-green"></span>
            <span className="text-brand-green text-xs font-black uppercase tracking-[0.25em]">
              Services
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            Wholesale Service Pages
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto font-light">
            Explore focused wholesale service areas designed for restaurants, takeaways and retailers requiring category-based B2B supply support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_KEYWORD_PAGES.map((service) => (
              <article
                key={service.slug}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {service.intro}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-red hover:brightness-90 transition-all"
                >
                  View Service Page
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
