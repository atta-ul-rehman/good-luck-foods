import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Drinks', slug: 'drinks', description: 'Premium beverages including sodas, artisanal juices, and mineral waters.', image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7e?auto=format&fit=crop&q=80&w=800', icon: '🥤', subcategories: ['Canned Drinks', 'Bottled Drinks'] },
  { id: '2', name: 'Packaging', slug: 'packaging', description: 'Sustainable and industrial strength wholesale packaging solutions.', image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=800', icon: '📦', subcategories: ['Paper Bags with Handles', 'Paper Bags without Handles', 'Chicken Boxes', 'Wrapping Sheets'] },
  { id: '3', name: 'Frozen Foods', slug: 'frozen-foods', description: 'IQF vegetables, premium meats, and ready-to-heat professional meals.', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800', icon: '❄️', subcategories: ['Frozen Chips', 'Frozen Buns', 'Frozen Meat', 'Frozen Chicken'] },
  { id: '4', name: 'Desserts', slug: 'desserts', description: 'Wholesale sweets, cakes, ice cream and confectionery items.', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800', icon: '🍰', subcategories: ['Cakes', 'Ice Cream', 'Confectionery'] },
  { id: '5', name: 'Flour & Grains', slug: 'flour-grains', description: 'High-protein flours and premium grains for commercial baking.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800', icon: '🌾', subcategories: ['Pizza Flour', 'Rice', 'Other Grains'] },
  { id: '6', name: 'Canned Products', slug: 'canned-products', description: 'Bulk preserved goods, legumes, and pantry staples.', image: 'https://images.unsplash.com/photo-1534483909714-d40394c01443?auto=format&fit=crop&q=80&w=800', icon: '🥫', subcategories: ['Olives', 'Pizza Sauces', 'Other Canned Items'] },
  { id: '7', name: 'Fresh Products', slug: 'fresh-products', description: 'Daily-sourced produce from local farms and global suppliers.', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800', icon: '🍎', subcategories: ['Vegetables', 'Fresh Chicken'] },
  { id: '8', name: 'Spices & Herbs', slug: 'spices-herbs', description: 'Authentic flavors sourced directly from origins worldwide.', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800', icon: '🌶️', subcategories: ['Breading', 'Spices', 'Herbs'] },
  { id: '9', name: 'Oils & Fats', slug: 'oils-fats', description: 'Cooking oils, butter, and shortenings in industrial formats.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=800', icon: '🫗', subcategories: ['Cooking Oil', 'Solid Fats'] },
  { id: '10', name: 'Sauces', slug: 'sauces', description: 'Condiments and base sauces for commercial food service.', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=800', icon: '🍯', subcategories: ['Marinades', 'Mayonnaise', 'LION'] },
  { id: '11', name: 'Cleaning Supplies', slug: 'cleaning-supplies', description: 'Industrial cleaning supplies and degreasers.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', icon: '🧹', subcategories: ['Washing Up Liquids', 'Degreasers', 'Other Cleaning Items'] },
  { id: '12', name: 'General Items', slug: 'general-items', description: 'Kitchen essentials and miscellaneous items.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', icon: '🍴' }
];

export const PRODUCTS: Product[] = [
  // Drinks (Category 1)
  { id: 'p1', categoryId: '1', name: 'Premium Mineral Water', description: 'Pure volcanic spring water in various glass and PET bottle sizes.', image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&q=80&w=400' },
  { id: 'p2', categoryId: '1', name: 'Organic Fruit Juices', description: 'Cold-pressed 100% natural juices for premium hospitality.', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400' },
  { id: 'p3', categoryId: '1', name: 'Sparkling Soda Mixers', description: 'High-carbonation mixers for bars and restaurants.', image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=400' },
  { id: 'p4', categoryId: '1', name: 'Energy Drinks Bulk Pack', description: 'High caffeine energy drinks for convenience stores.', image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=400' },
  { id: 'p5', categoryId: '1', name: 'Iced Tea Collection', description: 'Premium iced tea in multiple flavors for cafes.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400' },
  
  // Packaging (Category 2)
  { id: 'p6', categoryId: '2', name: 'Eco-Friendly Takeout Boxes', description: 'Compostable sugarcane fiber containers for sustainable brands.', image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=400' },
  { id: 'p7', categoryId: '2', name: 'Paper Bags with Handles', description: 'Sturdy kraft paper bags for retail and takeaway.', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=400' },
  { id: 'p8', categoryId: '2', name: 'Chicken Box Large', description: 'Ventilated boxes for fried chicken takeaway orders.', image: 'https://images.unsplash.com/photo-1626645738196-c2a72c7e1f58?auto=format&fit=crop&q=80&w=400' },
  { id: 'p9', categoryId: '2', name: 'Wrapping Sheets Roll', description: 'Grease-proof wrapping paper for burgers and sandwiches.', image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=400' },
  { id: 'p10', categoryId: '2', name: 'Pizza Box Multi-Size', description: 'Corrugated pizza boxes in 10", 12", and 14" sizes.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400' },
  
  // Frozen Foods (Category 3)
  { id: 'p11', categoryId: '3', name: 'Bulk Chicken Breasts', description: 'IQF skinless boneless chicken breasts, Grade A, Halal certified.', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400' },
  { id: 'p12', categoryId: '3', name: 'Premium Frozen Berries', description: 'Mixed forest berries, blast-frozen to preserve nutrients.', image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&q=80&w=400' },
  { id: 'p13', categoryId: '3', name: 'Frozen Chips 2.5kg', description: 'Premium straight-cut chips for commercial fryers.', image: 'https://images.unsplash.com/photo-1630384060421-cb20adf44e8b?auto=format&fit=crop&q=80&w=400' },
  { id: 'p14', categoryId: '3', name: 'Frozen Beef Patties', description: 'Quarter-pound beef patties, 48 count box.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
  { id: 'p15', categoryId: '3', name: 'Frozen Burger Buns', description: 'Sesame seed buns, pre-sliced, 60 count.', image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=400' },
  
  // Desserts (Category 4)
  { id: 'p16', categoryId: '4', name: 'Chocolate Cake Mix', description: 'Professional grade chocolate cake mix, 10kg bag.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400' },
  { id: 'p17', categoryId: '4', name: 'Vanilla Ice Cream 5L', description: 'Premium vanilla ice cream for dessert parlors.', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=400' },
  { id: 'p18', categoryId: '4', name: 'Assorted Confectionery', description: 'Mixed candy selection for retail display.', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=400' },
  { id: 'p19', categoryId: '4', name: 'Cheesecake Base', description: 'Ready-made cheesecake base, pack of 12.', image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=400' },
  { id: 'p20', categoryId: '4', name: 'Whipped Cream Cans', description: 'Professional whipped cream dispensers, case of 24.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400' },
  
  // Flour & Grains (Category 5)
  { id: 'p21', categoryId: '5', name: 'High-Gluten Bread Flour', description: 'Superior strength flour for artisanal bakeries and pizzerias.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' },
  { id: 'p22', categoryId: '5', name: 'Pizza Flour 00', description: 'Italian-style 00 flour for authentic pizza dough.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400' },
  { id: 'p23', categoryId: '5', name: 'Basmati Rice 25kg', description: 'Premium long-grain basmati rice for restaurants.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400' },
  { id: 'p24', categoryId: '5', name: 'Semolina Flour', description: 'Durum wheat semolina for pasta making.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400' },
  { id: 'p25', categoryId: '5', name: 'Wholemeal Flour 16kg', description: 'Stone-ground wholemeal flour for healthy baking.', image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=400' },
  
  // Canned Products (Category 6)
  { id: 'p26', categoryId: '6', name: 'Pizza Sauce 3kg', description: 'Italian-style pizza sauce in catering tin.', image: 'https://images.unsplash.com/photo-1528751004905-2f447291c582?auto=format&fit=crop&q=80&w=400' },
  { id: 'p27', categoryId: '6', name: 'Green Olives Pitted', description: 'Spanish green olives, pitted, 2kg jar.', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=400' },
  { id: 'p28', categoryId: '6', name: 'Chickpeas Bulk Can', description: 'Pre-cooked chickpeas in bulk catering can.', image: 'https://images.unsplash.com/photo-1534483909714-d40394c01443?auto=format&fit=crop&q=80&w=400' },
  { id: 'p29', categoryId: '6', name: 'Black Olives Sliced', description: 'Sliced black olives for pizza toppings.', image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=400' },
  { id: 'p30', categoryId: '6', name: 'Crushed Tomatoes 2.5kg', description: 'San Marzano style crushed tomatoes.', image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=400' },
  
  // Fresh Products (Category 7)
  { id: 'p31', categoryId: '7', name: 'Fresh Chicken Whole', description: 'Whole fresh chicken, Halal certified.', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=400' },
  { id: 'p32', categoryId: '7', name: 'Mixed Vegetables Box', description: 'Daily fresh mixed vegetables selection.', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=400' },
  { id: 'p33', categoryId: '7', name: 'Fresh Onions 10kg', description: 'Premium white onions in bulk bag.', image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80&w=400' },
  { id: 'p34', categoryId: '7', name: 'Fresh Tomatoes Box', description: 'Vine-ripened tomatoes for restaurants.', image: 'https://images.unsplash.com/photo-1546094096-0df4bcabd337?auto=format&fit=crop&q=80&w=400' },
  { id: 'p35', categoryId: '7', name: 'Fresh Lettuce Case', description: 'Iceberg lettuce heads, case of 12.', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=400' },
  
  // Spices & Herbs (Category 8)
  { id: 'p36', categoryId: '8', name: 'Whole Black Peppercorns', description: 'Grade A Sarawak peppercorns in 5kg industrial sacks.', image: 'https://images.unsplash.com/photo-1599940859674-a7fef639eaec?auto=format&fit=crop&q=80&w=400' },
  { id: 'p37', categoryId: '8', name: 'Smoked Spanish Paprika', description: 'Authentic Pimentón de la Vera for professional kitchens.', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=400' },
  { id: 'p38', categoryId: '8', name: 'Chicken Breading Mix', description: 'Southern-style breading for fried chicken.', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400' },
  { id: 'p39', categoryId: '8', name: 'Mixed Italian Herbs', description: 'Dried oregano, basil, and thyme blend.', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=400' },
  { id: 'p40', categoryId: '8', name: 'Turmeric Powder 1kg', description: 'Pure ground turmeric for curry houses.', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=400' },
  
  // Oils & Fats (Category 9)
  { id: 'p41', categoryId: '9', name: 'Vegetable Oil 20L', description: 'High-temperature frying oil for commercial use.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=400' },
  { id: 'p42', categoryId: '9', name: 'Solid Vegetable Fat', description: 'Premium shortening for baking.', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400' },
  { id: 'p43', categoryId: '9', name: 'Extra Virgin Olive Oil', description: 'Cold-pressed olive oil, 5L tin.', image: 'https://images.unsplash.com/photo-1596360301181-bab3e14b8abb?auto=format&fit=crop&q=80&w=400' },
  { id: 'p44', categoryId: '9', name: 'Sunflower Oil 10L', description: 'Light sunflower oil for cooking.', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400' },
  { id: 'p45', categoryId: '9', name: 'Butter Blocks 2kg', description: 'Salted butter blocks for baking.', image: 'https://images.unsplash.com/photo-1589985263345-3e61882b06e3?auto=format&fit=crop&q=80&w=400' },
  
  // Sauces (Category 10)
  { id: 'p46', categoryId: '10', name: 'Classic Tomato Marinara', description: 'Premium base sauce made with San Marzano style tomatoes.', image: 'https://images.unsplash.com/photo-1528751004905-2f447291c582?auto=format&fit=crop&q=80&w=400' },
  { id: 'p47', categoryId: '10', name: 'BBQ Marinade 5L', description: 'Smoky BBQ marinade for grilled meats.', image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=400' },
  { id: 'p48', categoryId: '10', name: 'Mayonnaise 10kg', description: 'Commercial grade mayonnaise bucket.', image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&q=80&w=400' },
  { id: 'p49', categoryId: '10', name: 'Hot Sauce Gallon', description: 'Medium heat hot sauce for chicken shops.', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=400' },
  { id: 'p50', categoryId: '10', name: 'Garlic Mayo 5kg', description: 'Creamy garlic mayonnaise for kebab shops.', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=400' },
  
  // Cleaning Supplies (Category 11)
  { id: 'p51', categoryId: '11', name: 'Washing Up Liquid 5L', description: 'Professional strength dish soap.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
  { id: 'p52', categoryId: '11', name: 'Kitchen Degreaser 5L', description: 'Heavy-duty degreaser for commercial kitchens.', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400' },
  { id: 'p53', categoryId: '11', name: 'Floor Cleaner 5L', description: 'Commercial floor cleaning solution.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400' },
  { id: 'p54', categoryId: '11', name: 'Sanitizer Spray 750ml', description: 'Food-safe surface sanitizer.', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=400' },
  { id: 'p55', categoryId: '11', name: 'Oven Cleaner 5L', description: 'Professional oven and grill cleaner.', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=400' },
  
  // General Items (Category 12)
  { id: 'p56', categoryId: '12', name: 'Disposable Gloves Box', description: 'Nitrile gloves, box of 100.', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400' },
  { id: 'p57', categoryId: '12', name: 'Kitchen Foil Roll', description: 'Heavy-duty aluminium foil, 45cm x 150m.', image: 'https://images.unsplash.com/photo-1594136273046-cbcf44e7b8a3?auto=format&fit=crop&q=80&w=400' },
  { id: 'p58', categoryId: '12', name: 'Cling Film Catering', description: 'Professional cling film, 45cm x 300m.', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=400' },
  { id: 'p59', categoryId: '12', name: 'Napkins Bulk Pack', description: 'White paper napkins, 5000 count.', image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&q=80&w=400' },
  { id: 'p60', categoryId: '12', name: 'Wooden Skewers 1000pc', description: 'Bamboo skewers for kebabs.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400' },
];

export const INDUSTRIES = [
  { name: 'Supermarkets', icon: '🛒', desc: 'Full-shelf inventory management' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Premium ingredients for chefs' },
  { name: 'Hotels', icon: '🏨', desc: 'Consistent hospitality supply' },
  { name: 'Cafés', icon: '☕', desc: 'Beverage and pastry essentials' },
  { name: 'Distributors', icon: '🚛', desc: 'Regional sub-wholesale customers' },
  { name: 'Bakeries', icon: '🥐', desc: 'Bulk grains and specialty flours' },
];