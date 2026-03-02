import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, INDUSTRIES, PRODUCTS } from '../constants';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSlider';
import { Product } from '../types';

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

// Animation wrapper component
type AnimationType = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'fadeSlideUp';

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}> = ({ children, animation = 'fadeSlideUp', delay = 0, className = '' }) => {
  const { ref, isVisible } = useScrollAnimation(0.1, '-50px');

  const baseStyles = 'transition-all duration-1000 ease-out';
  
  const animationStyles: Record<AnimationType, { hidden: string; visible: string }> = {
    fadeIn: {
      hidden: 'opacity-0',
      visible: 'opacity-100'
    },
    slideUp: {
      hidden: 'opacity-0 translate-y-16',
      visible: 'opacity-100 translate-y-0'
    },
    slideLeft: {
      hidden: 'opacity-0 translate-x-16',
      visible: 'opacity-100 translate-x-0'
    },
    slideRight: {
      hidden: 'opacity-0 -translate-x-16',
      visible: 'opacity-100 translate-x-0'
    },
    scaleUp: {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100'
    },
    fadeSlideUp: {
      hidden: 'opacity-0 translate-y-12',
      visible: 'opacity-100 translate-y-0'
    }
  };

  const currentAnimation = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${isVisible ? currentAnimation.visible : currentAnimation.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const InfoCard: React.FC<{ number: number; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex space-x-5">
    <div className="flex-shrink-0 text-slate-900 flex items-center justify-center font-black text-lg">
      {number}
    </div>
    <div>
      <h4 className="text-slate-900 font-black tracking-tight mb-1 uppercase text-sm">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// Section Header Component with accent line
const SectionHeader: React.FC<{ subtitle?: string; title: string; description?: string; light?: boolean; align?: 'left' | 'center' }> = ({ 
  subtitle, title, description, light = false, align = 'center' 
}) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className={`text-xs font-black uppercase tracking-[0.3em] ${light ? 'text-emerald-400' : 'text-emerald-600'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-black mt-3 tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    <div className={`w-24 h-1 bg-brand-red mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    {description && (
      <p className={`mt-6 max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-slate-400' : 'text-slate-500'}`}>
        {description}
      </p>
    )}
  </div>
);

// Products Slider Component
const ProductsSlider: React.FC<{ products: Product[] }> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);
  const cardWidth = 100 / itemsPerView; // Dynamic width percentage

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Navigation Arrows - Desktop */}
      <button
        onClick={goToPrev}
        className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-emerald-600 hover:text-white transition-all group"
      >
        <svg className="w-5 h-5 text-slate-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-emerald-600 hover:text-white transition-all group"
      >
        <svg className="w-5 h-5 text-slate-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Desktop Slider */}
      <div className="hidden lg:block overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0" style={{ width: `calc(${cardWidth}% - 12px)` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Dots Indicator - Desktop */}
      <div className="hidden lg:flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-emerald-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Trusted By */}
      <section className="py-10 bg-slate-900 border-y-4 border-slate-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fadeSlideUp">
            <p className="text-center text-xs font-black text-white uppercase tracking-[0.3em] mb-8">
              Well known brands
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
            {['RETAILMAX', 'FOODMART', 'CITYDISTRO', 'HOSPITALITY CO', 'GLOBALFOODS'].map((brand, index) => (
              <AnimatedSection key={brand} animation="scaleUp" delay={index * 100}>
                <span className="text-lg font-black text-slate-400 uppercase tracking-widest hover:text-emerald-500 transition-colors cursor-default">
                  {brand}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Category Showcase Section */}
      <section className="py-20 bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <AnimatedSection animation="fadeSlideUp">
            <SectionHeader
              // subtitle="What We Offer"
              title="WHAT WE OFFER"
              description="We specialise in all aspects of the fast food and food service sector, from packaging products to key ingredients."
            />
          </AnimatedSection>

          {/* Category Items */}
          <div className="space-y-6">
            {/* Category 1: Drinks */}
            <AnimatedSection animation="slideRight" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-slate-900 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="p-8 lg:p-10 order-2 lg:order-1 flex flex-col justify-center min-h-[260px]">
                <span className="inline-block px-3 py-1 bg-brand-green   text-white text-[10px] font-black uppercase tracking-widest mb-3 w-fit">
                  Category
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide">Drinks</h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                  From refreshing beverages to specialty drinks, we supply a comprehensive range of drink products for restaurants, cafes, and retail outlets across the UK.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex rounded-lg items-center gap-2 bg-brand-green text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-brand-green/80 transition-all w-fit"
                >
                  Explore Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="order-1 lg:order-2 h-[260px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1763074847615-81748f08cea2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Drinks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            </AnimatedSection>

            {/* Category 2: Packaging */}
            <AnimatedSection animation="slideLeft" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-slate-900 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="h-[260px] overflow-hidden">
                <img 
                  src="/assets/packaging.png"
                  alt="Bespoke Packaging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center min-h-[260px]">
                <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest mb-3 w-fit">
                  Category
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide">Bespoke Packaging</h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                  Premium food packaging solutions including containers, disposables, and eco-friendly options. Perfect for takeaways, catering services, and food businesses.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex rounded-lg items-center gap-2 bg-brand-red text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-brand-red/80 transition-all w-fit"
                >
                  Explore Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            </AnimatedSection>

            {/* Category 3: Frozen Products */}
            <AnimatedSection animation="slideRight" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-slate-900 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="p-8 lg:p-10 order-2 lg:order-1 flex flex-col justify-center min-h-[260px]">
                <span className="inline-block px-3 py-1 bg-brand-green text-white text-[10px] font-black uppercase tracking-widest mb-3 w-fit">
                  Category
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide">Frozen Products</h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                  High-quality frozen foods sourced from trusted suppliers. We offer frozen meats, vegetables, seafood, and ready-to-cook items for professional kitchens.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex rounded-lg items-center gap-2 bg-brand-green text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-brand-green/80 transition-all w-fit"
                >
                  Explore Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="order-1 lg:order-2 h-[260px] overflow-hidden">
                <img 
                  src="/assets/frozen-products.png"
                  alt="Frozen Products"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            </AnimatedSection>

            {/* Category 4: Spices */}
            <AnimatedSection animation="slideLeft" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-slate-900 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="h-[260px] overflow-hidden">
                <img 
                  src="/assets/spices.png"
                  alt="Spices"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center min-h-[260px]">
                <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest mb-3 w-fit">
                  Category
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide">Spices</h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                  Authentic spices and seasonings from around the world. Our premium spice range helps chefs create flavorful dishes that keep customers coming back.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex rounded-lg items-center gap-2 bg-brand-red text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-brand-red/80 transition-all w-fit"
                >
                  Explore Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            </AnimatedSection>

            {/* Category 5: Households */}
            <AnimatedSection animation="slideRight" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-slate-900 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="p-8 lg:p-10 order-2 lg:order-1 flex flex-col justify-center min-h-[260px]">
                <span className="inline-block px-3 py-1 bg-brand-green text-white text-[10px] font-black uppercase tracking-widest mb-3 w-fit">
                  Category
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide">Households</h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                  Essential household products for commercial and domestic use. From cleaning supplies to everyday essentials, we provide quality products at competitive prices.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex rounded-lg items-center gap-2 bg-brand-green text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-brand-green/80 transition-all w-fit"
                >
                  Explore Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="order-1 lg:order-2 h-[260px] overflow-hidden">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Households"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            </AnimatedSection>

            {/* Category 6: Flour */}
            <AnimatedSection animation="slideLeft" delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-slate-900 rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl">
              <div className="h-[260px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Flour"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center min-h-[260px]">
                <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest mb-3 w-fit">
                  Category
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide">Flour</h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                  Premium quality flour varieties including all-purpose, bread flour, whole wheat, and specialty flours. Perfect for bakeries, restaurants, and food manufacturers.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex rounded-lg items-center gap-2 bg-brand-red text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-brand-red/80 transition-all w-fit"
                >
                  Explore Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            </AnimatedSection>
          </div>

          {/* View All Products Button */}
          <AnimatedSection animation="fadeSlideUp" delay={200}>
            <div className="text-center mt-12">
              <Link 
                to="/products" 
                className="inline-flex rounded-lg items-center gap-3 bg-emerald-600 text-white px-10 py-4 font-black text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all border-2 border-emerald-600 hover:border-emerald-700"
              >
                View All Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose us Section */}
      <section className="py-20 bg-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800"
                  className="w-full shadow-2xl relative z-10"
                  alt="Operations"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6  rounded-lg shadow-2xl hidden md:block z-20">
                  <p className="text-4xl font-black mb-1">99.8%</p>
                  <p className="text-white/80 text-xs font-black uppercase tracking-widest">Accuracy Rate</p>
                </div>
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-red"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideLeft" delay={200}>
              <div>
                <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">Why Choose Us</span>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-3 mb-2 uppercase tracking-tight">Why Choose Good Luck Foods Ltd.</h2>
                <div className="w-24 h-1 bg-brand-red mb-8"></div>
                <div className="space-y-8">
                  {[
                    { title: 'Volume-Optimized Pricing', desc: 'Our price tiers grow with your business. The more you buy, the more you save on unit costs.' },
                    { title: 'Predictable Logistics', desc: 'Real-time tracking and dedicated account managers ensure you know exactly when your stock arrives.' },
                    { title: 'Sourcing Sovereignty', desc: 'Direct relationships with farms and manufacturers mean we bypass global supply chain volatility.' }
                  ].map((item, i) => <InfoCard key={i} number={i + 1} title={item.title} desc={item.desc} />)}
                </div>
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-block rounded-lg bg-brand-red text-white px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-brand-red/90 transition-all"
                  >
                    Request Proposal
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Your Brand Banner - Full Width */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0" 
            alt="Warehouse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-700/95 to-emerald-700/80"></div>
        </div>
        <div className="relative z-10 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Your Brand
              </h2>
              <div className="w-24 h-1 bg-white mt-4"></div>
              <p className="text-white/80 mt-6 max-w-xl text-lg">
                Looking for bespoke wholesale solutions? We offer white-label products, custom packaging, and tailored distribution for your business needs.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="flex-shrink-0 rounded-lg bg-white text-emerald-700 px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none hidden lg:block">
          <div className="absolute -right-20 top-0 w-full h-full bg-white/10 transform skew-x-12"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fadeSlideUp">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div>
                <span className="text-brand-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-3 block">
                  High Demand Stock
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                  Featured Items
                </h2>
                <p className="text-slate-500 mt-3 max-w-xl text-sm leading-relaxed">
                  Curated selection of our best-moving product lines for professional kitchens and retail shelves.
                </p>
              </div>
              <Link to="/products" className="text-brand-red font-semibold text-sm hover:underline flex items-center gap-2">
                View Full Catalog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          {/* Products Slider */}
          <ProductsSlider products={PRODUCTS.slice(0, 8)} />
        </div>
      </section>
      {/* Supply - hidden*/}
      <section className="hidden py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fadeSlideUp">
            <SectionHeader
              subtitle="Browse Categories"
              title="SUPPLY WITHOUT THE OVERHEAD"
              description="Direct manufacturer relationships mean better pricing without intermediary markup."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.slice(0, 8).map((cat, index) => (
              <AnimatedSection key={cat.id} animation="scaleUp" delay={index * 80}>
                <CategoryCard category={cat} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fadeSlideUp">
            <SectionHeader
              subtitle="Who We Serve"
              title="INDUSTRIES WE SERVE"
              description="Customized wholesale solutions for every professional sector."
            />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, index) => (
              <AnimatedSection key={ind.name} animation="slideUp" delay={index * 80}>
                <div className="p-8 bg-slate-50 border-2 border-slate-200 text-center hover:shadow-xl hover:border-emerald-600 hover:-translate-y-1 transition-all group cursor-default">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{ind.icon}</div>
                  <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest">{ind.name}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Diagonal accent */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 uppercase">Grow Your Margins</h2>
            <div className="w-24 h-1 bg-emerald-600 mb-6 mx-auto lg:mx-0"></div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Join 1,200+ businesses benefiting from superior pricing and dependable supply chains.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <a href="tel:+441612731399" className="bg-transparent border-2 border-white text-white px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-all text-center">
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
