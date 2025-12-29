
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
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-2xl shadow-sm">
          {category.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
        <span className="text-emerald-600 text-sm font-bold flex items-center group-hover:translate-x-2 transition-transform">
          View Products
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
