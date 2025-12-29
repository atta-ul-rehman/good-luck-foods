import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, INDUSTRIES, PRODUCTS } from '../constants';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

// Reusable components for Home page
const InfoCard: React.FC<{ number: number; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-brand-green/20 text-brand-green rounded-2xl flex items-center justify-center font-black text-xl border border-brand-green/40">
      {number}
    </div>
    <div>
      <h4 className="text-slate-900 font-black uppercase tracking-tight mb-2">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">

      {/* Hero Section */}
      <section className="relative flex items-center bg-gradient-to-r from-[#000] to-slate-700 h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0 will-change-transform parallax-bg">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d4f4feb3f5-43b4b6cdb2412b2e117f.png"
            alt="Wholesale Logistics"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-8 h-px bg-brand-green"></span>
              <span className="text-brand-green text-sm font-bold uppercase tracking-[0.2em]">Good Luck Foods LTD.</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.05] tracking-tight uppercase">
              Premium Wholesale Food & <br /> Grocery Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl font-light">
              Premium B2B wholesale distribution of high-quality food and grocery essentials for professional retailers and hospitality leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/products"
                className="bg-brand-red text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all text-center shadow-2xl shadow-brand-green/20 active:scale-95"
              >
                Browse Our Catalog
              </Link>
              <Link
                to="/contact"
                className="bg-white text-brand-dark-green px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all text-center active:scale-95"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Without the Overhead */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Supply Without the Overhead
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              We leverage direct manufacturer relationships to bring you the best market rates without the intermediary markup.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.slice(0, 8).map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-brand-green font-black text-sm uppercase tracking-widest hover:underline"
            >
              <span>See All Wholesale Categories</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Organic & Sustainable + Bulk Ordering */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-8">
        {/* Organic & Sustainable */}
        <div className="relative group overflow-hidden flex flex-col justify-center items-start p-12 md:p-16 text-white rounded-2xl bg-brand-green/80 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=1200"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30"
            alt="Organic products"
          />
          <div className="absolute inset-0 bg-brand-dark-green/60 transition-opacity group-hover:bg-brand-dark-green/50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">Organic & Sustainable</h2>
            <p className="text-lg text-white/90 mb-5 max-w-xl">Premium organic products for health-conscious businesses looking to lead the market with quality.</p>
            <Link
              to="/contact"
              className="inline-block border-2 border-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-brand-dark-green transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Bulk Ordering */}
        <div className="relative group overflow-hidden flex flex-col justify-center items-start p-12 md:p-16 text-white rounded-2xl bg-gradient-to-r from-orange-800 to-brand-red shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30"
            alt="Bulk Ordering"
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">Bulk Ordering Made Easy</h2>
            <p className="text-lg text-white/90 mb-5 max-w-xl">Flexible ordering options with competitive wholesale pricing for large volume contracts and grocery hubs.</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-brand-dark-green px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-4 h-4 rounded-full bg-brand-red"></span>
                <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">High Demand Stock</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Featured Wholesale Items</h2>
              <p className="text-slate-500 mt-2 font-light">Curated selection of our best-moving product lines for professional kitchens and retail shelves.</p>
            </div>
            <Link to="/products" className="text-brand-green font-black uppercase tracking-widest text-sm hover:underline">View Full Catalog</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-white relative overflow-hidden">
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
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tight">Scale Your Operations with a Partner You Trust</h2>
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Industries We Serve</h2>
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
      <section className="py-28 bg-[#024804] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-[120%] h-[120%] -rotate-12 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Grow Your Margins</h2>
          <p className="text-lg text-white/80 mb-14 leading-relaxed font-light">
            Switch to Good Luck Foods LTD. and join 1,200+ businesses benefiting from superior pricing, absolute reliability, and a partnership built on trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-white text-brand-dark-green px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-100 transition-all shadow-2xl"
            >
              Get Wholesale Access
            </Link>
            <a
              href="tel:+18005553663"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all"
            >
              Call +1 (800) 555-FOOD
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
