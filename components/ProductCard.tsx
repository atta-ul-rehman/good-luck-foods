import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface Props {
  product: Product;
  layout?: 'grid' | 'list';
}

const ProductCard: React.FC<Props> = ({ product, layout = 'grid' }) => {
  const category = CATEGORIES.find(c => c.id === product.categoryId);

  return (
    <div className={`bg-white rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 flex ${layout === 'grid' ? 'flex-col' : 'flex-row'} h-full group relative border border-slate-200 hover:border-brand-green hover:shadow-lg`}>
      
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
            className="w-full bg-slate-100 hover:bg-slate-200 text-center py-2 md:py-3 px-3 md:px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            <span className="text-center text-black font-bold text-xs md:text-sm">Get Wholesale Price</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;