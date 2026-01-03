import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, INDUSTRIES, PRODUCTS } from '../constants';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

const InfoCard: React.FC<{ number: number; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex space-x-5">
    <div className="flex-shrink-0 w-11 h-11 bg-brand-green/15 text-brand-green rounded-xl flex items-center justify-center font-bold text-lg border border-brand-green/30">
      {number}
    </div>
    <div>
      <h4 className="text-slate-900 font-semibold tracking-tight mb-1">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">

      {/* Hero Section */}
      <section className="relative flex items-center bg-gradient-to-r from-black to-slate-800 min-h-[560px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d4f4feb3f5-43b4b6cdb2412b2e117f.png"
            alt="Wholesale Logistics"
            className="w-full h-[120%] object-cover opacity-25 parallax-bg will-change-transform"
            loading="lazy"
            style={{ transform: 'translate3d(0, var(--scroll), 0)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-brand-green"></span>
              <span className="text-brand-green text-xs font-semibold uppercase tracking-[0.25em] opacity-80">
                Good Luck Foods Ltd.
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
              Premium Wholesale Food & <br /> Grocery Solutions
            </h1>

            <p className=" text-white/65 max-w-2xl mb-14 font-light">
              Premium B2B wholesale distribution of high-quality food and grocery essentials for professional retailers and hospitality leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/products"
                className="bg-brand-red text-white px-10 py-5 rounded-xl font-semibold tracking-wide hover:brightness-110 transition-all text-center shadow-xl active:scale-95"
              >
                Browse Our Catalog
              </Link>
              <Link
                to="/contact"
                className="bg-white text-brand-dark-green px-10 py-5 rounded-xl font-semibold tracking-wide hover:bg-slate-100 transition-all text-center active:scale-95"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-14 bg-white border-b border-slate-100">
        <p className="text-center text-[11px] font-medium text-slate-400 uppercase tracking-[0.3em] mb-10">
          Trusted by 1,200+ Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-8 opacity-60">
          {['RETAILMAX', 'FOODMART', 'CITYDISTRO', 'HOSPITALITY CO', 'GLOBALFOODS'].map((brand) => (
            <span key={brand} className="text-xl font-bold text-slate-400 uppercase tracking-tight italic">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-brand-red text-[11px] font-semibold uppercase tracking-[0.3em]">
                High Demand Stock
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4">
                Featured Wholesale Items
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl leading-relaxed">
                Curated selection of our best-moving product lines for professional kitchens and retail shelves.
              </p>
            </div>
            <Link to="/products" className="text-brand-green font-semibold tracking-wide text-sm hover:underline">
              View Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Organic + Bulk */}
      <section className="hidden py-24 bg-slate-50 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
        {/* Organic */}
        <div className="relative overflow-hidden p-14 rounded-2xl bg-brand-green/80 text-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=1200"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt=""
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Organic & Sustainable</h3>
            <p className="text-white/85 max-w-xl mb-6 leading-relaxed">
              Premium organic products for health-conscious businesses looking to lead the market with quality.
            </p>
            <Link className="inline-block border border-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-brand-green/90 hover:text-brand-dark transition-all" to="/contact">
              Learn More
            </Link>
          </div>
        </div>

        {/* Bulk */}
        <div className="relative overflow-hidden p-14 rounded-2xl bg-gradient-to-r from-orange-800 to-brand-red text-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt=""
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Bulk Ordering Made Easy</h3>
            <p className="text-white/85 max-w-xl mb-6 leading-relaxed">
              Flexible ordering options with competitive wholesale pricing for large volume contracts.
            </p>
            <Link className="inline-block bg-white text-brand-dark-green px-8 py-4 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all" to="/contact">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Split Block Section - SOLID COLORS & GEOMETRIC SHAPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6  py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* BLOCK 1: Organic & Sustainable (RED COLOR) */}
        <div className="relative group rounded-[2rem] overflow-hidden flex flex-col justify-center p-12 text-white bg-brand-red transition-all duration-500 hover:shadow-2xl">
          {/* Abstract Organic Background Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              className="absolute top-0 right-0 w-full h-full text-white opacity-20"
            >
              {/* Large Primary Circle */}
              <circle
                cx="350"
                cy="60"
                r="150"
                fill="currentColor"
                fillOpacity="0.5"
                className="transition-transform duration-1000 group-hover:-translate-x-6 group-hover:translate-y-4"
              />

              {/* Secondary Supporting Circle */}
              <circle
                cx="380"
                cy="140"
                r="100"
                fill="currentColor"
                fillOpacity="0.1"
                className="transition-transform duration-700 group-hover:-translate-x-3 group-hover:-translate-y-3"
              />

              {/* Organic Line Accent */}
              <path
                d="M400 250C350 250 300 300 300 350C300 400 350 450 400 450"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.8"
              />

              {/* Small Detail Cluster */}
              <g transform="translate(100, 200) scale(1.5)">
                <g className="transition-transform duration-700 ease-out group-hover:translate-x-[20px] group-hover:translate-y-[20px]">
                  <circle
                    cx="0"
                    cy="0"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle cx="20" cy="-20" r="5" fill="currentColor" />
                </g>
              </g>

            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Organic & Sustainable</h3>
            <p className="text-white/85 max-w-xl mb-6 leading-relaxed">
              Premium organic products for health-conscious businesses looking to lead the market with quality.
            </p>
            <Link
              className="inline-block border border-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white hover:text-brand-red transition-all"
              to="/contact"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* BLOCK 2: Bulk Ordering Made Easy (DARK GREEN COLOR) */}
        <div className="relative group rounded-[2rem] overflow-hidden flex flex-col justify-center p-12 text-white bg-brand-dark transition-all duration-500 hover:shadow-2xl">
          {/* Geometric Shape (The Sharp Triangle Accents) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Sharp Large Triangle */}
            <div className="absolute -bottom-10 -right-10 opacity-10 transition-transform duration-1000 group-hover:scale-110">
              <svg width="450" height="450" viewBox="0 0 100 100" fill="none" className="text-brand-green fill-current">
                <path d="M50 5 L95 90 L5 90 Z" />
              </svg>
            </div>
            {/* Nested Hollow Triangle */}
            <div className="absolute -bottom-16 -right-16 opacity-30 transition-transform duration-700 group-hover:-translate-x-4">
              <svg width="350" height="350" viewBox="0 0 100 100" fill="none" className="text-brand-lime">
                <path d="M50 10 L90 85 L10 85 Z" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Bulk Ordering Made Easy</h3>
            <p className="text-white/85 max-w-xl mb-6 leading-relaxed">
              Flexible ordering options with competitive wholesale pricing for large volume contracts.
            </p>
            <Link className="inline-block bg-white text-brand-dark px-8 py-4 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all" to="/contact">
              Get Started
            </Link>
          </div>
        </div>
      </section>


      {/* Supply */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            Supply Without the Overhead
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
            Direct manufacturer relationships mean better pricing without intermediary markup.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.slice(0, 8).map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl bg-brand-green/20"></div>
              <img
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800"
                className="rounded-3xl shadow-3xl relative z-10"
                alt="Operations"
              />
              <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl hidden md:block max-w-xs z-20">
                <p className="text-4xl font-black mb-1">99.8%</p>
                <p className="text-white/80 text-xs font-black uppercase tracking-widest">Accuracy Rate</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-4 h-4 rounded-full bg-brand-green"></span>
                <span className="text-brand-green text-xs font-black tracking-[0.1em]">Why choose us</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-8 md:leading-[1.15]">Why Choose Good Luck Foods ltd.</h2>
              <div className="space-y-10">
                {[
                  { title: 'Volume-Optimized Pricing', desc: 'Our price tiers grow with your business. The more you buy, the more you save on unit costs.' },
                  { title: 'Predictable Logistics', desc: 'Real-time tracking and dedicated account managers ensure you know exactly when your stock arrives.' },
                  { title: 'Sourcing Sovereignty', desc: 'Direct relationships with farms and manufacturers mean we bypass global supply chain volatility.' }
                ].map((item, i) => <InfoCard key={i} number={i + 1} title={item.title} desc={item.desc} />)}
              </div>
              <div className="mt-14">
                <Link
                  to="/contact"
                  className="inline-block bg-brand-red text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl"
                >
                  Request Partner Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Industries We Serve</h2>
            <p className="text-slate-400 mt-2 font-light">Customized wholesale solutions for every professional sector.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="p-10 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-default">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{ind.icon}</div>
                <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest">{ind.name}</h4>
                <p className="text-[10px] uppercase text-slate-300 tracking-[0.2em] mt-3">{ind.desc.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 italic underline decoration-brand-green decoration-4 underline-offset-8">Grow Your Margins</h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed">
              Join 1,200+ businesses benefiting from superior pricing and dependable supply chains.
            </p>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link to="/contact" className="bg-brand-green/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-green/60">
              Get Wholesale Access
            </Link>
            <a href="tel:+18005553663" className="hidden bg-brand-red text-white px-8 py-4 rounded-xl font-semibold hover:brightness-110">
              Call +1 (800) 555-FOOD
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
