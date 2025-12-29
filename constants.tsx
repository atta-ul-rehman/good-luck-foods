import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Drinks', slug: 'drinks', description: 'Premium beverages including sodas, artisanal juices, and mineral waters.', image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7e?auto=format&fit=crop&q=80&w=800', icon: '🥤' },
  { id: '2', name: 'Packaging', slug: 'packaging', description: 'Sustainable and industrial strength wholesale packaging solutions.', image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=800', icon: '📦' },
  { id: '3', name: 'Frozen Food', slug: 'frozen-food', description: 'IQF vegetables, premium meats, and ready-to-heat professional meals.', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800', icon: '❄️' },
  { id: '4', name: 'Fresh Products', slug: 'fresh-products', description: 'Daily-sourced produce from local farms and global partners.', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800', icon: '🍎' },
  { id: '5', name: 'Flours & Grains', slug: 'flours', description: 'High-protein flours and premium grains for commercial baking.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800', icon: '🌾' },
  { id: '6', name: 'Canned Products', slug: 'canned-products', description: 'Bulk preserved goods, legumes, and pantry staples.', image: 'https://images.unsplash.com/photo-1534483909714-d40394c01443?auto=format&fit=crop&q=80&w=800', icon: '🥫' },
  { id: '7', name: 'Spices & Herbs', slug: 'spices', description: 'Authentic flavors sourced directly from origins worldwide.', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800', icon: '🌶️' },
  { id: '8', name: 'Confectionery', slug: 'confectionery', description: 'Wholesale sweets, chocolates, and dessert base ingredients.', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800', icon: '🍬' },
  { id: '9', name: 'Oil & Fat', slug: 'oil-and-fat', description: 'Cooking oils, butter, and shortenings in industrial formats.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=800', icon: '🫗' },
  { id: '10', name: 'Sauces', slug: 'sauces', description: 'Condiments and base sauces for commercial food service.', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=800', icon: '🍯' },
  { id: '11', name: 'General Items', slug: 'general', description: 'Industrial cleaning supplies and kitchen essentials.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', icon: '🍴' }
];

export const PRODUCTS: Product[] = [
  { id: 'p1', categoryId: '1', name: 'Premium Mineral Water', description: 'Pure volcanic spring water in various glass and PET bottle sizes.', image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&q=80&w=400' },
  { id: 'p2', categoryId: '1', name: 'Organic Fruit Juices', description: 'Cold-pressed 100% natural juices for premium hospitality.', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400' },
  { id: 'p2.1', categoryId: '1', name: 'Sparkling Soda Mixers', description: 'High-carbonation mixers for bars and restaurants.', image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=400' },
  
  { id: 'p3', categoryId: '3', name: 'Bulk Chicken Breasts', description: 'IQF skinless boneless chicken breasts, Grade A, Halal certified.', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400' },
  { id: 'p3.1', categoryId: '3', name: 'Premium Frozen Berries', description: 'Mixed forest berries, blast-frozen to preserve nutrients.', image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=400' },

  { id: 'p4', categoryId: '7', name: 'Whole Black Peppercorns', description: 'Grade A Sarawak peppercorns in 5kg industrial sacks.', image: 'https://images.unsplash.com/photo-1599940859674-a7fef639eaec?auto=format&fit=crop&q=80&w=400' },
  { id: 'p4.1', categoryId: '7', name: 'Smoked Spanish Paprika', description: 'Authentic Pimentón de la Vera for professional kitchens.', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=400' },

  { id: 'p5', categoryId: '5', name: 'High-Gluten Bread Flour', description: 'Superior strength flour for artisanal bakeries and pizzerias.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: 'p6', categoryId: '2', name: 'Eco-Friendly Takeout Boxes', description: 'Compostable sugarcane fiber containers for sustainable brands.', image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=400' },
  
  { id: 'p10', categoryId: '10', name: 'Classic Tomato Marinara', description: 'Premium base sauce made with San Marzano style tomatoes.', image: 'https://images.unsplash.com/photo-1528751004905-2f447291c582?auto=format&fit=crop&q=80&w=400' },
];

export const INDUSTRIES = [
  { name: 'Supermarkets', icon: '🛒', desc: 'Full-shelf inventory management' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Premium ingredients for chefs' },
  { name: 'Hotels', icon: '🏨', desc: 'Consistent hospitality supply' },
  { name: 'Cafés', icon: '☕', desc: 'Beverage and pastry essentials' },
  { name: 'Distributors', icon: '🚛', desc: 'Regional sub-wholesale partners' },
  { name: 'Bakeries', icon: '🥐', desc: 'Bulk grains and specialty flours' },
];