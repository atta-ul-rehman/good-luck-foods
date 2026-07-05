import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { contactAPI } from '../utils/api';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const location = useLocation();
  const preSelectedProduct = location.state?.product || '';

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    category: '',
    message: preSelectedProduct ? `Inquiry regarding: ${preSelectedProduct}` : ''
  });

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Good Luck Foods Ltd.',
    description: 'Get in touch with Good Luck Foods Ltd. for wholesale pricing, bulk orders and product inquiries.',
    url: 'https://www.goodluckfoods.co.uk/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Good Luck Foods Ltd.',
      telephone: '+44-161-273-1399',
      email: 'sales@goodluckfoods.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 5, Viva Centre, Coverdale Cres',
        addressLocality: 'Manchester',
        postalCode: 'M12 4AP',
        addressCountry: 'GB',
      },
    },
  };

  const contactFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I request wholesale pricing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the contact form to share your business details and product needs. Our team reviews each request and responds with wholesale pricing support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you supply restaurants and takeaways across the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Good Luck Foods Ltd. supports restaurants, takeaways and retailers with wholesale food and grocery supply from our Manchester base.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I ask for category-specific wholesale quotes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Select an area of interest in the contact form and include your required product categories to receive the most relevant quote response.',
        },
      },
    ],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await contactAPI.submitInquiry(formData);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Contact error:', err);
      setError('Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 animate-fade-in">
        <div className="max-w-md w-full text-center p-12 bg-white rounded-[2rem] shadow-3xl border border-slate-100">
          <div className="w-24 h-24 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner">
            ✓
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Request Logged</h1>
          <p className="text-slate-600 mb-10 leading-relaxed text-lg">
            A dedicated Account Manager will review your inquiry and contact you within **2 business hours**.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-5 bg-amber-400 text-slate-900 font-bold rounded-2xl hover:bg-amber-300 transition-all shadow-xl active:scale-95"
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
      <SEO
        title="Contact Wholesale Food Supplier UK – Request Pricing"
        description="Contact Good Luck Foods Ltd. to request wholesale food pricing, bulk supply quotes and category-specific support for restaurants, takeaways and retailers across the UK."
        path="/contact"
        schema={[contactPageSchema, contactFaqSchema]}
      />
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">Request pricing, custom catalogs, or a logistics consultation.</p>
      </div>

      <div className="site-shell px-4 sm:px-6 lg:px-8 -mt-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Info Card */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Direct Channels</h3>
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm">+44 161 273 1399</p>
                    <p className="text-slate-700 text-sm">+44 745 937 9180</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm">sales@goodluckfoods.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm">Unit 5, Viva Centre,<br />Coverdale Cres, Manchester M12 4AP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm">Mon - Sat: 9 am – 7 pm</p>
                    <p className="text-slate-700 text-sm">Sunday: 10:30 am – 4 pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <h4 className="text-xl font-bold mb-4 relative z-10">Benefits of choosing us</h4>
              <ul className="space-y-4 text-sm relative z-10 font-medium">
                <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Immediate access to bulk price tiers</span></li>
                <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Dedicated regional account manager</span></li>
                <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Custom delivery windows (24/7 access)</span></li>
                <li className="flex items-start space-x-3"><span className="opacity-50">•</span> <span>Sourcing for specialty/rare items</span></li>
              </ul>
              <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                <svg className="w-48 h-48 fill-current" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z" /></svg>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Your Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-400/10 focus:border-amber-400 transition-all outline-none"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Business / Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-400/10 focus:border-amber-400 transition-all outline-none"
                      placeholder="Grand Plaza Hotel"
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Corporate Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-400/10 focus:border-amber-400 transition-all outline-none"
                      placeholder="jane@plaza.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 tracking-tight">Primary Phone</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-400/10 focus:border-amber-400 transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700 tracking-tight">Area of Interest</label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-400/10 focus:border-amber-400 transition-all outline-none appearance-none font-medium text-slate-600"
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="">Choose a product category</option>
                      {CATEGORIES.map(c => <option key={c.id} value={c.slug}>{c.name}</option>)}
                      <option value="other">General Sourcing / Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700 tracking-tight">Tell us about your requirements</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-amber-400/10 focus:border-amber-400 transition-all outline-none resize-none"
                    placeholder="E.g. Monthly volume of frozen chicken, specific spice blends, etc."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="pt-2">
                  {error && (
                    <div className="mb-3 text-red-500 text-xs font-bold bg-red-50 p-2.5 rounded-lg">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-red text-white py-3.5 rounded-xl font-bold text-sm hover:bg-brand-red/90 transition-all shadow-lg hover:shadow-brand-red/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Request Wholesale Access'}
                  </button>
                  <p className="text-center mt-4 text-[10px] text-slate-400 font-medium">
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