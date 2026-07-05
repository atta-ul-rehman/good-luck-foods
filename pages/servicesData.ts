export interface ServiceKeywordPage {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  supplyItems: string[];
  supportPoints: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const SERVICE_KEYWORD_PAGES: ServiceKeywordPage[] = [
  {
    slug: 'wholesale-food-suppliers-uk',
    title: 'Wholesale Food Suppliers UK',
    seoTitle: 'Wholesale Food Suppliers UK – Catering & Restaurant Food Supply',
    seoDescription:
      'Good Luck Foods Ltd. is a Manchester-based wholesale food supplier and catering food supplier for restaurants, takeaways and retailers. B2B wholesale food and grocery supply across the UK.',
    intro:
      'Built for business buyers who need consistent stock, practical pricing support and reliable category coverage from one wholesale food and catering supplier.',
    supplyItems: [
      'Bulk food and grocery category supply for hospitality and retail',
      'Catering food and drink supply for restaurants and takeaways',
      'Restaurant food supply across frozen, dry goods and packaging',
      'Manchester-based B2B wholesale food service covering UK trade customers',
    ],
    supportPoints: [
      'B2B-focused wholesale account support for food businesses',
      'Multi-category stock planning across food, drinks and catering essentials',
      'Clear contact channel for wholesale food supplier quote requests',
      'Structured route into product and category pages',
    ],
    faqs: [
      {
        q: 'Who do you supply as a wholesale food supplier in the UK?',
        a: 'We supply restaurants, takeaways, cafes, catering businesses and retailers that require business-grade wholesale food, grocery and catering supply across the UK.',
      },
      {
        q: 'Do you supply catering food and drink for hospitality businesses?',
        a: 'Yes. Good Luck Foods Ltd. is a catering food and drink supplier supporting restaurants, takeaways and food service businesses with bulk supply across multiple categories.',
      },
      {
        q: 'Can I source multiple food categories from one wholesale supplier?',
        a: 'Yes. Our catalogue is structured so buyers can source food, drinks, packaging and catering essentials from a single wholesale partner, reducing procurement complexity.',
      },
      {
        q: 'Where are you based and do you supply across the UK?',
        a: 'We are based in Manchester and supply wholesale food to businesses across the UK. Contact us to discuss supply coverage for your location.',
      },
    ],
  },
  {
    slug: 'wholesale-drinks-suppliers',
    title: 'Wholesale Drinks Suppliers',
    seoTitle: 'Wholesale Drinks Suppliers UK – Cans, Bottles & Energy Drinks',
    seoDescription:
      'Source drinks wholesale for restaurants, takeaways and retail. Good Luck Foods Ltd. supplies canned drinks, bottled drinks, Monster energy wholesale, Red Bull wholesale and soft drinks in bulk for UK businesses.',
    intro:
      'Designed for operators that need dependable beverage supply — from canned soft drinks and energy drinks to bottled beverages for fast-moving hospitality and retail environments.',
    supplyItems: [
      'Canned soft drinks and energy drinks in bulk (Coca-Cola, Pepsi, Monster, Red Bull)',
      'Bottled beverages and juice drinks in wholesale case formats',
      'Trade-ready drink formats for hospitality and takeaway workflows',
      'Bulk supply planning for recurring wholesale drink orders',
    ],
    supportPoints: [
      'Category specialists for drinks wholesale planning',
      'Support for mixed drink category demand profiles',
      'Fast route from discovery to wholesale quote request',
      'Integrated link to products and contact journey',
    ],
    faqs: [
      {
        q: 'What drink categories can I source wholesale?',
        a: 'You can source canned and bottled soft drinks, energy drinks (including Monster and Red Bull), juices and mixers through our wholesale drinks catalogue.',
      },
      {
        q: 'Do you supply Monster energy drinks wholesale?',
        a: 'Yes. Monster energy drinks are available as part of our wholesale canned drinks range for trade customers in the UK.',
      },
      {
        q: 'Can hospitality buyers request drink-focused quotes?',
        a: 'Yes. We support wholesale quote requests for drink categories based on your operational volume and product requirements.',
      },
      {
        q: 'Do you support recurring wholesale drink supply?',
        a: 'Yes. We support ongoing supply discussions for restaurants, takeaways and retailers with regular wholesale beverage demand.',
      },
    ],
  },
  {
    slug: 'wholesale-cleaning-supplies',
    title: 'Wholesale Cleaning Supplies',
    seoTitle: 'Wholesale Cleaning Supplies UK – Tissue, Hygiene & Detergents',
    seoDescription:
      'Get wholesale cleaning supplies for UK food businesses including tissue paper wholesale, detergents, bin bags and hygiene essentials. Good Luck Foods Ltd. supports restaurants, takeaways and catering operations.',
    intro:
      'Created for teams that need tissue paper wholesale and hygiene essentials aligned with day-to-day restaurant, takeaway and catering service operations.',
    supplyItems: [
      'Tissue paper wholesale for catering and food service environments',
      'Cleaning and hygiene essentials for trade buyers in bulk',
      'Detergents and bin bag supply lines for operational restocking',
      'Category-led wholesale quote support for cleaning items',
    ],
    supportPoints: [
      'B2B cleaning category support aligned to food businesses',
      'Covers tissue wholesale UK, detergents and hygiene-related lines',
      'Simple procurement path through product category filters',
      'Direct contact access for wholesale cleaning supply pricing',
    ],
    faqs: [
      {
        q: 'Do you supply tissue paper wholesale in the UK?',
        a: 'Yes. We supply tissue paper wholesale and other cleaning consumables for restaurants, takeaways and catering businesses across the UK.',
      },
      {
        q: 'Which wholesale cleaning supply categories are available?',
        a: 'We stock tissue paper, bin bags, detergents and hygiene-related cleaning lines in bulk formats suitable for food service businesses.',
      },
      {
        q: 'Is this suitable for restaurant and takeaway operations?',
        a: 'Yes. These wholesale cleaning supply lines are structured for food businesses with continuous day-to-day operational demand.',
      },
      {
        q: 'Can I request a category-specific cleaning supplies wholesale quote?',
        a: 'Yes. Use our contact form and specify your required cleaning categories and expected usage volume for a targeted response.',
      },
    ],
  },
  {
    slug: 'frozen-food-wholesalers-uk',
    title: 'Frozen Food Wholesalers UK',
    seoTitle: 'Frozen Food Wholesalers UK – Chips, Chicken, Burgers & Halal Frozen Food',
    seoDescription:
      'Good Luck Foods Ltd. is a frozen food wholesaler in the UK supplying frozen chips, halal frozen chicken, burger buns, frozen meats and more to restaurants and takeaways. Wholesale frozen food for UK food businesses.',
    intro:
      'Focused on restaurants and takeaways that rely on frozen categories including halal frozen chicken, chips and burger buns for menu consistency and service continuity.',
    supplyItems: [
      'Frozen chips wholesale – Aviko, Lamb Weston and own-brand lines',
      'Halal frozen chicken wholesale for restaurants and takeaways',
      'Frozen burger buns and bread wholesale for fast-food operations',
      'Frozen meat and burger wholesale in trade-ready formats',
    ],
    supportPoints: [
      'Category-first frozen product discovery for trade buyers',
      'Halal frozen food options across chicken and meat categories',
      'Suitable for high-turnover restaurant and takeaway operations',
      'Clear path from browsing to wholesale frozen food inquiry',
    ],
    faqs: [
      {
        q: 'Do you supply halal frozen food wholesale in the UK?',
        a: 'Yes. We supply halal frozen chicken and other halal frozen food categories for restaurants and takeaways across the UK.',
      },
      {
        q: 'Which frozen chip brands do you supply wholesale?',
        a: 'We stock Aviko and Lamb Weston frozen chips wholesale, including premium crunch and super crunch formats in bulk sizes.',
      },
      {
        q: 'Can I source frozen burger buns wholesale?',
        a: 'Yes. We supply burger buns and brioche buns wholesale for takeaway and fast-food businesses, including seeded and standard formats.',
      },
      {
        q: 'Is frozen food wholesale available for small restaurants and takeaways?',
        a: 'Yes. Our frozen food wholesale range is designed for trade customers including independent restaurants, takeaways and small catering businesses.',
      },
    ],
  },
  {
    slug: 'wholesale-spices-suppliers-uk',
    title: 'Wholesale Spices Suppliers UK',
    seoTitle: 'Wholesale Spices Suppliers UK – Herbs, Seasonings & Catering Spices',
    seoDescription:
      'Wholesale spices and herbs supply for UK catering and retail businesses. Good Luck Foods Ltd. stocks spice blends, seasonings, herbs and Indian spices wholesale for restaurants, takeaways and food businesses.',
    intro:
      'Built for operators that need consistent wholesale spice and herb supply for menu preparation, catering workflows and food retail.',
    supplyItems: [
      'Herbs and spices wholesale across seasoning, spice blend and ingredient lines',
      'Indian spices wholesale – including Heera, Natco and own-label ranges',
      'Bulk spice supply for catering, restaurant and retail use',
      'Direct route to contact for wholesale spice pricing discussions',
    ],
    supportPoints: [
      'Category mapping for spice procurement across multiple brands',
      'Business-ready supply for food operations and catering',
      'Aligned with broader food and grocery wholesale sourcing',
      'Simple transition from browsing to wholesale inquiry',
    ],
    faqs: [
      {
        q: 'Do you supply spices and herbs wholesale in the UK?',
        a: 'Yes. We supply herbs and spices wholesale for restaurants, takeaways, catering businesses and retailers across the UK.',
      },
      {
        q: 'Do you stock Indian spices wholesale?',
        a: 'Yes. We supply Indian spice brands including Heera and Natco wholesale, alongside general spice and seasoning lines for catering use.',
      },
      {
        q: 'Can I buy spices in bulk for catering?',
        a: 'Yes. Wholesale spices are available in bulk formats suitable for catering, restaurant and commercial kitchen demand.',
      },
      {
        q: 'Can I source spices alongside other wholesale categories?',
        a: 'Yes. Spice and herb lines are part of a broader wholesale catalogue that includes food, drinks, sauces and packaging.',
      },
    ],
  },
  {
    slug: 'wholesale-packaging-paper-bags',
    title: 'Wholesale Packaging and Paper Bags',
    seoTitle: 'Wholesale Paper Bags UK – Packaging for Takeaway & Food Service',
    seoDescription:
      'Wholesale paper bags and packaging supply for UK takeaway, catering and food service businesses. Good Luck Foods Ltd. supplies paper carrier bags wholesale, takeaway boxes, wrapping and food packaging in bulk.',
    intro:
      'Structured for businesses that need wholesale paper bags, food packaging and takeaway packaging continuity for front-of-house and delivery workflows.',
    supplyItems: [
      'Paper bags wholesale UK – carrier bags, flat bags and greaseproof bags',
      'Takeaway boxes and chicken box wholesale for food service',
      'Wrapping paper and food-grade packaging for restaurant use',
      'Bulk packaging quote support across recurring order requirements',
    ],
    supportPoints: [
      'Aligned to takeaway and retail packaging wholesale usage',
      'Category-based product discovery for paper bags and packaging',
      'Integrated route to wholesale quote support',
      'Part of multi-category B2B supply approach',
    ],
    faqs: [
      {
        q: 'Do you supply paper bags wholesale in the UK?',
        a: 'Yes. We supply paper carrier bags wholesale, flat paper bags and greaseproof bags for takeaway and food service businesses across the UK.',
      },
      {
        q: 'What packaging formats are available wholesale?',
        a: 'We supply takeaway boxes, chicken boxes, paper bags with and without handles, wrapping paper and other food-service packaging in bulk wholesale formats.',
      },
      {
        q: 'Can I source packaging with other food categories together?',
        a: 'Yes. Packaging is available within the same wholesale catalogue as food, drinks and cleaning supplies.',
      },
      {
        q: 'How can I request wholesale packaging pricing?',
        a: 'Use the contact page, specify your packaging requirements and expected order volume and our team will respond with pricing support.',
      },
    ],
  },
];
