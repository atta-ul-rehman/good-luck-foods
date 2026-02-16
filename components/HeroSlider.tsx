import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1768796373577-2e6e51351165?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Premium Wholesale Food & Grocery Solutions',
    subtitle: 'Good Luck Foods Ltd.',
    description: 'Premium B2B wholesale distribution of high-quality food and grocery essentials for professional retailers and hospitality leaders.',
    buttonText: 'Browse Our Catalog',
    buttonLink: '/products',
  },
  {
    image: 'https://images.unsplash.com/photo-1631856954655-966f97d809de?q=80&w=1146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Quality Products You Can Trust',
    subtitle: 'Trusted by Industry Leaders',
    description: 'We work with many clients throughout UK and Europe, providing bespoke products from own label foods to innovative packaging solutions.',
    buttonText: 'View Products',
    buttonLink: '/products',
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fast & Reliable Delivery',
    subtitle: 'Efficient Logistics Network',
    description: 'Our state-of-the-art warehouse and distribution network ensures your orders reach you quickly and in perfect condition.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Global Sourcing Excellence',
    subtitle: 'Worldwide Supply Chain',
    description: 'Access to premium products sourced from trusted suppliers around the globe, delivered to your business with reliability.',
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }, [currentSlide, goToSlide]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[560px] md:h-[620px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          
          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Content Box - Left Side */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-lg">
            {/* White content box */}
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl">
              {/* Subtitle with accent line */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-1 bg-brand-red"></span>
                <span className="text-[#444] text-xs font-semibold uppercase tracking-[0.2em]">
                  {slides[currentSlide].subtitle}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                {slides[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
                {slides[currentSlide].description}
              </p>

              {/* CTA Button */}
              <Link
                to={slides[currentSlide].buttonLink}
                className="inline-block bg-brand-red text-white px-8 py-4 rounded-xl font-semibold tracking-wide text-sm hover:brightness-110 transition-all active:scale-95"
              >
                {slides[currentSlide].buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 bottom-8 z-30 w-12 h-12 flex items-center justify-center text-slate-800 hover:text-brand-green transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 bottom-8 z-30 w-12 h-12 flex items-center justify-center text-slate-800 hover:text-brand-green transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:left-[calc(6rem+2rem)] z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 transition-all duration-300 ${
              index === currentSlide
                ? 'bg-brand-green scale-110'
                : 'bg-slate-800 hover:bg-slate-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
