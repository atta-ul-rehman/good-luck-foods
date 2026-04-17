import { Category, Product } from './types';

const DRINK_CAN_ASSET_BASE = '/assets/Drink Cans processed';
const AVIKO_ASSET_BASE = '/assets/Aviko - Processed incomp';
const BREAD_BUNS_ASSET_BASE = '/assets/Bread & buns processed';
const BURGER_ASSET_BASE = '/assets/Burger Processed';
const CANNED_ASSET_BASE = '/assets/Canned food 2';

const DRINK_CAN_FILES = [
  '7UP CANS 24X330ML.webp',
  'BAR CHERRYADE 24X330 ML.webp',
  'BAR COLA 24X330 ML.webp',
  'BAR LEMONADE  24X330 ML.webp',
  'CAPRISUN (40X200ML).webp',
  'CHERRY COKE CANS (GB) 24X330ML.webp',
  'COKE CANS 24X330ML.webp',
  'DIET COKE 330ML 30PK.webp',
  'Dr PEPPER 24 X 330ml GB.webp',
  'FANTA FRT TWIST 24X330ML GB.webp',
  'FANTA G PE & P APPLE 24 X 330ML GB.webp',
  'FANTA LEMON 24 X 330ML GB.webp',
  'FANTA ORANGE 24X330ML GB.webp',
  'ICE COLA 24 X 330ML.webp',
  'ICE LEMONADE 24 X 330ML.webp',
  'ICE MANGO 24 X 330ML.webp',
  'ICE MAX 24 X 330ML.webp',
  'ICE ORANGE 24 X 330ML.webp',
  'ICE STRAWBERRY 24 X 330ML.webp',
  'IRN BRU 24X330 ML GB.webp',
  'LUCOZADE ORANGE 24X380ML.webp',
  'MIRINDA  ORANGE 24X330ML.webp',
  'MIRINDA STRAWBERRY 24X330ML.webp',
  'MONSTER ENERGY DRINK.webp',
  'PEPSI CANS    24 X 330ML.webp',
  'PEPSI LIGHT CANS 24X330ML.webp',
  'PEPSI MAX CANS 24X330ML.webp',
  'RED BULL 24 X 250 ML.webp',
  'RIBENA BLK CURNT 24X250ML.webp',
  'RIO TROPICAL 24X330ML GB.webp',
  'RUBICON MANGO 24X330ML GB.webp',
  'RUBICON PASSION 24X330ML GB .webp',
  'RUBICUN GUAVA 24X330ML GB.webp',
  'SPRITE 24X330ML GB.webp',
  'TANGO APPLE 24X330ML GB.webp',
  'TANGO ORANGE 24X330ML GB.webp',
  'VIMTO 24X330ML GB.webp',
  'ZANTI COLA 330X24ML.webp',
] as const;

const SAUCE_BOTTLE_FILES = [
  'HARRISONS GARLIC MAYO 1LTR.webp',
  'HARRISONS GARLIC MAYO 6 X1LTR.webp',
  'HARRISONS S CHILLI 1LTR.webp',
  'HARRISONS S CHILLI 6x1LTR.webp',
] as const;

const AVIKO_FILES = [
  'AVIKO BATTERED ONION RINGS BOX 6X1KG.webp',
  'AVIKO CHILLI CHEDDAR NUGGETS5X1KG.webp',
  'AVIKO HASH BROWNS TRIANGLE 4X2.5KG.webp',
  'AVIKO HASHBROWN  TRIANGAES 2.5 KG.webp',
  'AVIKO JALAPENO CHEESE SNK1X5 KG.webp',
  'AVIKO MAC && CHEESE 1 X 6 KG BOX.webp',
  'AVIKO MOZZARELLA STICKS 1KG.webp',
  'AVIKO MOZZASTICKS 5X1KG.webp',
  'AVIKO ONION RINGS 1X1KG.webp',
  'AVIKO PREMIUM CR 7MM 10 KG.webp',
  'AVIKO PREMIUM CURNCH 38 9.5MM.webp',
  'AVIKO SUPER CRUNCH  9.5 MM 4X2.5KG.webp',
  'AVIKO SWEET POTATO 1X2.2KG.webp',
  'AVIKO SWEET POTATO FRIES BOX .webp',
  'AVIKO VEGGIE BURGER 1125G.webp',
] as const;

const BREAD_BUNS_FILES = [
  '4 BUNS AMERICANA SEEDED BOX.webp',
  '4.5 BUNS AMERICANA SEEDED BOX.webp',
  '5 BUNS AMERICANA SEEDED BOX.webp',
  '5 BUNS LETSDOUGH 48X86G.webp',
  '6.5 SIDE SLICED HOT DOG ROLLS BOX.webp',
  'AMR BROICHE BUN 4.5.webp',
  'CABICO T WRAP 12.webp',
  'DULCESOL BRIOCHE .webp',
  'DULCESOL HOT DOG.webp',
  'DULCESOL WRAPS 10.webp',
  'LETSDOUGH SEEDED BUN 4.5.webp',
  'SABAT PITTA BREAD LARGE 18X6.webp',
  'SANTA MARIA 10 WRAPS 5X10.webp',
  'SANTA MARIA 12 WRAPS 10X10.webp',
  'ST PIERRE BUN SEEDEDX36.webp',
  'TORTILLA 25CM AYCAN 10.webp',
  'TORTILLA 30CM AYCAN 12.webp',
] as const;

