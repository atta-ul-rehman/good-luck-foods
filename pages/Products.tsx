import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const INITIAL_LOAD = 50;
const LOAD_MORE_COUNT = 10;
const MAX_VISIBLE = 30;

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(() => {
    if (categoryFromUrl) {
      const cat = CATEGORIES.find(c => c.slug === categoryFromUrl);
      return cat ? cat.id : null;
    }
    return null;
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Virtual scroll state
  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleEnd, setVisibleEnd] = useState(INITIAL_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const topSentinelRef = useRef<HTMLDivElement>(null);

  // Update selected category when URL changes
  useEffect(() => {
    if (categoryFromUrl) {
      const cat = CATEGORIES.find(c => c.slug === categoryFromUrl);
      setSelectedCategory(cat ? cat.id : null);
    }
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? p.categoryId === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Reset visible range when filters change
  useEffect(() => {
    setVisibleStart(0);
    setVisibleEnd(Math.min(INITIAL_LOAD, filteredProducts.length));
  }, [searchQuery, selectedCategory, filteredProducts.length]);

  // Get currently visible products with virtual windowing
  const visibleProducts = useMemo(() => {
    const start = Math.max(0, visibleStart);
    const end = Math.min(visibleEnd, filteredProducts.length);
    return filteredProducts.slice(start, end);
  }, [filteredProducts, visibleStart, visibleEnd]);

  // Handle infinite scroll up
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const scrollTop = window.scrollY;
    const isScrollingUp = scrollTop < lastScrollTop.current;
    lastScrollTop.current = scrollTop;

    // Scrolling UP - infinite load previous items
    if (isScrollingUp && visibleStart > 0 && scrollTop < 500) {
      const newStart = Math.max(0, visibleStart - LOAD_MORE_COUNT);
      const newEnd = Math.min(newStart + MAX_VISIBLE, filteredProducts.length);
      setVisibleStart(newStart);
      setVisibleEnd(newEnd);
    }

    // Manage window size - keep max 30 loaded
    if (visibleEnd - visibleStart > MAX_VISIBLE) {
      if (isScrollingUp) {
        // Remove from bottom
        setVisibleEnd(visibleStart + MAX_VISIBLE);
      } else {
        // Remove from top when scrolled far enough
        const scrollProgress = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollProgress > 0.7 && visibleStart < visibleEnd - MAX_VISIBLE) {
          setVisibleStart(visibleEnd - MAX_VISIBLE);
        }
      }
    }
  }, [visibleStart, visibleEnd, filteredProducts.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Load more products (button click)
  const loadMoreProducts = () => {
    if (visibleEnd >= filteredProducts.length) return;
    
    setIsLoadingMore(true);
    setTimeout(() => {
      const newEnd = Math.min(visibleEnd + LOAD_MORE_COUNT, filteredProducts.length);
      // Keep window size manageable
      if (newEnd - visibleStart > MAX_VISIBLE) {
        setVisibleStart(newEnd - MAX_VISIBLE);
      }
      setVisibleEnd(newEnd);
      setIsLoadingMore(false);
    }, 300);
  };

  const hasMoreProducts = visibleEnd < filteredProducts.length;

  return (
    <div className="bg-white min-h-screen">
      {/* Top Shop Bar */}
      <div className="bg-slate-50 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          <div className="flex space-x-6">
            <span className="flex items-center"><span className="text-brand-green mr-2">✓</span> 100% Secure B2B Sourcing</span>
            <span className="flex items-center"><span className="text-brand-green mr-2">✓</span> Direct Manufacturer Pricing</span>
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-brand-green cursor-pointer transition-colors">Order Tracking</span>
            <span className="hover:text-brand-green cursor-pointer transition-colors">English / USD</span>
          </div>
        </div>
      </div>

      {/* Main Shop Header */}
      <div className="bg-white border-b border-slate-100 py-6 sticky top-[116px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-64 relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full bg-brand-green text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-between group shadow-lg shadow-brand-green/20"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" /></svg>
                All Categories
              </div>
              <svg className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50">
                <div className="grid grid-cols-2 gap-6">
                  {/* Categories Filter */}
                  <div>
                    <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Categories</h3>
                    <ul className="space-y-2 max-h-[250px] overflow-y-auto">
                      <li
                        onClick={() => { setSelectedCategory(null); setIsFilterOpen(false); }}
                        className={`text-[12px] font-bold cursor-pointer transition-colors flex justify-between items-center group px-2 py-1.5 rounded-lg hover:bg-slate-50 ${!selectedCategory ? 'text-brand-green bg-green-50' : 'text-slate-500 hover:text-brand-green'}`}
                      >
                        All Products
                        <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-400 group-hover:bg-brand-green group-hover:text-white transition-all">{PRODUCTS.length}</span>
                      </li>
                      {CATEGORIES.map(cat => (
                        <li
                          key={cat.id}
                          onClick={() => { setSelectedCategory(cat.id); setIsFilterOpen(false); }}
                          className={`text-[12px] font-bold cursor-pointer transition-colors flex justify-between items-center group px-2 py-1.5 rounded-lg hover:bg-slate-50 ${selectedCategory === cat.id ? 'text-brand-green bg-green-50' : 'text-slate-500 hover:text-brand-green'}`}
                        >
                          {cat.name}
                          <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-400 group-hover:bg-brand-green group-hover:text-white transition-all">
                            {PRODUCTS.filter(p => p.categoryId === cat.id).length}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Brands & Status Filter */}
                  <div className="space-y-6">
                    {/* Supply Brands */}
                    <div>
                      <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Supply Brands</h3>
                      <div className="space-y-2">
                        {['Nestlé', 'Unilever', 'Frito Lay', 'GlobalSelect', 'FreshFarm'].map(brand => (
                          <label key={brand} className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-brand-green focus:ring-brand-green transition-all" />
                            <span className="text-[12px] font-bold text-slate-500 group-hover:text-slate-900">{brand}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Product Status */}
                    <div>
                      <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Product Status</h3>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input type="checkbox" className="w-4 h-4 accent-brand-green rounded border-slate-200 focus:ring-brand-green transition-all" defaultChecked />
                          <span className="text-[12px] font-bold text-slate-500 group-hover:text-slate-900">In Stock</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input type="checkbox" className="w-4 h-4 accent-brand-green rounded border-slate-200 focus:ring-brand-green transition-all" />
                          <span className="text-[12px] font-bold text-slate-500 group-hover:text-slate-900">Contract Item</span>
                        </label>
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="text-[12px] font-black text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Price Per Unit</h3>
                      <input type="range" className="w-full accent-brand-green h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
                      <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400">
                        <span>$0</span>
                        <span>$1,000+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clear Filters Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <button
                    onClick={() => { setSelectedCategory(null); }}
                    className="text-[11px] font-bold text-slate-500 hover:text-brand-red transition-colors"
                  >
                    Clear All Filters
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="bg-brand-green text-white px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] hover:brightness-110 transition-all"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex-grow relative group w-fit">
            <input
              type="text"
              placeholder="Search for wholesale products, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-2xl px-8 py-4 text-sm font-medium focus:ring-4 focus:ring-brand-green/10 transition-all outline-none"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-green transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>

          <div className="flex items-center space-x-8 w-full lg:w-auto justify-center lg:justify-end">
            <div className="text-right hidden xl:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Need Support?</p>
              <p className="text-sm font-black text-slate-900">+1 (800) 555-FOOD</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-brand-green cursor-pointer transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-brand-green cursor-pointer transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 118 0m-4 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Organic/Promo Banner */}
        <div className="relative rounded-[3rem] overflow-hidden bg-brand-red50 mb-12 min-h-[340px] flex items-center p-12 lg:p-20">
          <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover rounded-l-[5rem]"
              alt="Organic Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red50 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-lg">
            <span className="text-brand-green font-black text-[11px] uppercase tracking-[0.3em] mb-4 block">Seasonal Freshness</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-normal">
              Wholesale Meals <br /> <span className="text-brand-green">Prepared & Delivered</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 max-w-sm">
              Fully prepared and delivered nationwide. Professional solutions for institutional catering.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm">✓</div>
              <span className="text-slate-700 font-bold text-sm tracking-tight">Direct Farm Distribution</span>
            </div>
          </div>
        </div>

        {/* Grid Header */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-brand-red' : 'text-slate-400 hover:text-brand-red'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-brand-red' : 'text-slate-400 hover:text-brand-red'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
              Showing {visibleProducts.length} of {filteredProducts.length} Results
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mr-3">Sort by:</span>
              <select className="bg-transparent text-slate-900 font-bold text-xs focus:outline-none cursor-pointer">
                <option>Latest Inventory</option>
                <option>High Volume Demand</option>
                <option>Alphabetical</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                Showing {visibleStart + 1}-{Math.min(visibleEnd, filteredProducts.length)} of {filteredProducts.length}
              </span>
            </div>
          </div>
        </div>

        {/* Top sentinel for infinite scroll up */}
        <div ref={topSentinelRef} className="h-1" />

        {/* Product Grid - Full Width 4 Columns */}
        <div ref={containerRef}>
          {visibleProducts.length > 0 ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {visibleProducts.map(product => (
                <ProductCard key={product.id} product={product} layout={viewMode === 'list' ? 'list' : 'grid'} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-[3rem] p-32 text-center border-2 border-dashed border-slate-200">
              <div className="text-6xl mb-8 opacity-20">📦</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">No items match your filters</h3>
              <p className="text-slate-500 font-medium mb-10 max-w-sm mx-auto">We couldn't find any products matching your current selection. Try resetting filters or search terms.</p>
              <button
                onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}
                className="bg-brand-green text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-brand-green/20"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Browse More Items Button */}
        {hasMoreProducts && visibleProducts.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={loadMoreProducts}
              disabled={isLoadingMore}
              className="bg-brand-green text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[12px] shadow-xl shadow-brand-green/20 hover:brightness-110 transition-all flex items-center gap-3 disabled:opacity-50"
            >
              {isLoadingMore ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  Browse More Items
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {/* End of products message */}
        {!hasMoreProducts && visibleProducts.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">You've seen all {filteredProducts.length} products</p>
          </div>
        )}
      </div>

      {/* Bottom Newsletter (Bacola Style) */}
      <section className="bg-brand-dark py-24 mt-24 relative overflow-hidden dot-pattern">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none italic underline decoration-brand-green decoration-4 underline-offset-8">Join the Supply Network</h2>
            <p className="text-slate-400 font-medium text-lg">Subscribe to our wholesale inventory alerts and regional market reports.</p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your work email address..."
                className="bg-white/5 border border-white/10 text-white rounded-2xl px-8 py-5 min-w-[320px] font-medium focus:ring-4 focus:ring-brand-green/30 transition-all outline-none"
              />
              <button className="bg-brand-green text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-brand-green/20 hover:brightness-110 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;