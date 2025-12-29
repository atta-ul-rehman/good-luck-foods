import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  // Mock logic for badges to match Bacola look
  const isRecommended = parseInt(product.id.slice(-1)) % 3 === 0;
  const discount = Math.floor(Math.random() * 20) + 10;

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full group relative">

      {/* Retail Style Badges */}
      <div className="absolute top-5 left-5 z-20 flex flex-col gap-2">
        <div className="bg-brand-lime text-brand-dark px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm">
          {discount}% OFF BULK
        </div>
        {isRecommended && (
          <div className="bg-brand-red text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm">
            RECOMMENDED
          </div>
        )}
      </div>

      {/* Image Area */}
      <div className="aspect-square overflow-hidden bg-slate-50 relative p-6 h-[250px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Rating/Trust */}
        <div className="flex items-center space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map(star => (
            <svg key={star} className={`w-3 h-3 ${star <= 4 ? 'text-yellow-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          ))}
          <span className="text-[10px] font-black text-slate-300 ml-2">4.0 (12 Reviews)</span>
        </div>

        <h3 className="font-black text-[#0f172a] text-[17px] mb-2 uppercase tracking-tighter leading-tight group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center space-x-2 mb-4">
          <span className="text-[10px] font-black text-brand-green bg-brand-green/5 px-2 py-0.5 rounded uppercase tracking-widest">IN STOCK</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Grade A Certified</span>
        </div>

        <p className="text-[12px] text-slate-500 mb-8 font-medium leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Footer Actions */}
        <div className="mt-auto pt-6 border-t border-slate-50">
          <Link
            to="/contact"
            state={{ product: product.name }}
            className="w-full bg-white border-2 border-slate-100 hover:border-brand-green hover:bg-brand-green hover:text-white text-slate-900 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center space-x-3 shadow-sm hover:shadow-brand-green/20"
          >
            <span className="font-black text-[12px]"  >Request Wholesale Price</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          </Link>
          <div className="mt-4 flex justify-between items-center px-1">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">MOQ: 1 Pallet</span>
            <Link to={`/category/${product.categoryId}`} className="text-[10px] font-black text-brand-green hover:underline uppercase tracking-widest">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;