const BURGER_FILES = [
  'PARAGON BASIC BUR 40z.webp',
  'PARAGON BASIC BURGER 2oz.webp',
  'PARAGON GOURMET BURGER.webp',
  'PARAGON HALAL CROWN BURGER 4OZ.webp',
  'PARAGON HALAL SMASH BRG 3OZ.webp',
  'PARGON CLASSIC BURGERS.webp',
] as const;

const CANNED_FILES = [
  'AYTAC CHICK PEAS JAR 12X540g.webp',
  'CARTIER BLACK OLIVES TIN 12X1KG.webp',
  'CARTIER BLACK OLIVES TIN 1X5KG.webp',
  'CARTIER BLACK OLIVES TIN 3X5KG.webp',
  'CARTIER GREEN OLIVES TIN 12X1KG.webp',
  'CARTIER GREEN OLIVES TIN 1X5KG.webp',
  'CARTIER GREEN OLIVES TIN 3X5KG.webp',
  'CRESPO GREEN OLIVE 1X420G.webp',
  'CRESPO GREEN OLIVE 3X420G.webp',
  'DL COCUNUT MILK 24X400ML.webp',
  'DON VALLE LEMON DRESSING 24X400 ML.webp',
  'HEERA MANGO CHUTNEY 40KG.webp',
  'HEERA MANGO CHUTNEY 5KG.webp',
  'NATCO CHOPPED TOMATOES 2.5KG.webp',
  'NATCO CHOPPED TOMATOES 6X2.5KG.webp',
  'NATCO MANGO PULP 450G.webp',
  'NATCO MANGO PULP 450GX12.webp',
  'NATCO MANGO PULP 6X850G.webp',
  'NATCO PEELED TOMATOES 2.5KG.webp',
  'NATCO PEELED TOMATOES 6X2.5KG.webp',
  'NVR  GERHKINS WHOLE  1 X 2.4ML.webp',
  'NVR  GERHKINS WHOLE  2 X 2.4ML.webp',
  'PINEAPPLE CUT PIECES 12X825G.webp',
  'PRIMA CHILLI PEPPERS PICKLED TIN 10 KG.webp',
  'PRIMA MANGO CHUTNEY 5KG.webp',
  'PRIMA PINEAPPLE 12x850G.webp',
  'PRIMA SLICED BLACK OLIVES 3 KG.webp',
  'PRIMA SLICED BLACK OLIVES 6x3 KG.webp',
  'TAHINI AL NAKHLA BUCKET.webp',
  'TAHINI AL NAKIL GREEN BUCKET.webp',
  'TETLEY TEA BAGS 400.webp',
  'TRS LEMON DRESING 24X400 ML.webp',
] as const;

const toProductName = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, '')
    .replace(/\s+/g, ' ')
    .trim();

const toProductImage = (assetBase: string, fileName: string) =>
  `${assetBase}/${fileName}`
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/')
    .replace('%2F', '/');

const createAssetProduct = (
  id: string,
  categoryId: string,
  assetBase: string,
  fileName: string,
  description: string
): Product => ({
  id,
  categoryId,
  name: toProductName(fileName),
  description,
  image: toProductImage(assetBase, fileName),
});

const createCategoryProducts = (
  idPrefix: string,
  categoryId: string,
  assetBase: string,
  fileNames: readonly string[],
  description: string
): Product[] =>
  fileNames.map((fileName, index) =>
    createAssetProduct(
      `${idPrefix}-${index + 1}`,
      categoryId,
      assetBase,
      fileName,
      description
    )
  );

const DRINK_CAN_PRODUCTS: Product[] = createCategoryProducts(
  'drink-can',
  '1',
  DRINK_CAN_ASSET_BASE,
  DRINK_CAN_FILES,
  'Wholesale case format for retail shelves, takeaways, and foodservice buyers.'
);

const SAUCE_BOTTLE_PRODUCTS: Product[] = createCategoryProducts(
  'sauce-bottle',
  '10',
  DRINK_CAN_ASSET_BASE,
  SAUCE_BOTTLE_FILES,
  'Popular wholesale bottle line for fast food shops, takeaways, and catering supply.'
);

