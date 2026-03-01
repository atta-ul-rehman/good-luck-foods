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
    <div className={`bg-white rounded-xl overflow-hidden transition-all duration-300 flex ${layout === 'grid' ? 'flex-col' : 'flex-row'} h-full group relative border border-slate-200 hover:border-brand-green hover:shadow-lg`}>
      
      {/* Image Area */}
      <div className="relative overflow-hidden bg-slate-50">
        <div className="aspect-[4/3]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-brand-green text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide">
            {category?.name || 'Wholesale'}
          </span>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Quick View
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow bg-slate-900">
        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
            <span className="text-[11px] font-semibold text-white">In Stock</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[11px] text-slate-200 font-medium">Bulk Available</span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-white text-base mb-2 leading-snug group-hover:text-slate-100 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-slate-50 mb-4 leading-relaxed line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Footer */}
        <div className="mt-auto space-y-3">

          {/* CTA Button */}
          <Link
            to="/contact"
            state={{ product: product.name }}
            className="w-full bg-slate-100 hover:bg-slate-200 text-white py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <span className="text-black ">Get Wholesale Price</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;