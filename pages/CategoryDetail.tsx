import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface InfoCardProps {
  number: number;
  title: string;
  desc: string;
  className?: string;
}

const CATEGORY_CONTENT: Record<string, any> = { 'drinks': { overview: "Good Luck Foods LTD. is a premier wholesale drinks distributor, supplying a wide spectrum of beverages to retailers, supermarkets, and the HORECA sector. Our beverage portfolio is designed for high-turnover environments where consistency and bulk availability are critical. From artisanal sodas to industrial-scale mineral water supply, we provide the infrastructure necessary for businesses to maintain consistent stock levels without the volatility of retail pricing.", products: [{ type: "Mineral & Spring Waters", desc: "Available in multiple formats including 330ml glass for fine dining and 1.5L PET for retail shelves." }, { type: "Carbonated Soft Drinks", desc: "Bulk cases of premium sodas and traditional favorites for supermarkets and convenience stores." }, { type: "Natural Fruit Juices", desc: "Cold-pressed and shelf-stable variants available in multi-pack cartons and foodservice glass." }, { type: "Mixers & Tonics", desc: "Specialized high-carbonation mixers specifically formatted for bars and hospitality venues." }], quality: "Our beverage sourcing adheres to strict international bottling standards. We prioritize direct-from-manufacturer contracts to ensure that production dates are recent, maximizing shelf life for our wholesale partners. Every shipment is managed through temperature-controlled logistics where necessary to preserve flavor profiles.", packaging: "Wholesale formats include shrink-wrapped 12-pack and 24-pack cases, palletized loads for high-volume distribution, and industrial bag-in-box formats for fountain service. We provide detailed specifications on case dimensions and weights for warehouse planning.", industries: "Serving supermarkets for retail shelf-stocking, hotels for mini-bar and banquet supply, and restaurants for table-side service. Our logistics are optimized for both urban retail hubs and regional distribution centers.", faqs: [{ q: "What types of drinks are available for wholesale?", a: "We supply mineral water, fruit juices, carbonated sodas, and premium mixers in bulk formats." }, { q: "Do you supply drinks to retailers and restaurants?", a: "Yes, we are a dedicated B2B distributor serving retail stores, hospitality groups, and foodservice providers." }, { q: "What packaging sizes are available?", a: "Sizes range from 250ml individual retail units to 20L bag-in-box formats, sold in full case or pallet quantities." }, { q: "How can wholesale buyers request pricing?", a: "Use the 'Request Quote' button to receive our latest B2B price list and volume discount tiers." }] }, 'frozen-food': { overview: "In the wholesale frozen food market, Good Luck Foods LTD. stands as a pillar of reliability. We provide IQF (Individually Quick Frozen) products that serve as the backbone for professional kitchens and retail freezer aisles. Our supply chain is engineered to handle large-scale frozen inventory requirements, ensuring that retailers and caterers have access to premium proteins and vegetables year-round, regardless of seasonal fluctuations.", products: [{ type: "IQF Poultry & Meats", desc: "Grade A cuts, portion-controlled and flash-frozen to maintain cellular integrity and nutritional value." }, { type: "Bulk Vegetables", desc: "Farm-direct vegetables, cleaned, chopped, and frozen within hours of harvest for maximum freshness." }, { type: "Prepared Foodservice Meals", desc: "Ready-to-heat solutions developed for high-volume catering and institutional kitchens." }, { type: "Frozen Fruits & Berries", desc: "Essential for smoothies and dessert production in cafes and bakeries." }], quality: "Our frozen assets are managed under a strict Cold Chain Protocol. We monitor temperatures from the moment of flash-freezing through to final delivery. Our products meet global food safety standards, with full traceability on every batch to ensure B2B transparency.", packaging: "Standard formats include 1kg, 2.5kg, and 5kg industrial bags packed into 10kg or 20kg master cartons. All packaging is moisture-resistant and designed for long-term cold storage efficiency.", industries: "Primary suppliers for supermarkets, school catering services, large-scale restaurant groups, and frozen food specialty retailers.", faqs: [{ q: "What frozen food items are available in bulk?", a: "Our range includes poultry, mixed vegetables, frozen fruits, and prepared meals for professional use." }, { q: "How is the quality of wholesale frozen food maintained?", a: "We utilize advanced IQF technology and maintain a rigorous temperature-controlled supply chain." }, { q: "What are the minimum wholesale order quantities?", a: "We typically operate in case and pallet increments to ensure shipping efficiency for our B2B partners." }, { q: "Can I get a custom catalog for frozen products?", a: "Yes, our account managers can provide tailored catalogs based on your specific industry requirements." }] }, 'flours': { overview: "As a strategic flours and grains distributor, Good Luck Foods LTD. supports the foundation of the baking and food manufacturing industry. We understand that consistency in protein content and moisture levels is non-negotiable for professional bakers. Our wholesale grains are sourced from premium wheat belts, ensuring that every sack delivered meets the high-performance requirements of commercial pizzerias, bakeries, and pasta manufacturers.", products: [{ type: "High-Gluten Bread Flours", desc: "Specifically milled for artisanal sourdough and industrial bread production." }, { type: "Specialty Grain Blends", desc: "Ancient grains, whole wheat, and customized blends for health-conscious retail lines." }, { type: "Pastry & Cake Flours", desc: "Low-protein, finely milled flours for delicate confectionery and biscuit manufacturing." }, { type: "Industrial Grade Semolina", desc: "Essential for bulk pasta production and professional pizza dusting." }], quality: "All flours undergo rigorous testing for ash content, protein strength, and absorption rates. We maintain a 'First-In-First-Out' inventory system to ensure the flour we deliver to your bakery or factory is consistently fresh.", packaging: "Available in heavy-duty 25kg and 50kg industrial paper sacks, as well as 1-ton super sacks for large-scale food manufacturing plants.", industries: "Supplying artisanal bakeries, pasta factories, pizzerias, hotel pastry kitchens, and retail grocery stores.", faqs: [{ q: "What types of flour do you supply wholesale?", a: "We provide high-gluten bread flour, pastry flour, whole wheat, and various specialty grains." }, { q: "Is your flour suitable for industrial baking?", a: "Yes, our flours are graded for high-performance commercial use and consistency." }, { q: "What are the standard sack sizes?", a: "Our most common wholesale formats are 25kg and 50kg industrial sacks." }, { q: "How do I inquire about bulk grain prices?", a: "Submit an inquiry via our contact form to receive a quote based on current market rates and your volume." }] } };
// Generic Fallback Content for other categories 
const getFallbackContent = (name: string) =>
({
  overview: `${name} is a critical category in our wholesale catalog, serving as an essential supply line for professional businesses. Good Luck Foods LTD. ensures that our B2B partners receive consistent, high-quality ${name} products designed to meet the rigorous demands of the retail and hospitality sectors. Our sourcing strategy for ${name} focuses on value, reliability, and volume-ready availability.`,
  products: [
    { type: `Standard ${name} Variants`, desc: `A comprehensive range of core ${name} items available for bulk procurement.` },
    { type: `Professional ${name} Formats`, desc: `Items specifically packaged and sized for commercial kitchens and retail shelves.` }],
  quality: `Quality assurance for our ${name} range involves strict vetting of suppliers and regular batch inspections. We focus on consistency and supply continuity, ensuring that your business operations are never interrupted by inventory shortages.`,
  packaging: `Packaging for ${name} is optimized for wholesale storage, including reinforced cartons, industrial-grade bags, or stackable containers. We offer various size formats to suit both small-scale retailers and large-scale distributors.`,
  industries: `Providing solutions for supermarkets, restaurant chains, catering services, and regional sub-distributors.`,
  faqs: [
    { q: `What wholesale ${name} options are available?`, a: `We offer a full range of professional-grade ${name} products in various bulk formats.` },
    { q: `Who can buy ${name} from Good Luck Foods LTD?`, a: `We are a B2B-only supplier serving retailers, hospitality groups, and other professional entities.` },
    { q: `What are the bulk sizes for ${name}?`, a: `Sizes vary by specific item, generally available in case or pallet quantities.` },
    { q: `How do I request a quote for ${name}?`, a: `Contact our sales team via the request form for specialized wholesale pricing.` }
  ]
});
const InfoCard: React.FC<InfoCardProps> = ({ number, title, desc, className }) => (
  <div className={`flex items-start gap-4 ${className}`}>
    <div className="flex-shrink-0 w-10 h-10 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center font-bold text-sm">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-slate-800">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

interface TagProps {
  tags: string[];
}

const Tags: React.FC<TagProps> = ({ tags }) => (
  <div className="flex flex-wrap gap-4">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-5 py-2 bg-brand-green/10 text-brand-green rounded-lg text-xs font-extrabold uppercase tracking-[0.3em] select-none"
      >
        {tag}
      </span>
    ))}
  </div>
);

