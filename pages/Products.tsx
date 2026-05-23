import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const INITIAL_LOAD = 50;
const LOAD_MORE_COUNT = 10;
const MAX_VISIBLE = 30;

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const subcategoryFromUrl = searchParams.get('subcategory');
  const searchFromUrl = searchParams.get('search') || '';
  const productFromUrl = searchParams.get('product');

  const subcategoryProductPrefixMap: Record<string, Record<string, string[]>> = {
    drinks: {
      'Canned Drinks': ['drink-can-'],
      'Bottled Drinks': ['drink-bottle-'],
    },
    packaging: {
      'Paper Bags with Handles': ['packaging-'],
      'Paper Bags without Handles': ['packaging-greaseproof-'],
      'Chicken Boxes': ['packaging-'],
      'Wrapping Sheets': ['packaging-wrapping-'],
    },
    'frozen-foods': {
      'Frozen Chips': ['frozen-aviko-', 'frozen-lamb-weston-', 'frozen-product-', 'frozen-product-2-'],
      'Frozen Buns': ['frozen-buns-'],
      'Frozen Meat': ['frozen-meat-', 'frozen-burger-'],
      'Frozen Chicken': ['frozen-meat-', 'frozen-product-', 'frozen-product-2-', 'frozen-burger-'],
    },
    desserts: {
      Cakes: ['dessert-'],
      'Ice Cream': ['dessert-'],
      Confectionery: ['confectionery-'],
    },
    'flour-grains': {
      'Pizza Flour': ['flour-'],
      Rice: ['flour-'],
      'Other Grains': ['flour-'],
    },
    'canned-products': {
      Olives: ['canned-', 'canned-proc-'],
      'Pizza Sauces': ['canned-', 'canned-proc-'],
      'Other Canned Items': ['canned-', 'canned-proc-'],
    },
    'fresh-products': {
      Vegetables: ['vegetable-'],
      'Fresh Chicken': ['fresh-'],
    },
    'spices-herbs': {
      Breading: ['spice-general-', 'spice-general-2-', 'spice-heera-', 'spice-herra-2-', 'spice-natco-'],
      Spices: ['spice-general-', 'spice-general-2-', 'spice-heera-', 'spice-herra-2-', 'spice-natco-'],
      Herbs: ['spice-general-', 'spice-general-2-', 'spice-heera-', 'spice-herra-2-', 'spice-natco-'],
    },
    'oils-fats': {
      'Cooking Oil': ['oil-fat-'],
      'Solid Fats': ['oil-fat-'],
    },
    sauces: {
      Marinades: ['sauce-bottle-', 'sauce-', 'sauce-lion-'],
      Mayonnaise: ['sauce-mayo-', 'sauce-bottle-', 'sauce-lion-', 'sauce-'],
      LION: ['sauce-lion-'],
    },
    'cleaning-supplies': {
      Tissues: ['cleaning-tissue-'],
      Detergents: ['cleaning-detergent-'],
      Hygine: ['cleaning-hygine-'],
    },
    'general-items': {
      'Dry Goods & Pantry': ['general-'],
      'Kitchen Essentials': ['general-'],
      'Till Rolls & Charcoal': ['general-'],
    },
  };
  
  const [searchQuery, setSearchQuery] = useState(searchFromUrl);
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
      return;
    }
    setSelectedCategory(null);
  }, [categoryFromUrl]);

  // Sync search filter with URL query
  useEffect(() => {
    setSearchQuery(searchFromUrl);
  }, [searchFromUrl]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? p.categoryId === selectedCategory : true;

      let matchesSubcategory = true;
      if (categoryFromUrl && subcategoryFromUrl) {
        if (categoryFromUrl === 'packaging') {
          if (subcategoryFromUrl === 'Chicken Boxes') {
            matchesSubcategory = p.id.startsWith('packaging-') && /BOX|CHIKEN|CHICKEN/i.test(p.name);
          } else if (subcategoryFromUrl === 'Paper Bags with Handles') {
            matchesSubcategory =
              p.id.startsWith('packaging-') &&
              !p.id.startsWith('packaging-greaseproof-') &&
              !p.id.startsWith('packaging-wrapping-') &&
              !p.id.startsWith('packaging-satco-') &&
              !/BOX|CHIKEN|CHICKEN/i.test(p.name);
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'frozen-foods') {
          const isChickenItem = /CHICKEN|CHK|WING|FILLET|NUGGET|POPCORN|DONER|TANDOORI|SEEKH/i.test(p.name);

          if (subcategoryFromUrl === 'Frozen Meat') {
            matchesSubcategory =
              (p.id.startsWith('frozen-meat-') || p.id.startsWith('frozen-burger-')) &&
              !isChickenItem;
          } else if (subcategoryFromUrl === 'Frozen Chicken') {
            matchesSubcategory =
              (p.id.startsWith('frozen-meat-') ||
                p.id.startsWith('frozen-product-') ||
                p.id.startsWith('frozen-product-2-') ||
                p.id.startsWith('frozen-burger-')) &&
              isChickenItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'desserts') {
          const isCakeItem = /CAKE|PIE|DONUT|COOKIE|BISCOFF|OREO|BROWNIE|VELVET|MATILDA/i.test(p.name);
          const isIceCreamItem = /ICE|SLUSH|TOPPING|CREAM|MILK|ANGELITO|VANILLA|STRAWBERRY|CHOCOLATE/i.test(p.name);

          if (subcategoryFromUrl === 'Cakes') {
            matchesSubcategory = p.id.startsWith('dessert-') && isCakeItem;
          } else if (subcategoryFromUrl === 'Ice Cream') {
            matchesSubcategory = p.id.startsWith('dessert-') && isIceCreamItem && !isCakeItem;
          } else if (subcategoryFromUrl === 'Confectionery') {
            matchesSubcategory = p.id.startsWith('confectionery-');
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'flour-grains') {
          const isPizzaFlourItem = /PIZZA|DOUGH|IMPROVER|BREADINGS/i.test(p.name);
          const isRiceItem = /RICE|BASMATI|1121|LONG/i.test(p.name);

          if (subcategoryFromUrl === 'Pizza Flour') {
            matchesSubcategory = p.id.startsWith('flour-') && isPizzaFlourItem;
          } else if (subcategoryFromUrl === 'Rice') {
            matchesSubcategory = p.id.startsWith('flour-') && isRiceItem;
          } else if (subcategoryFromUrl === 'Other Grains') {
            matchesSubcategory = p.id.startsWith('flour-') && !isPizzaFlourItem && !isRiceItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'canned-products') {
          const isOliveItem = /OLIVE/i.test(p.name);
          const isPizzaSauceItem = /PIZZA|TOMATO|PASTE|SAUCE/i.test(p.name);

          if (subcategoryFromUrl === 'Olives') {
            matchesSubcategory = (p.id.startsWith('canned-') || p.id.startsWith('canned-proc-')) && isOliveItem;
          } else if (subcategoryFromUrl === 'Pizza Sauces') {
            matchesSubcategory =
              (p.id.startsWith('canned-') || p.id.startsWith('canned-proc-')) &&
              isPizzaSauceItem &&
              !isOliveItem;
          } else if (subcategoryFromUrl === 'Other Canned Items') {
            matchesSubcategory =
              (p.id.startsWith('canned-') || p.id.startsWith('canned-proc-')) &&
              !isOliveItem &&
              !isPizzaSauceItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'fresh-products') {
          const isFreshChickenItem = /CHICKEN|FILLET|WING|STRIP|KPS/i.test(p.name);

          if (subcategoryFromUrl === 'Vegetables') {
            matchesSubcategory = p.id.startsWith('vegetable-');
          } else if (subcategoryFromUrl === 'Fresh Chicken') {
            matchesSubcategory = p.id.startsWith('fresh-') && isFreshChickenItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'spices-herbs') {
          const hasSpicePrefix =
            p.id.startsWith('spice-general-') ||
            p.id.startsWith('spice-general-2-') ||
            p.id.startsWith('spice-heera-') ||
            p.id.startsWith('spice-herra-2-') ||
            p.id.startsWith('spice-natco-');
          const isHerbItem = /KASOORI|METHI|PARSLEY|OREGANO|CURRY\s*LEAVES|KARI\s*PATTA|BAY\s*LEAVES|HERB/i.test(p.name);
          const isBreadingItem = /BREAD|BREADER|BREADING|GRAVY|MARINADE|COATING|PIRI\s*PIRI/i.test(p.name);

          if (subcategoryFromUrl === 'Herbs') {
            matchesSubcategory = hasSpicePrefix && isHerbItem;
          } else if (subcategoryFromUrl === 'Breading') {
            matchesSubcategory = hasSpicePrefix && isBreadingItem;
          } else if (subcategoryFromUrl === 'Spices') {
            matchesSubcategory = hasSpicePrefix && !isHerbItem && !isBreadingItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'oils-fats') {
          const isCookingOilItem = /\bOIL\b|SUNFLOWER|RAPESEED|OLIVE|VEGETA|DRUM|LITRE|LTR/i.test(p.name);
          const isSolidFatItem = /GHEE|BUTTER|PALMAX|WHIRL|PREP|AVR60/i.test(p.name);

          if (subcategoryFromUrl === 'Cooking Oil') {
            matchesSubcategory = p.id.startsWith('oil-fat-') && isCookingOilItem && !isSolidFatItem;
          } else if (subcategoryFromUrl === 'Solid Fats') {
            matchesSubcategory = p.id.startsWith('oil-fat-') && isSolidFatItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'sauces') {
          const isLionItem = p.id.startsWith('sauce-lion-');
          const isMayoItem = /MAYO|MAYONNAISE/i.test(p.name) || p.id.startsWith('sauce-mayo-');
          const isSauceFamily =
            p.id.startsWith('sauce-bottle-') || p.id.startsWith('sauce-') || p.id.startsWith('sauce-lion-') || p.id.startsWith('sauce-mayo-');

          if (subcategoryFromUrl === 'LION') {
            matchesSubcategory = isLionItem;
          } else if (subcategoryFromUrl === 'Mayonnaise') {
            matchesSubcategory = isSauceFamily && isMayoItem;
          } else if (subcategoryFromUrl === 'Marinades') {
            matchesSubcategory = isSauceFamily && !isLionItem && !isMayoItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else if (categoryFromUrl === 'cleaning-supplies') {
          const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
          if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
            matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
          }
        } else if (categoryFromUrl === 'general-items') {
          const isGeneralItem = p.id.startsWith('general-');
          const isPantryItem = /DAL|ANCHOVY|CONDIMENT|VINIGER|VINEGAR|TEA/i.test(p.name);
          const isKitchenEssentialItem = /APRON|MASK|FILTER|STIR|PIZZA\s*TRIPOD|EGGS\s*TRAY/i.test(p.name);
          const isTillOrCharcoalItem = /THERMAL|TIL\s*ROLL|ROLLS|CHARCOL|CHARCOAL/i.test(p.name);

          if (subcategoryFromUrl === 'Dry Goods & Pantry') {
            matchesSubcategory = isGeneralItem && isPantryItem;
          } else if (subcategoryFromUrl === 'Kitchen Essentials') {
            matchesSubcategory = isGeneralItem && isKitchenEssentialItem;
          } else if (subcategoryFromUrl === 'Till Rolls & Charcoal') {
            matchesSubcategory = isGeneralItem && isTillOrCharcoalItem;
          } else {
            const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
            if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
              matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
            }
          }
        } else {
          const subcategoryPrefixes = subcategoryProductPrefixMap[categoryFromUrl]?.[subcategoryFromUrl];
          if (subcategoryPrefixes && subcategoryPrefixes.length > 0) {
            matchesSubcategory = subcategoryPrefixes.some(prefix => p.id.startsWith(prefix));
          }
        }
      }

      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchQuery, selectedCategory, categoryFromUrl, subcategoryFromUrl]);

  // Reset visible range when filters change
  useEffect(() => {
    setVisibleStart(0);
    setVisibleEnd(Math.min(INITIAL_LOAD, filteredProducts.length));
  }, [searchQuery, selectedCategory, filteredProducts.length]);

  // When a specific product was selected from search suggestions, center the visible window around it.
  useEffect(() => {
    if (!productFromUrl) return;

    const productIndex = filteredProducts.findIndex(product => product.id === productFromUrl);
    if (productIndex === -1) return;

    const nextStart = Math.max(0, productIndex - Math.floor(MAX_VISIBLE / 2));
    const nextEnd = Math.min(filteredProducts.length, nextStart + MAX_VISIBLE);

    setVisibleStart(nextStart);
    setVisibleEnd(nextEnd);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productFromUrl, filteredProducts]);

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
      <SEO
        title="Wholesale Products – Drinks, Frozen Foods, Packaging & More"
        description="Browse 800+ wholesale food and grocery products at Good Luck Foods Ltd. Categories include drinks, frozen foods, packaging, sauces, spices, oils and cleaning supplies. Bulk pricing available for UK businesses."
        path="/products"
      />
     

      {/* Main Shop Header */}
    

      {/* Click outside to close dropdown */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      <div className="site-shell px-4 py-8">
        {/* Grid Header */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl p-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 md:p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-brand-red' : 'text-slate-400 hover:text-brand-red'}`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 md:p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-brand-red' : 'text-slate-400 hover:text-brand-red'}`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
            <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest">
              {visibleProducts.length} of {filteredProducts.length} Results
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="flex items-center">
              <span className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mr-2 md:mr-3">Sort:</span>
              <select className="bg-transparent text-slate-900 font-bold text-xs focus:outline-none cursor-pointer">
                <option>Latest</option>
                <option>High Demand</option>
                <option>A-Z</option>
              </select>
            </div>
            <div className="hidden sm:flex items-center">
              <span className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest">
                {visibleStart + 1}-{Math.min(visibleEnd, filteredProducts.length)} of {filteredProducts.length}
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
            <div className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-12 md:p-32 text-center border-2 border-dashed border-slate-200">
              <div className="text-5xl md:text-6xl mb-6 md:mb-8 opacity-20">📦</div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 uppercase tracking-tighter">No items match your filters</h3>
              <p className="text-slate-500 font-medium mb-8 md:mb-10 max-w-sm mx-auto text-sm md:text-base">We couldn't find any products matching your current selection. Try resetting filters or search terms.</p>
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
      <section className="bg-brand-dark py-16 md:py-24 mt-16 md:mt-24 relative overflow-hidden dot-pattern">
        <div className="site-shell px-4 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 relative z-10">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-3 md:mb-4 leading-none italic underline decoration-brand-green decoration-4 underline-offset-8">Join the Supply Network</h2>
            <p className="text-slate-400 font-medium text-base md:text-lg">Subscribe to our wholesale inventory alerts and regional market reports.</p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <input
                type="email"
                placeholder="Your work email address..."
                className="bg-white/5 border border-white/10 text-white rounded-xl md:rounded-2xl px-5 md:px-8 py-4 md:py-5 w-full sm:min-w-[280px] md:min-w-[320px] font-medium focus:ring-4 focus:ring-brand-green/30 transition-all outline-none text-sm md:text-base"
              />
              <button className="bg-brand-green text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-brand-green/20 hover:brightness-110 transition-all">
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