const FROZEN_PRODUCTS: Product[] = [
  ...createCategoryProducts(
    'frozen-aviko',
    '3',
    AVIKO_ASSET_BASE,
    AVIKO_FILES,
    'Frozen wholesale products ideal for high-volume kitchens and takeaway operations.'
  ),
  ...createCategoryProducts(
    'frozen-buns',
    '3',
    BREAD_BUNS_ASSET_BASE,
    BREAD_BUNS_FILES,
    'Frozen buns, wraps, and bread lines supplied in bulk for foodservice buyers.'
  ),
  ...createCategoryProducts(
    'frozen-burger',
    '3',
    BURGER_ASSET_BASE,
    BURGER_FILES,
    'Bulk burger patties suitable for fast food stores, restaurants, and distributors.'
  ),
];

const CANNED_PRODUCTS: Product[] = createCategoryProducts(
  'canned',
  '6',
  CANNED_ASSET_BASE,
  CANNED_FILES,
  'Canned and preserved product range for wholesale buyers and catering suppliers.'
);

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Drinks', slug: 'drinks', description: 'Premium beverages including sodas, artisanal juices, and mineral waters.', image: '/assets/Drink%20Cans%20processed/COKE%20CANS%2024X330ML.webp', icon: '🥤', subcategories: ['Canned Drinks', 'Bottled Drinks'] },
  { id: '2', name: 'Packaging', slug: 'packaging', description: 'Sustainable and industrial strength wholesale packaging solutions.', image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&q=80&w=800', icon: '📦', subcategories: ['Paper Bags with Handles', 'Paper Bags without Handles', 'Chicken Boxes', 'Wrapping Sheets'] },
  { id: '3', name: 'Frozen Foods', slug: 'frozen-foods', description: 'IQF vegetables, premium meats, and ready-to-heat professional meals.', image: '/assets/Aviko%20-%20Processed%20incomp/AVIKO%20PREMIUM%20CR%207MM%2010%20KG.webp', icon: '❄️', subcategories: ['Frozen Chips', 'Frozen Buns', 'Frozen Meat', 'Frozen Chicken'] },
  { id: '4', name: 'Desserts', slug: 'desserts', description: 'Wholesale sweets, cakes, ice cream and confectionery items.', image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800', icon: '🍰', subcategories: ['Cakes', 'Ice Cream', 'Confectionery'] },
  { id: '5', name: 'Flour & Grains', slug: 'flour-grains', description: 'High-protein flours and premium grains for commercial baking.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800', icon: '🌾', subcategories: ['Pizza Flour', 'Rice', 'Other Grains'] },
  { id: '6', name: 'Canned Products', slug: 'canned-products', description: 'Bulk preserved goods, legumes, and pantry staples.', image: '/assets/Canned%20food%202/CARTIER%20BLACK%20OLIVES%20TIN%2012X1KG.webp', icon: '🥫', subcategories: ['Olives', 'Pizza Sauces', 'Other Canned Items'] },
  { id: '7', name: 'Fresh Products', slug: 'fresh-products', description: 'Daily-sourced produce from local farms and global suppliers.', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800', icon: '🍎', subcategories: ['Vegetables', 'Fresh Chicken'] },
  { id: '8', name: 'Spices & Herbs', slug: 'spices-herbs', description: 'Authentic flavors sourced directly from origins worldwide.', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800', icon: '🌶️', subcategories: ['Breading', 'Spices', 'Herbs'] },
  { id: '9', name: 'Oils & Fats', slug: 'oils-fats', description: 'Cooking oils, butter, and shortenings in industrial formats.', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800', icon: '🫗', subcategories: ['Cooking Oil', 'Solid Fats'] },
  { id: '10', name: 'Sauces', slug: 'sauces', description: 'Condiments and base sauces for commercial food service.', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=800', icon: '🍯', subcategories: ['Marinades', 'Mayonnaise', 'LION'] },
  { id: '11', name: 'Cleaning Supplies', slug: 'cleaning-supplies', description: 'Industrial cleaning supplies and degreasers.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', icon: '🧹', subcategories: ['Washing Up Liquids', 'Degreasers', 'Other Cleaning Items'] },
  { id: '12', name: 'General Items', slug: 'general-items', description: 'Kitchen essentials and miscellaneous items.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', icon: '🍴' }
];

export const PRODUCTS: Product[] = [
  // Drinks (Category 1)
  ...DRINK_CAN_PRODUCTS,
  
  // Frozen Foods (Category 3)
  ...FROZEN_PRODUCTS,
  
  // Canned Products (Category 6)
  ...CANNED_PRODUCTS,
  
  // Sauces (Category 10)
  ...SAUCE_BOTTLE_PRODUCTS,
];

export const INDUSTRIES = [
  { name: 'Supermarkets', icon: '🛒', desc: 'Full-shelf inventory management' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Premium ingredients for chefs' },
  { name: 'Hotels', icon: '🏨', desc: 'Consistent hospitality supply' },
  { name: 'Cafés', icon: '☕', desc: 'Beverage and pastry essentials' },
  { name: 'Distributors', icon: '🚛', desc: 'Regional sub-wholesale customers' },
  { name: 'Bakeries', icon: '🥐', desc: 'Bulk grains and specialty flours' },
];