interface FAQProps {
  faqs: { q: string; a: string }[];
}

const FAQSection: React.FC<FAQProps> = ({ faqs }) => (
  <section className="bg-white border-t border-slate-100">
    <div className="py-28 px-6">
      <h2 className="text-4xl font-extrabold text-slate-900 uppercase tracking-tight text-center mb-20">
        Buyer Frequently Asked <span className="text-brand-green">Questions</span>
      </h2>

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <dt className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-2">
              {faq.q}
            </dt>
            <dd className="text-slate-600 font-medium leading-relaxed text-sm">{faq.a}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 text-center">
        <p className="text-slate-700 mb-4">Have more questions or want to discuss bulk orders?</p>
        <Link
          to="/contact"
          className="inline-block bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:brightness-105 transition"
        >
          Contact Our Sales Team
        </Link>
      </div>
    </div>
  </section>
);

const CategoryDetail: React.FC = () => {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link to="/products" className="text-emerald-600 font-bold underline">
            Back to Products
          </Link>
        </div>
      </div>
    );

  const categoryProducts = PRODUCTS.filter((p) => p.categoryId === category.id);
  const content = CATEGORY_CONTENT[category.slug] || getFallbackContent(category.name);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="relative h-[400px] bg-slate-900 flex items-center overflow-hidden">
        <img
          src={category.image}
          alt={`Wholesale ${category.name} products`}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            to="/products"
            className="text-brand-green text-sm font-semibold tracking-widest flex items-center mb-6 hover:-translate-x-1 transition-transform"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Categories
          </Link>
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{category.icon}</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-widest text-white">
              {category.name}
            </h1>
          </div>
          <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </section>

      {/* Overview + Products + Quality */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left: Overview + Products */}
            <div className="lg:col-span-8 space-y-24">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-10 flex items-center">
                  <span className="w-10 h-1 bg-brand-green mr-5 rounded-full"></span>
                  Wholesale {category.name} Overview
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-3xl">{content.overview}</p>
                <p className="mt-6 text-sm text-slate-500 font-semibold uppercase tracking-wider">
                  Designed for professional buyers requiring consistent quality and scalable supply
                </p>
              </div>

              {/* Products & Variants */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-12">
                  Available Range & Formats
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {content.products.map((p: any, i: number) => (
                    <div
                      key={i}
                      className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-brand-green/40 transition-colors"
                    >
                      <h3 className="font-black text-brand-green text-xs uppercase tracking-[0.25em] mb-4">
                        {p.type}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{p.desc}</p>
                      <p className="mt-4 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
                        Wholesale format available
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quality & Standards */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-12 bg-slate-900 text-white rounded-[2.75rem] shadow-2xl">
                <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-brand-green">
                  Sourcing & Standards
                </h2>
                <div className="space-y-10">
                  <div className="flex space-x-5">
                    <span className="text-brand-lime font-black text-xl">✓</span>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{content.quality}</p>
                  </div>
                  <div className="pt-10 border-t border-slate-800">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-3">
                      Supply Continuity
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      Direct manufacturer and origin-level sourcing reduces dependency on volatile
                      global supply chains and ensures volume-ready availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-3">
                Featured Wholesale Products
              </h2>
              <p className="text-slate-600 text-sm max-w-md">
                High-demand {category.name.toLowerCase()} items regularly supplied in bulk to
                retailers and foodservice buyers.
              </p>
            </div>
            <div className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-full">
              {categoryProducts.length} products shown · Extended range available
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-14 rounded-3xl text-center border border-dashed border-slate-300 max-w-3xl mx-auto">
              <div className="text-5xl mb-6">📦</div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Full Wholesale Catalog Available</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our complete {category.name.toLowerCase()} range includes hundreds of wholesale-ready
                products across multiple formats and packaging options. Contact our sales team to
                access the full catalog.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-brand-red text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl"
              >
                Request Full Catalog
              </Link>
              <p className="mt-6 text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Wholesale only · No retail pricing
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Logistics & Industries */}
      <section className="py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide">Packaging & Formats</h2>
              <div className="bg-brand-green/10 p-12 rounded-[2.75rem] border border-brand-green/30 shadow-md">
                <p className="text-slate-700 font-semibold leading-relaxed mb-10 italic text-lg max-w-lg">
                  "{content.packaging}"
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
                    <p className="text-[11px] font-extrabold text-brand-green uppercase tracking-[0.3em] mb-2">
                      Standard Shelf Life
                    </p>
                    <p className="text-sm font-bold text-slate-900">Industry Optimized</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
                    <p className="text-[11px] font-extrabold text-brand-green uppercase tracking-[0.3em] mb-2">
                      Logistics
                    </p>
                    <p className="text-sm font-bold text-slate-900">Palletized Loading</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide">Industry Use Cases</h2>
              <p className="text-slate-700 font-semibold leading-relaxed max-w-xl">{content.industries}</p>
              <Tags tags={['Supermarkets', 'Restaurants', 'Hotels', 'Caterers', 'Wholesalers']} />
            </div>
          </div>
        </div>
      </section>

      {/* Supply & Bulk Inquiry */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center">
                <span className="w-12 h-1 bg-brand-green rounded-full mr-4"></span>
                Supply & Quality Assurance
              </h3>
              <div className="space-y-8">
                {[
                  { title: 'Global Sourcing', desc: 'We source directly from origin to ensure product authenticity and best pricing.' },
                  { title: 'Consistency Guaranteed', desc: 'Standardized grading for all items to ensure recipe consistency for chefs.' },
                  { title: 'Volume-Ready', desc: 'Infrastructure to handle single pallets or full container loads.' }
                ].map((item, i) => (
                  <InfoCard key={i} number={i + 1} title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-tr from-brand-red to-red-400 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-extrabold">Bulk Order Inquiry</h3>
                <p className="text-emerald-100 leading-relaxed text-lg">
                  Interested in stocking our {category.name} range? Reserve your stock today with a category specialist for tier-based volume pricing and delivery schedules.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg"
                >
                  Get Wholesale Pricing
                </Link>
                <p className="text-xs text-white/70 uppercase tracking-wide font-semibold mt-2">
                  Wholesale only · Fast response
                </p>
              </div>
              <div className="absolute -bottom-12 -right-12 opacity-20 pointer-events-none transform rotate-12 text-[220px]">
                <span>{category.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={content.faqs} />
    </div>
  );
};

export default CategoryDetail;
