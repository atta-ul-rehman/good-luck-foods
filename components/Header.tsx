import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Reflecting the provided Image */}
          <Link to="/" className="flex items-center group">
            <div className="brand-gradient w-12 h-12 rounded-tl-[20px] rounded-br-[20px] flex items-center justify-center text-white mr-4 shadow-md overflow-hidden relative">
              <div className="absolute inset-0 bg-white opacity-10 rotate-45 transform translate-y-6"></div>
              <span className="font-black text-xl italic leading-none">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none logo-text-green uppercase">Good</span>
              <span className="text-2xl font-black tracking-tighter leading-none logo-text-red uppercase">Luck</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-800 uppercase leading-tight">Foods LTD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors ${isActive(link.path) ? 'logo-text-green' : 'text-slate-600 hover:logo-text-green'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="text-sm font-bold text-slate-600 hover:logo-text-green transition-colors mr-2"
            >
              Sign In
            </Link>
            <Link
              to="/contact"
              className="bg-brand-red text-white px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-md active:scale-95"
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold rounded-md ${isActive(link.path) ? 'logo-text-green bg-slate-50' : 'text-slate-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-bold text-slate-600 hover:bg-slate-50 rounded-md"
            >
              Sign In
            </Link>
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-green text-white px-6 py-4 rounded-lg font-black uppercase tracking-widest"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;