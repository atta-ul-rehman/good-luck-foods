
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Feeding the Industry Since 2008</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            GlobalSelect Wholesale is a premier b2b distribution partner dedicated to supplying the finest food products to businesses across the region.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">Our Heritage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Born from a passion for quality and efficiency.</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  What started as a small local supplier of fresh produce has evolved into a multi-category wholesale powerhouse. Today, GlobalSelect manages a portfolio of over 5,000 product lines across 11 key categories.
                </p>
                <p>
                  Our mission remains unchanged: To provide our partners with a seamless supply chain experience, competitive wholesale pricing, and products that exceed industry standards.
                </p>
                <p>
                  We operate from three state-of-the-art regional hubs, utilizing cutting-edge logistics technology to ensure that your business never experiences a stockout.
                </p>
              </div>
              <div className="mt-10 flex gap-12">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-slate-500">Years Active</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">3</div>
                  <div className="text-sm text-slate-500">Hub Centers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">100%</div>
                  <div className="text-sm text-slate-500">B2B Focused</div>
                </div>
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
              <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-3xl hidden xl:block border border-slate-800">
                <p className="text-lg italic font-serif mb-4 text-slate-300">"Efficiency is not just about speed; it's about accuracy and consistency every single day."</p>
                <p className="font-bold">— Julian V., Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'Honest pricing and transparent sourcing at every step of the supply chain.' },
              { title: 'Excellence', desc: 'Committed to delivering only the highest grade of food and packaging products.' },
              { title: 'Partnership', desc: 'We grow when our clients grow. Your success is our primary KPI.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-emerald-600">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Partner with the Leaders</h2>
          <p className="text-slate-600 mb-10">Experience the difference that professional wholesale management makes to your bottom line.</p>
          <Link to="/contact" className="bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg">
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
