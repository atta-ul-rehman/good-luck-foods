import { CATEGORIES, PRODUCTS } from '../constants';
import { Category, Product } from '../types';

interface WooCategory {
  id: number;
  name: string;
  slug: string;
  parent: number;
}

interface WooProductCategoryRef {
  id: number;
  name: string;
  slug: string;
}

interface WooProductImage {
  src: string;
}

interface WooProduct {
  id: number;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  categories: WooProductCategoryRef[];
  images?: WooProductImage[];
}

const DEFAULT_WC_API_BASE = 'https://darkgreen-louse-200218.hostingersite.com/wp-json/wc/v3';
const WOO_API_BASE = (import.meta.env.VITE_WC_API_BASE_URL || DEFAULT_WC_API_BASE).replace(/\/$/, '');
const WOO_CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY || '';
const WOO_CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET || '';
const WOO_PER_PAGE = Math.max(1, Number(import.meta.env.VITE_WC_PRODUCTS_PER_PAGE || 50));
const WOO_MAX_PAGES = Math.max(1, Number(import.meta.env.VITE_WC_MAX_PAGES || 5));
const WOO_TIMEOUT_MS = Math.max(1000, Number(import.meta.env.VITE_WC_FETCH_TIMEOUT_MS || 12000));
const WOO_CACHE_KEY = 'glf_wc_products_cache_v1';

const subcategoryPrefixMap: Record<string, Record<string, string>> = {
  drinks: {
    'Canned Drinks': 'drink-can-',
    'Bottled Drinks': 'drink-bottle-',
  },
  packaging: {
    'Paper Bags with Handles': 'packaging-',
    'Paper Bags without Handles': 'packaging-greaseproof-',
    'Chicken Boxes': 'packaging-',
    'Wrapping Sheets': 'packaging-wrapping-',
  },
  'frozen-foods': {
    'Frozen Chips': 'frozen-product-',
    'Frozen Buns': 'frozen-buns-',
    'Frozen Meat': 'frozen-meat-',
    'Frozen Chicken': 'frozen-meat-',
  },
  desserts: {
    Cakes: 'dessert-',
    'Ice Cream': 'dessert-',
    Confectionery: 'confectionery-',
  },
  'flour-grains': {
    'Pizza Flour': 'flour-',
    Rice: 'flour-',
    'Other Grains': 'flour-',
  },
  'canned-products': {
    Olives: 'canned-',
    'Pizza Sauces': 'canned-',
    'Other Canned Items': 'canned-',
  },
  'fresh-products': {
    Vegetables: 'vegetable-',
    'Fresh Chicken': 'fresh-',
  },
  'spices-herbs': {
    Breading: 'spice-general-',
    Spices: 'spice-general-',
    Herbs: 'spice-general-',
  },
  'oils-fats': {
    'Cooking Oil': 'oil-fat-',
    'Solid Fats': 'oil-fat-',
  },
  sauces: {
    Marinades: 'sauce-',
    Mayonnaise: 'sauce-mayo-',
    LION: 'sauce-lion-',
  },
  'cleaning-supplies': {
    Tissues: 'cleaning-tissue-',
    Detergents: 'cleaning-detergent-',
    Hygine: 'cleaning-hygine-',
  },
  'general-items': {
    'Dry Goods & Pantry': 'general-',
    'Kitchen Essentials': 'general-',
    'Till Rolls & Charcoal': 'general-',
  },
};

const stripHtml = (value: string): string => value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const normalize = (value: string): string => value.toLowerCase().replace(/[^a-z0-9]+/g, '');

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const saveCache = (products: Product[]) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(WOO_CACHE_KEY, JSON.stringify(products));
  } catch {
    // Ignore cache write failures.
  }
};

const readCache = (): Product[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(WOO_CACHE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Product[]) : [];
  } catch {
    return [];
  }
};

const withTimeout = async (url: string): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), WOO_TIMEOUT_MS);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    window.clearTimeout(timeoutId);
  }
};

