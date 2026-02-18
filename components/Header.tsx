import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Reflecting the provided Image */}
          <Link to="/" className="flex items-center group">
            <img src="/assets/logo1.jpg" alt="Good Luck Foods" className="h-14 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Right Side: Search, Button, and Menu */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-48 px-4 py-2 text-sm border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Request Quote Button */}
            <Link
              to="/contact"
              className="hidden md:block bg-brand-red text-white px-6 py-2.5 text-sm font-black tracking-widest hover:brightness-110 transition-all active:scale-95"
            >
              Login
            </Link>

            {/* Menu Button */}
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
          </div>
        </div>
      </div>

      {/* Sticky Product Sub-Nav */}
      <div className="bg-slate-50 border-t border-b border-slate-200 overflow-x-auto sticky-sub-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-3 whitespace-nowrap overflow-x-auto no-scrollbar overscroll-x-contain">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="text-[10px] font-black text-slate-400 hover:logo-text-green transition-colors uppercase tracking-[0.15em]"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Side Drawer Navigation */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
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
              className="block w-full text-center bg-brand-red text-white px-6 py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all"
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