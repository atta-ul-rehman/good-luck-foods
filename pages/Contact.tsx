import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Contact: React.FC = () => {
  const location = useLocation();
  const preSelectedProduct = location.state?.product || '';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    category: '',
    message: preSelectedProduct ? `Inquiry regarding: ${preSelectedProduct}` : ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 animate-fade-in">
        <div className="max-w-md w-full text-center p-12 bg-white rounded-[2.5rem] shadow-3xl border border-slate-100">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner">
            ✓
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Request Logged</h1>
          <p className="text-slate-600 mb-10 leading-relaxed text-lg">
            A dedicated Account Manager will review your inquiry and contact you within **2 business hours**.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl active:scale-95"
          >
            Submit Another Request
          </button>
          <p className="mt-6 text-slate-400 text-sm italic font-light">Reference ID: GS-INQ-{Math.floor(Math.random() * 90000) + 10000}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Partner With Us</h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">Request pricing, custom catalogs, or a logistics consultation.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Direct Channels</h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold">P</div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone Sourcing</p>
                    <p className="text-slate-900 font-bold">+1 (800) 555-FOOD</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold">E</div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Sales Email</p>
                    <p className="text-slate-900 font-bold">sales@globalselect.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold">W</div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-slate-900 font-bold">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
               <h4 className="text-xl font-bold mb-4 relative z-10">Why partner with us?</h4>
               <ul className="space-y-4 text-sm relative z-10 font-medium">
                 <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Immediate access to bulk price tiers</span></li>
                 <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Dedicated regional account manager</span></li>
                 <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Custom delivery windows (24/7 access)</span></li>
                 <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Sourcing for specialty/rare items</span></li>
               </ul>
               <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                 <svg className="w-48 h-48 fill-current" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z"/></svg>
               </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-14 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Your Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Business / Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                      placeholder="Grand Plaza Hotel"
                      value={formData.businessName}
                      onChange={e => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Corporate Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                      placeholder="jane@plaza.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Primary Phone</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 tracking-tight">Area of Interest</label>
                  <div className="relative">
                    <select
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none appearance-none font-medium text-slate-600"
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="">Choose a product category</option>
                      {CATEGORIES.map(c => <option key={c.id} value={c.slug}>{c.name}</option>)}
                      <option value="other">General Sourcing / Other</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 tracking-tight">Tell us about your requirements</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none resize-none"
                    placeholder="E.g. Monthly volume of frozen chicken, specific spice blends, etc."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-6 rounded-[1.25rem] font-bold text-2xl hover:bg-emerald-700 transition-all shadow-2xl hover:shadow-emerald-600/30 active:scale-[0.98]"
                  >
                    Request Wholesale Access
                  </button>
                  <p className="text-center mt-6 text-xs text-slate-400 font-medium">
                    Protected by 256-bit SSL encryption. We never share your data with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;