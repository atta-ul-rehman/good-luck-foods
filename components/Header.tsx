import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleOutsideDropdownClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.closest('[data-category-item]') ||
        target.closest('[data-subcategory-dropdown]')
      ) {
        return;
      }
      setHoveredCategory(null);
    };

    document.addEventListener('mousedown', handleOutsideDropdownClick);
    document.addEventListener('touchstart', handleOutsideDropdownClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideDropdownClick);
      document.removeEventListener('touchstart', handleOutsideDropdownClick);
    };
  }, []);

  useEffect(() => {
    setHoveredCategory(null);
  }, [location.pathname, location.search]);

  // Get search suggestions
  const getSearchSuggestions = () => {
    if (!searchQuery.trim()) return { categories: [], products: [], subcategories: [] };
    
    const query = searchQuery.toLowerCase();
    
    // Filter categories
    const matchedCategories = CATEGORIES.filter(cat => 
      cat.name.toLowerCase().includes(query) || 
      cat.description.toLowerCase().includes(query)
    ).slice(0, 3);
    
    // Filter products
    const matchedProducts = PRODUCTS.filter(prod => 
      prod.name.toLowerCase().includes(query) || 
      prod.description.toLowerCase().includes(query)
    ).slice(0, 5);
    
    // Filter subcategories
    const matchedSubcategories: { name: string; categorySlug: string; categoryName: string }[] = [];
    CATEGORIES.forEach(cat => {
      if (cat.subcategories) {
        cat.subcategories.forEach(sub => {
          if (sub.toLowerCase().includes(query)) {
            matchedSubcategories.push({ name: sub, categorySlug: cat.slug, categoryName: cat.name });
          }
        });
      }
    });
    
    return { 
      categories: matchedCategories, 
      products: matchedProducts, 
      subcategories: matchedSubcategories.slice(0, 3) 
    };
  };

  const suggestions = getSearchSuggestions();
  const hasSuggestions = suggestions.categories.length > 0 || suggestions.products.length > 0 || suggestions.subcategories.length > 0;

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = 200;
      categoryScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryHover = (catId: string, event: React.MouseEvent<HTMLDivElement>) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({ left: rect.left, top: rect.bottom });
    setHoveredCategory(catId);
  };

  const handleCategoryToggle = (catId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const categoryItem = event.currentTarget.closest('[data-category-item]') as HTMLElement | null;
    const rect = (categoryItem ?? event.currentTarget).getBoundingClientRect();

    setDropdownPosition({ left: rect.left, top: rect.bottom });
    setHoveredCategory((prev) => (prev === catId ? null : catId));
  };

  const handleCategoryLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    setHoveredCategory(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'OFFERS', path: '/offers' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const hideTopHeaderControls = location.pathname === '/login' || location.pathname === '/signup';
  const hideSubNav = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgot-password';

  return (
    <header className="sticky top-0 z-[100] bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Left */}
          <Link to="/" className="flex items-center group flex-shrink-0 -ml-1 sm:ml-0">
            <img src="/assets/logo1.jpg" alt="Good Luck Foods" className="h-16 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Right Side: Search, Button, and Menu */}
          <div className="flex items-center gap-4 flex-1 justify-end md:justify-between md:ml-8">
            {/* Search Bar */}
            {!hideTopHeaderControls && (
            <div ref={searchRef} className="relative hidden md:block w-[100%]">
              <form onSubmit={handleSearch}>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search products..."
                  className="w-full rounded-lg px-4 py-2 text-sm border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>

              {/* Search Suggestions Dropdown */}
              {showSuggestions && searchQuery.trim() && hasSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl z-[200] max-h-80 overflow-y-auto">
                  {/* Categories */}
                  {suggestions.categories.length > 0 && (
                    <div className="p-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">Categories</p>
                      {suggestions.categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => handleSuggestionClick(`/category/${cat.slug}`)}
                          className="w-full text-left px-3 py-2 hover:bg-emerald-50 rounded-lg flex items-center gap-3 transition-colors"
                        >
                          <span className="text-lg">{cat.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-slate-800">{cat.name}</p>
                            <p className="text-xs text-slate-500 line-clamp-1">{cat.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Subcategories */}
                  {suggestions.subcategories.length > 0 && (
                    <div className="p-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">Subcategories</p>
                      {suggestions.subcategories.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(`/products?category=${sub.categorySlug}&subcategory=${encodeURIComponent(sub.name)}`)}
                          className="w-full text-left px-3 py-2 hover:bg-emerald-50 rounded-lg flex items-center gap-3 transition-colors"
                        >
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-slate-800">{sub.name}</p>
                            <p className="text-xs text-slate-500">in {sub.categoryName}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Products */}
                  {suggestions.products.length > 0 && (
                    <div className="p-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">Products</p>
                      {suggestions.products.map(prod => {
                        const category = CATEGORIES.find(c => c.id === prod.categoryId);
                        return (
                          <button
                            key={prod.id}
                            onClick={() => handleSuggestionClick(`/products?search=${encodeURIComponent(prod.name)}`)}
                            className="w-full text-left px-3 py-2 hover:bg-emerald-50 rounded-lg flex items-center gap-3 transition-colors"
                          >
                            <img src={prod.image} alt={prod.name} className="w-10 h-10 object-cover rounded-lg" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-800 truncate">{prod.name}</p>
                              <p className="text-xs text-slate-500">{category?.name || 'Product'}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* View All Results */}
                  <div className="p-2 border-t border-slate-100">
                    <button
                      onClick={() => handleSuggestionClick(`/products?search=${encodeURIComponent(searchQuery)}`)}
                      className="w-full text-center px-3 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      View all results for "{searchQuery}"
                    </button>
                  </div>
                </div>
              )}
            </div>
            )}

            {/* Login Button */}
            {!hideTopHeaderControls && (
              <Link
                to="/login"
                className="hidden md:block bg-brand-red text-white px-6 py-2 rounded-lg text-sm font-black tracking-widest hover:brightness-110 transition-all active:scale-95"
              >
                Login
              </Link>
            )}

            {/* Menu Button */}
            {!hideTopHeaderControls && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Product Sub-Nav */}
      {!hideSubNav && (
      <div className="bg-brand-red border-t border-b border-red-700 sticky-sub-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollCategories('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollCategories('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full transition-all"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={categoryScrollRef}
            className="flex space-x-8 py-5 whitespace-nowrap overflow-x-auto no-scrollbar overscroll-x-contain mx-10"
          >
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="relative group"
                data-category-item
                onMouseEnter={(e) => handleCategoryHover(cat.id, e)}
                onMouseLeave={handleCategoryLeave}
              >
                <div className="flex items-center gap-1">
                  <Link
                    to={`/category/${cat.slug}`}
                    onClick={() => setHoveredCategory(null)}
                    className="text-[10px] font-black text-white hover:text-[#333] transition-colors uppercase tracking-[0.15em]"
                  >
                    {cat.name}
                  </Link>
                  {cat.subcategories && cat.subcategories.length > 0 && (
                    <button
                      type="button"
                      onClick={(e) => handleCategoryToggle(cat.id, e)}
                      className="text-white hover:text-[#333] transition-colors"
                      aria-label={`Toggle ${cat.name} subcategories`}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Dropdown rendered outside overflow container */}
      {!hideSubNav && hoveredCategory && (() => {
        const cat = CATEGORIES.find(c => c.id === hoveredCategory);
        if (!cat?.subcategories?.length) return null;
        return (
          <div 
            data-subcategory-dropdown
            className="fixed z-[9999] bg-white rounded-lg shadow-xl pt-2 pb-2 min-w-[180px]"
            style={{ left: `${dropdownPosition.left}px`, top: `${dropdownPosition.top}px`, paddingTop: '10px', marginTop: '-2px' }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            {cat.subcategories.map((sub, idx) => (
              <Link
                key={idx}
                to={`/category/${cat.slug}?sub=${encodeURIComponent(sub)}`}
                onClick={() => setHoveredCategory(null)}
                className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {sub}
              </Link>
            ))}
          </div>
        );
      })()}

      {/* Side Drawer Navigation */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[99998] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white z-[99999] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src="/assets/logo1.jpg" alt="Good Luck Foods" className="h-12 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Search */}
          <div className="px-4 py-4 border-b border-slate-100">
            <form onSubmit={(e) => { handleSearch(e); setIsOpen(false); }}>
              <div className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full rounded-lg px-4 py-3 text-sm border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-bold rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'logo-text-green bg-emerald-50' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* User Section */}
            <div className="px-4 mt-6">
              {isAuthenticated ? (
                <>
                  <div className="px-4 py-3 bg-slate-50 rounded-lg mb-2">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Logged in as</p>
                    <p className="text-base font-bold text-slate-900">{user?.fullName}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-base font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-6 border-t border-slate-200">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full text-center bg-brand-red text-white px-6 py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;