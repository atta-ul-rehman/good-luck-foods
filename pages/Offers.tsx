import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Offers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Coming Soon | Good Luck Foods Ltd."
        description="Our special offers page is being updated. Check back soon for new wholesale deals and promotions from Good Luck Foods Ltd."
        path="/offers"
        noindex={true}
      />
      <section className="relative h-[280px] bg-slate-900 flex items-center overflow-hidden">
        <img
          src="/assets/external/hero-slide-2.jpg"
          alt="Coming soon updates for wholesale offers"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-transparent"></div>
        <div className="relative z-10 site-shell px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand-lime mb-5">
            Updates Ahead
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Special Offers Coming Soon
          </h1>
          <p className="text-base md:text-xl text-slate-200 max-w-2xl mx-auto">
            We’re preparing fresh wholesale promotions and limited-time deals. Check back soon for the latest updates.
          </p>
        </div>
      </section>

      <div className="site-shell px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Offers are being refreshed
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            No current offer is active right now. Offers coming soon.
          </p>

          <Link
            to="/coming-soon"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full font-black uppercase tracking-widest hover:brightness-110 transition-all active:scale-95"
          >
            Coming Soon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
