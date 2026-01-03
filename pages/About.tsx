import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">

      {/* Hero */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-10 h-px bg-brand-green"></span>
            <span className="text-brand-green text-xs font-black uppercase tracking-[0.25em]">
              Our Story
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            Feeding the Industry Since 2008
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto font-light">
            Good Luck Foods Ltd. is a premier B2B distribution partner dedicated to supplying
            high-quality food products to businesses across the region.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-transparent -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-4 h-4 rounded-full bg-brand-red"></span>
                <span className="text-brand-red font-black tracking-[0.25em] uppercase text-xs block">
                  Our Heritage
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-[0.05em]">
                Built on Quality. Driven by Efficiency.
              </h2>
              <div className="space-y-4 text-slate-600 font-light">
                <p>
                  What started as a small local supplier of fresh produce has evolved into a
                  multi-category wholesale powerhouse. Today, Good Luck Foods manages over 5,000
                  product lines across 11 key categories.
                </p>
                <p>
                  Our mission remains unchanged: deliver seamless supply chains, competitive
                  wholesale pricing, and products that exceed industry standards.
                </p>
                <p>
                  Operating from three regional hubs, we use advanced logistics technology to
                  ensure uninterrupted supply for our partners.
                </p>
              </div>

              <div className="mt-12 flex gap-14">
                {[
                  { label: 'Years Active', value: '15+' },
                  { label: 'Hub Centers', value: '3' },
                  { label: 'B2B Focused', value: '100%' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-brand-green">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
                  alt="Our Warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-dark text-white p-10 rounded-3xl hidden xl:block border border-brand-dark max-w-sm">

                <p className="text-lg italic mb-4 text-white/70 font-light">
                  “Efficiency is not just about speed; it’s about accuracy and consistency every day.”
                </p>
                <p className="font-black uppercase tracking-widest text-xs">
                  — Julian V., Founder
                </p>
                <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                  <svg className="w-48 h-48 fill-current" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Our Core Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'Transparent sourcing and honest pricing across every transaction.' },
              { title: 'Excellence', desc: 'Uncompromising standards in product quality and logistics execution.' },
              { title: 'Partnership', desc: 'We grow alongside our clients. Your success is our KPI.' }
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl border border-slate-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-black mb-4 text-brand-green uppercase tracking-tight">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Partner with the Leaders
          </h2>
          <p className="text-slate-600 mb-12 font-light">
            Experience the difference that professional wholesale management makes to your bottom line.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-red text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-brand-red/90 transition-all shadow-2xl"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
