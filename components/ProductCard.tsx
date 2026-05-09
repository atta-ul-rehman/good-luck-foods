import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface Props {
  product: Product;
  layout?: 'grid' | 'list';
}

const ProductCard: React.FC<Props> = ({ product, layout = 'grid' }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const category = CATEGORIES.find(c => c.id === product.categoryId);

  const quantityText = useMemo(() => {
    const patterns = [
      /\b\d+\s*[xX]\s*\d+(?:\.\d+)?\s*(?:KG|G|ML|L|LTR|LT|OZ)?\b/i,
      /\b\d+(?:\.\d+)?\s*(?:KG|G|ML|L|LTR|LT|OZ)\b/i,
      /\b\d+\s*(?:PCS|PACK|PACKS|PK)\b/i,
    ];

    for (const pattern of patterns) {
      const match = product.name.match(pattern);
      if (match) {
        return match[0].toUpperCase().replace(/\s+/g, ' ').trim();
      }
    }

    return 'Bulk pack';
  }, [product.name]);

  const openQuickView = useCallback(() => {
    setIsQuickViewOpen(true);
  }, []);

  const closeQuickView = useCallback(() => {
    setIsQuickViewOpen(false);
  }, []);

  useEffect(() => {
    if (!isQuickViewOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeQuickView();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isQuickViewOpen, closeQuickView]);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return;
    openQuickView();
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openQuickView();
    }
  };

  return (
    <>
    <div
      className={`bg-white rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 flex ${layout === 'grid' ? 'flex-col' : 'flex-row'} h-full group relative border border-slate-200 hover:border-brand-green hover:shadow-lg cursor-pointer`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Quick view ${product.name}`}
    >
      
      {/* Image Area */}
      <div className="relative overflow-hidden bg-slate-50">
        <div className="aspect-[5/3] md:aspect-[4/3]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3">
          <span className="bg-brand-green text-white px-1.5 py-0.5 md:px-2.5 md:py-1 rounded text-[8px] md:text-[10px] font-bold uppercase tracking-wide">
            {category?.name || 'Wholesale'}
          </span>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 md:pb-6">
          <span className="text-white text-[10px] md:text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
            Quick View
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3 md:p-5 flex flex-col flex-grow bg-slate-900">
        {/* Stock Status */}
        <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-red rounded-full animate-pulse"></span>
            <span className="text-[9px] md:text-[11px] font-semibold text-white">In Stock</span>
          </span>
          <span className="text-slate-300 text-[9px] md:text-base">•</span>
          <span className="text-[9px] md:text-[11px] text-slate-200 font-medium">Bulk Available</span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-white text-sm md:text-base mb-1.5 md:mb-2 leading-snug group-hover:text-slate-100 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-[11px] md:text-[13px] text-slate-50 mb-3 md:mb-4 leading-relaxed line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Footer */}
        <div className="mt-auto">

          {/* CTA Button */}
          <Link
            to="/contact"
            state={{ product: product.name }}
            onClick={(event) => event.stopPropagation()}
            className="w-full bg-slate-100 hover:bg-slate-200 text-center py-2 md:py-3 px-3 md:px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            <span className="text-center text-black font-bold text-xs md:text-sm">Get Wholesale Price</span>
          </Link>
        </div>
      </div>
    </div>

    {isQuickViewOpen && (
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={closeQuickView}
        role="dialog"
        aria-modal="true"
        aria-label={`Quick view ${product.name}`}
      >
        <div
          className="bg-white rounded-2xl md:rounded-3xl overflow-hidden max-w-md w-full shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative bg-[#ececec]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 md:h-64 object-contain"
            />
            <button
              type="button"
              onClick={closeQuickView}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white text-lg leading-none"
              aria-label="Close quick view"
            >
              ×
            </button>
          </div>

          <div className="p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3">{product.name}</h3>
            <div className="bg-slate-100 rounded-xl px-4 py-3">
              <p className="text-[11px] uppercase tracking-widest font-black text-slate-500 mb-1">Quantity</p>
              <p className="text-sm md:text-base font-bold text-slate-900">{quantityText}</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default ProductCard;