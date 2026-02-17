
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface Props {
  category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group bg-white overflow-hidden border-2 border-slate-200 hover:border-emerald-600 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 left-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center text-2xl">
          {category.icon}
        </div>
      </div>
      <div className="p-5 border-t-4 border-emerald-600">
        <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors uppercase tracking-wide">
          {category.name}
        </h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
        <span className="text-emerald-600 text-xs font-black flex items-center uppercase tracking-widest group-hover:translate-x-2 transition-transform">
          View Products
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
