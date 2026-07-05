import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICE_KEYWORD_PAGES } from './servicesData';

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = SERVICE_KEYWORD_PAGES.find((item) => item.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.seoDescription,
    url: `https://www.goodluckfoods.co.uk/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Good Luck Foods Ltd.',
      url: 'https://www.goodluckfoods.co.uk',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: service.title,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
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
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://www.goodluckfoods.co.uk/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="bg-slate-900 py-16">
        <div className="site-shell px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-10 h-px bg-brand-green"></span>
            <span className="text-brand-green text-xs font-black uppercase tracking-[0.25em]">
              Wholesale Service
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">{service.title}</h1>
          <p className="text-white/70 max-w-3xl mx-auto font-light">{service.intro}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Supply Scope</h2>
              <ul className="space-y-3">
                {service.supplyItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600 text-sm font-light">
                    <span className="mt-1 w-2 h-2 rounded-full bg-brand-red"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Business Support</h2>
              <ul className="space-y-3">
                {service.supportPoints.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600 text-sm font-light">
                    <span className="mt-1 w-2 h-2 rounded-full bg-brand-green"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <article key={index} className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-black text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Need a Category-Specific Quote?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 font-light">
              Share your product and category requirements with our team for practical wholesale support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-red text-white text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Request Quote
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white text-sm font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