const buildEndpoint = (resource: string, params: Record<string, string>): string => {
  const searchParams = new URLSearchParams({
    consumer_key: WOO_CONSUMER_KEY,
    consumer_secret: WOO_CONSUMER_SECRET,
    ...params,
  });

  return `${WOO_API_BASE}/${resource}?${searchParams.toString()}`;
};

const getCategoryLookup = (): Map<string, Category> => {
  const lookup = new Map<string, Category>();

  for (const category of CATEGORIES) {
    lookup.set(normalize(category.name), category);
    lookup.set(normalize(category.slug), category);
    lookup.set(normalize(category.slug.replace(/-/g, ' ')), category);
  }

  return lookup;
};

const getFallbackCategory = (): Category => CATEGORIES[0];

const findLocalCategory = (wooCategory: WooCategory | undefined, categoryLookup: Map<string, Category>): Category | undefined => {
  if (!wooCategory) {
    return undefined;
  }
  // Try both name and slug
  return (
    categoryLookup.get(normalize(wooCategory.slug)) ||
    categoryLookup.get(normalize(wooCategory.name)) ||
    categoryLookup.get(normalize(wooCategory.slug.replace(/-/g, ' ')))
  );
};

const findLocalSubcategory = (category: Category, candidate: { name: string; slug?: string }): string | undefined => {
  const subcategories = category.subcategories || [];
  const targetName = normalize(candidate.name);
  const targetSlug = candidate.slug ? normalize(candidate.slug) : undefined;
  return subcategories.find(
    (subcat) => normalize(subcat) === targetName || (targetSlug && normalize(subcat) === targetSlug)
  );
};

const getDefaultSubcategory = (category: Category): string | undefined => category.subcategories?.[0];

const resolvePrefix = (category: Category, subcategory?: string): string => {
  const bySlug = subcategoryPrefixMap[category.slug] || {};

  if (subcategory && bySlug[subcategory]) {
    return bySlug[subcategory];
  }

  const fallbackSubcategory = getDefaultSubcategory(category);
  if (fallbackSubcategory && bySlug[fallbackSubcategory]) {
    return bySlug[fallbackSubcategory];
  }

  return `${category.slug}-`;
};

const resolveImage = (product: WooProduct): string =>
  product.images?.[0]?.src || '/assets/external/cat-cleaning-general.jpg';

const resolveDescription = (product: WooProduct): string => {
  const cleaned = stripHtml(product.short_description || product.description || '');
  if (cleaned) {
    return cleaned;
  }

  return 'Wholesale supply item available for trade customers.';
};

const mapWooProductToProduct = (
  product: WooProduct,
  categoryById: Map<number, WooCategory>,
  categoryLookup: Map<string, Category>
): Product => {
  let localCategory: Category | undefined;
  let localSubcategory: string | undefined;
  let localCategorySlug: string | undefined;
  let localSubcategorySlug: string | undefined;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('[WooMap] Product:', product.name, 'Woo categories:', product.categories);
  }

  // Try to find both category and subcategory match (by slug and name)
  for (const categoryRef of product.categories || []) {
    const wooCategory = categoryById.get(categoryRef.id);
    if (!wooCategory) continue;

    const directLocal = findLocalCategory(wooCategory, categoryLookup);
    if (directLocal) {
      // Try to match subcategory by WooCommerce category name or slug
      const subcat = findLocalSubcategory(directLocal, { name: wooCategory.name, slug: wooCategory.slug });
      if (subcat) {
        localCategory = directLocal;
        localCategorySlug = directLocal.slug;
        localSubcategory = subcat;
        localSubcategorySlug = slugify(subcat);
        break;
      }
      // If this is a parent category, check if any child category matches a subcategory
      for (const childRef of product.categories) {
        const childCat = categoryById.get(childRef.id);
        if (childCat && childCat.parent === wooCategory.id) {
          const subcat2 = findLocalSubcategory(directLocal, { name: childCat.name, slug: childCat.slug });
          if (subcat2) {
            localCategory = directLocal;
            localCategorySlug = directLocal.slug;
            localSubcategory = subcat2;
            localSubcategorySlug = slugify(subcat2);
            break;
          }
        }
      }
      if (localCategory && localSubcategory) break;
    }
  }

  // Fallback to first present category
  if (!localCategory) {
    localCategory = getFallbackCategory();
    localCategorySlug = localCategory.slug;
  }

  // Fallback to first subcategory if not found
  if (!localSubcategory && localCategory) {
    for (const categoryRef of product.categories || []) {
      const matched = findLocalSubcategory(localCategory, { name: categoryRef.name, slug: categoryRef.slug });
      if (matched) {
        localSubcategory = matched;
        localSubcategorySlug = slugify(matched);
        break;
      }
    }
    if (!localSubcategory) {
      localSubcategory = getDefaultSubcategory(localCategory);
      localSubcategorySlug = localSubcategory ? slugify(localSubcategory) : undefined;
    }
  }

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('[WooMap] Result:', product.name, '→ category:', localCategory?.name, 'subcategory:', localSubcategory, 'categorySlug:', localCategorySlug, 'subcategorySlug:', localSubcategorySlug);
  }

  const idPrefix = resolvePrefix(localCategory, localSubcategory);

  return {
    id: `${idPrefix}wc-${product.id}`,
    categoryId: localCategory.id,
    name: product.name?.trim() || `Product ${product.id}`,
    description: resolveDescription(product),
    image: resolveImage(product),
    // Add these for filtering
    categorySlug: localCategorySlug,
    subcategorySlug: localSubcategorySlug,
  };
};

