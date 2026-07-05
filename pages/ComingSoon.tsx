import React from 'react';
import SEO from '../components/SEO';

const ComingSoon: React.FC = () => {
  return (
    <div className="animate-fade-in min-h-screen bg-white relative overflow-hidden flex items-center justify-center px-6 py-16 md:py-20">
      <SEO
        title="Coming Soon"
        description="Good Luck Foods is preparing a new website experience. Our updated platform is launching soon."
        path="/coming-soon"
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-10 h-40 w-40 rotate-45 rounded-2xl bg-emerald-100" />
        <div className="absolute bottom-14 left-10 h-28 w-28 -rotate-12 rounded-xl bg-slate-100" />
        <div className="absolute top-1/2 left-1/4 h-16 w-16 rotate-12 rounded-lg bg-red-100" />
        <div className="absolute top-20 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-slate-100" />
      </div>

      <section className="relative z-10 w-full max-w-4xl text-center">
        <span className="inline-block text-brand-red text-xs font-black uppercase tracking-[0.26em] mb-6">Good Luck Foods</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          New Website Launching Soon
        </h1>
        <div className="h-1 w-28 bg-brand-red rounded-full mx-auto mb-6" />
        <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
          We are preparing a better experience for wholesale customers with faster browsing and cleaner product discovery.
        </p>
      </section>
    </div>
  );
};

export default ComingSoon;
