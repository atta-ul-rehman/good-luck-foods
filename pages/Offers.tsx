import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Offers: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: 'Bulk Frozen Foods Deal',
      description: 'Get 15% off on all frozen food orders over £500',
      validUntil: 'March 31, 2026',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
      discount: '15% OFF'
    },
    {
      id: 2,
      title: 'Packaging Essentials Bundle',
      description: 'Buy any 3 packaging products and get 1 free',
      validUntil: 'April 15, 2026',
      image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=800',
      discount: 'BUY 3 GET 1'
    },
    {
      id: 3,
      title: 'Cleaning Supplies Special',
      description: '20% discount on bulk cleaning supply orders',
      validUntil: 'March 20, 2026',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      discount: '20% OFF'
    },
    {
      id: 4,
      title: 'First Order Discount',
      description: 'New customers get 10% off their first order',
      validUntil: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      discount: '10% OFF'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Special Wholesale Offers & Bulk Deal Pricing"
        description="Browse current wholesale deals and bulk order pricing from Good Luck Foods Ltd. Special offers on drinks, frozen foods, sauces, packaging and more for UK businesses."
        path="/offers"
      />
      <section className="relative h-[200px] bg-slate-900 flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=1920"
          alt="Special wholesale offers and deals"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-widest text-white mb-4">
            SPECIAL OFFERS
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Exclusive deals and discounts for our valued wholesale customers
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-black text-sm">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Valid until: <span className="font-semibold">{offer.validUntil}</span>
                  </span>
                  <Link
                    to="/contact"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
                  >
                    Claim Offer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Want Custom Pricing?
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Contact our sales team for personalized quotes and exclusive deals tailored to your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-black tracking-wide hover:bg-emerald-50 transition-colors"
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