const fetchWooCategories = async (): Promise<WooCategory[]> => {
  const endpoint = buildEndpoint('products/categories', { per_page: '100', page: '1' });
  const response = await withTimeout(endpoint);

  if (!response.ok) {
    throw new Error(`WooCommerce categories request failed with status ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? (data as WooCategory[]) : [];
};

const fetchWooProducts = async (): Promise<WooProduct[]> => {
  const all: WooProduct[] = [];

  for (let page = 1; page <= WOO_MAX_PAGES; page += 1) {
    const endpoint = buildEndpoint('products', {
      per_page: String(WOO_PER_PAGE),
      page: String(page),
      status: 'publish',
      orderby: 'date',
      order: 'desc',
    });

    const response = await withTimeout(endpoint);

    if (!response.ok) {
      throw new Error(`WooCommerce products request failed with status ${response.status}`);
    }

    const pageItems = await response.json();

    if (!Array.isArray(pageItems) || pageItems.length === 0) {
      break;
    }

    all.push(...(pageItems as WooProduct[]));

    if (pageItems.length < WOO_PER_PAGE) {
      break;
    }
  }

  return all;
};

const dedupeProducts = (products: Product[]): Product[] => {
  const seen = new Set<string>();
  const result: Product[] = [];

  for (const product of products) {
    const key = normalize(product.name);
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(product);
  }

  return result;
};

export const fetchWooCommerceProducts = async (): Promise<Product[]> => {
  if (!WOO_CONSUMER_KEY || !WOO_CONSUMER_SECRET) {
    return [];
  }

  const [categories, products] = await Promise.all([fetchWooCategories(), fetchWooProducts()]);
  const categoryById = new Map<number, WooCategory>(categories.map((category) => [category.id, category]));
  const categoryLookup = getCategoryLookup();

  // TEMP: Log raw WooCommerce API product data for debugging
  if (typeof window !== 'undefined') {
    // Only log in browser
    // eslint-disable-next-line no-console
    console.log('[WooCommerce API] Raw products:', products);
  }

  return products.map((product) => mapWooProductToProduct(product, categoryById, categoryLookup));
};

export const getWooCommerceProductsWithFallback = async (): Promise<Product[]> => {
  try {
    const products = await fetchWooCommerceProducts();
    if (products.length > 0) {
      saveCache(products);
      return products;
    }
  } catch {
    // Fallback below keeps products page stable during API issues.
  }

  return readCache();
};

export const getMergedProducts = (wooProducts: Product[]): Product[] => {
  const incoming = wooProducts.map((product) => ({
    ...product,
    id: product.id || `${product.categoryId}-wc-${slugify(product.name)}`,
  }));

  // Always add WooCommerce products ahead of present products, never change present products
  return dedupeProducts([...incoming, ...PRODUCTS]);
};
