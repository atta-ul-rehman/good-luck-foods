# PROJECT OVERVIEW

- Website Name: Good Luck Foods Ltd.
- Business Name: Good Luck Foods Ltd.
- Industry: B2B wholesale food and grocery distribution
- Website Purpose: Present wholesale catalog, category pages, business profile, and inquiry/contact flows for wholesale buyers
- Primary Goals:
  - Showcase product catalog and categories
  - Capture wholesale inquiries and quote requests
  - Publish blog content (WordPress-backed with local fallback)
  - Support customer account authentication flows
- Target Audience:
  - Restaurants
  - Takeaways
  - Retailers
  - Hospitality buyers
  - Distributors
- Primary Countries/Locations:
  - United Kingdom (explicitly referenced throughout content)
  - Manchester, UK (business location)
  - Europe (stated in hero slider copy)
- Languages: English (site language set to en)

# WEBSITE STRUCTURE

| URL | Page Name | Page Type | Purpose | Current Status |
|---|---|---|---|---|
| https://www.goodluckfoods.co.uk/ | Home | Home | Main marketing/catalog entry page with hero, category showcase, featured products, and CTAs | Active |
| https://www.goodluckfoods.co.uk/home | Home Redirect | Redirect | Redirects to root route | Active redirect |
| https://www.goodluckfoods.co.uk/products | Products | Product Listing | Product browsing/filtering/searching and inquiry path | Active |
| https://www.goodluckfoods.co.uk/offers | Offers | Offers/Landing | Offers page currently communicating no active offers | Active (coming-soon style content) |
| https://www.goodluckfoods.co.uk/services | Services | Service Hub | Lists dedicated wholesale service landing pages by keyword/service intent | Active |
| https://www.goodluckfoods.co.uk/services/:serviceSlug | Service Detail | Service Landing | Dynamic wholesale service landing pages with supply scope, support points, FAQ, and CTAs | Active (dynamic) |
| https://www.goodluckfoods.co.uk/about | About | About | Company story, values, and business profile | Active |
| https://www.goodluckfoods.co.uk/contact | Contact | Contact | Contact details and wholesale inquiry form | Active |
| https://www.goodluckfoods.co.uk/blog | Blog | Blog Listing | Lists blog posts from WordPress API with fallback | Active |
| https://www.goodluckfoods.co.uk/blog/:slug | Blog Detail | Blog Article | Individual article rendering with dynamic slug | Active (dynamic) |
| https://www.goodluckfoods.co.uk/category/:slug | Category Detail | Category Landing | Category-specific overview, subcategories, FAQ content, and product links | Active (dynamic) |
| https://www.goodluckfoods.co.uk/login | Login | Auth | User login | Active |
| https://www.goodluckfoods.co.uk/signup | Signup | Auth | User registration | Active |
| https://www.goodluckfoods.co.uk/verify-email?token=... | Verify Email | Auth | Email verification flow using token query param | Active |
| https://www.goodluckfoods.co.uk/forgot-password | Forgot Password | Auth | Password reset request form | Active |
| https://www.goodluckfoods.co.uk/coming-soon | Coming Soon | Placeholder | Standalone coming-soon page | Active |
| https://www.goodluckfoods.co.uk/privacy-policy | Privacy Policy | Legal | Legal page shell | Placeholder (minimal content) |
| https://www.goodluckfoods.co.uk/terms-of-service | Terms of Service | Legal | Legal page shell | Placeholder (minimal content) |
| https://www.goodluckfoods.co.uk/wholesale-agreement | Wholesale Agreement | Legal | Legal page shell | Placeholder (minimal content) |
| * (all unmatched frontend routes) | Route Fallback | System Route | Navigates to /products | Active fallback |

# SERVICES

The following service offerings are explicitly or implicitly present in current on-site copy and UI flows.

| Name | Short Description | Related Pages |
|---|---|---|
| B2B Wholesale Food Distribution | Bulk supply of food and grocery products for business customers | /, /about, /products |
| Wholesale Pricing and Quote Requests | Buyers can request wholesale pricing/quotes via contact and product CTAs | /contact, /products, /category/:slug |
| Category-Based Product Supply | Supply across 12 product categories with subcategories | /products, /category/:slug |
| Logistics/Delivery Support | Content references reliable delivery/logistics operations | /, /about |
| Custom Sourcing Support | Contact content references specialty/rare item sourcing | /contact |
| Dedicated Service Landing Coverage | Centralized service hub and individual keyword-led service pages for wholesale discovery | /services, /services/:serviceSlug |

# PRODUCTS (if any)

Products are present.

- Product Model: Product catalog rendered from local constants merged with WooCommerce feed/fallback logic.
- Product Categories (12):
  - Drinks
  - Packaging
  - Frozen Foods
  - Desserts
  - Flour & Grains
  - Canned Products
  - Fresh Products
  - Spices & Herbs
  - Oils & Fats
  - Sauces
  - Cleaning Supplies
  - General Items
- Catalog Scale Indicators in current copy:
  - "800+" products (appears in metadata/index descriptions)
  - "5,000+ product lines" appears in About page copy

# CURRENT CONTENT

- Existing blogs:
  - Blog listing and detail pages are active.
  - Local fallback blog dataset currently contains 1 article:
    - how-to-choose-wholesale-food-supplier-uk
  - WordPress fetch is configured and can provide additional posts dynamically.
- Landing pages:
  - Home, Offers, Category detail pages function as landing pages.
- Service pages:
  - Dedicated service pages now exist via a services hub and dynamic detail route.
  - Service detail pages cover wholesale food suppliers, drinks, cleaning supplies, frozen foods, spices, and packaging intent clusters.
- Resources:
  - Blog content is the primary resource content type.
  - No separate downloadable resource center was found.
- FAQs:
  - FAQ section is implemented on category detail pages (content-driven by category data).

# WEBSITE DESIGN

- Navigation:
  - Sticky header with logo, search, login/account area, and slide-out menu.
  - Primary nav links: Home, Products, Offers, Services, Blog, About, Contact.
  - Sticky category sub-navigation with horizontal scrolling and subcategory dropdown links.
- Header:
  - Includes product search suggestions (categories/subcategories/products).
  - Includes mobile side drawer navigation and Request Quote CTA.
- Footer:
  - Brand block, business address, phone, email, opening hours.
  - Utility links: Blog, Services, Privacy Policy, Terms of Service, Wholesale Agreement.
- CTA locations:
  - Hero CTA on home slider area.
  - Product cards: Get Wholesale Price -> contact with selected product state.
  - About page CTA -> contact.
  - Category pages include product browsing and contact/request catalog CTA path.
  - Mobile drawer includes Request Quote CTA.
- Forms:
  - Contact inquiry form (full name, company, email, phone, category, message).
  - Login form.
  - Signup form.
  - Forgot password form.
  - Verify email flow uses token query and action buttons.
- Layout:
  - SPA layout with shared header/footer (except coming-soon route hides header/footer).
  - Page-based React components with Tailwind styling.
  - Dynamic blog and category detail rendering.

# BRAND INFORMATION

- Tone of Voice: Professional, wholesale-focused, reliability-oriented
- Brand Personality: Operational, business-focused, supply-chain oriented, service-first
- Writing Style: Direct B2B messaging with category and operations language
- Target Customer:
  - B2B buyers in foodservice, hospitality, and retail
  - Businesses needing bulk purchasing and recurring supply

# TECHNICAL INFORMATION

- CMS: Unknown for main site pages; WordPress REST API is configured as blog content source
- Framework:
  - Frontend: React 19 + TypeScript + Vite + Tailwind CSS
  - Backend: Node.js + Express + Mongoose (API routes under /api)
- Hosting:
  - Frontend includes Vercel rewrite config to index.html
  - Backend has separate Vercel config for server/api/index.cjs
  - Additional static redirect file exists in public/_redirects
- Analytics:
  - Google Analytics gtag present (Measurement ID: G-4V4Y7JR3TP)
  - Google Tag Manager script present (Container ID: GTM-TH7SX5MS)
- Search Console:
  - Google site verification meta tag is present
  - Search Console account/property status: Unknown
- Sitemap:
  - Present at https://www.goodluckfoods.co.uk/sitemap.xml
  - Contains core pages, one blog URL, and category URLs
- Robots.txt:
  - Present at https://www.goodluckfoods.co.uk/robots.txt
  - Allows all crawling and disallows /login, /signup, /forgot-password

# CURRENT SEO STATUS

No optimization included below. This section documents current implementation only.

## Existing Titles

| Route | Current Title Behavior |
|---|---|
| / | Wholesale Food Suppliers UK for B2B Restaurants & Retail \| Good Luck Foods Ltd. |
| /products | Wholesale Food Products UK – Drinks, Frozen, Packaging & More \| Good Luck Foods Ltd. |
| /offers | Coming Soon \| Good Luck Foods Ltd. \| Good Luck Foods Ltd. |
| /services | Wholesale Services UK – Food, Drinks, Frozen, Packaging \| Good Luck Foods Ltd. |
| /services/:serviceSlug | Dynamic service SEO title from service dataset (for example: Wholesale Food Suppliers UK for Restaurants and Retail \| Good Luck Foods Ltd.) |
| /about | About Good Luck Foods Ltd. – UK Wholesale Food Supplier \| Good Luck Foods Ltd. |
| /contact | Contact Wholesale Food Supplier UK – Request Pricing \| Good Luck Foods Ltd. |
| /blog | Blog - Wholesale Food Tips and Industry Insights \| Good Luck Foods Ltd. |
| /blog/:slug | {post.title} \| Good Luck Foods Ltd. |
| /category/:slug | Wholesale {category.name} Supplier UK – Bulk {category.name} \| Good Luck Foods Ltd. |
| /coming-soon | Coming Soon \| Good Luck Foods Ltd. |
| /privacy-policy | Privacy Policy \| Good Luck Foods Ltd. |
| /terms-of-service | Terms of Service \| Good Luck Foods Ltd. |
| /wholesale-agreement | Wholesale Agreement \| Good Luck Foods Ltd. |
| /login | Login \| Good Luck Foods Ltd. |
| /signup | Sign Up \| Good Luck Foods Ltd. |
| /verify-email | Verify Email \| Good Luck Foods Ltd. |
| /forgot-password | Forgot Password \| Good Luck Foods Ltd. |

Document-level default title in index.html:
- Good Luck Foods Ltd. | Wholesale B2B Food & Grocery Supplier Manchester

## Existing Meta Descriptions

| Route | Current Meta Description Behavior |
|---|---|
| / | Good Luck Foods Ltd. is a Manchester-based wholesale food supplier in the UK... |
| /products | Browse wholesale food products for UK restaurants, takeaways and retailers... |
| /offers | Our special offers page is being updated... |
| /services | Explore wholesale service pages from Good Luck Foods Ltd. for food supply, drinks, frozen categories, cleaning essentials, spices and packaging support in the UK. |
| /services/:serviceSlug | Dynamic route-specific service description from service dataset |
| /about | Learn about Good Luck Foods Ltd., a Manchester-based wholesale food supplier... |
| /contact | Contact Good Luck Foods Ltd. to request wholesale food pricing, bulk supply quotes and category-specific support... |
| /blog | Read practical wholesale food tips, distribution insights, and buying guides... |
| /blog/:slug | Uses post excerpt dynamically |
| /category/:slug | Uses category description template with UK wholesale supply support language |
| /coming-soon | Good Luck Foods is preparing a new website experience... |
| /privacy-policy | Read the Good Luck Foods Ltd. privacy policy covering data handling, inquiries and business account information. |
| /terms-of-service | Read the Good Luck Foods Ltd. terms of service for website use, account responsibilities and business terms. |
| /wholesale-agreement | Review the Good Luck Foods Ltd. wholesale agreement terms for business supply, ordering and account expectations. |
| /login | Sign in to your Good Luck Foods account to manage wholesale inquiries and access account features. |
| /signup | Create your Good Luck Foods account for wholesale ordering support and business account access. |
| /verify-email | Verify your Good Luck Foods account email address to activate login access. |
| /forgot-password | Reset your Good Luck Foods account password using your registered email address. |

Document-level default meta description in index.html is present.

## Existing H1s

| Route | Existing H1 |
|---|---|
| / | Delivering a Premium Wholesale Food Experience for Catering & Retail |
| /products | Wholesale Food Products for UK Businesses |
| /offers | Special Offers Coming Soon |
| /services | Wholesale Service Pages |
| /services/:serviceSlug | Dynamic service title from service dataset |
| /about | Feeding the Industry Since 2008 |
| /contact | Contact Us (submitted state: Request Logged) |
| /blog | Good Luck Foods Blog |
| /blog/:slug | Dynamic post title |
| /category/:slug | Dynamic category name (fallback state: Category not found) |
| /coming-soon | New Website Launching Soon |
| /login | Welcome Back! |
| /signup | Hello, Friend! |
| /verify-email | Email Verification |
| /forgot-password | Reset Password (submitted state: Password Recovery) |
| /privacy-policy | Privacy Policy (sr-only) |
| /terms-of-service | Terms of Service (sr-only) |
| /wholesale-agreement | Wholesale Agreement (sr-only) |

## Existing Schema

Schema is present via JSON-LD on selected routes:

- /:
  - Organization
  - FoodEstablishment
- /products:
  - CollectionPage
  - BreadcrumbList
- /services:
  - CollectionPage
  - BreadcrumbList
- /services/:serviceSlug:
  - WebPage
  - FAQPage
  - BreadcrumbList
- /contact:
  - ContactPage (with Organization and PostalAddress)
  - FAQPage
- /blog/:slug:
  - Article
  - BreadcrumbList
- /category/:slug:
  - BreadcrumbList
  - CollectionPage
  - FAQPage (when FAQ data exists)

No schema implementation found in route components for login, signup, verify-email, forgot-password, legal placeholder pages, and offers page.

## Existing Internal Links

Current internal linking patterns include:

- Global primary navigation links to core pages (home/products/offers/services/blog/about/contact).
- Category sub-navigation links to /category/:slug and subcategory-filtered /products query URLs.
- Product cards link to /contact with selected product passed in route state.
- Footer links to blog, services, and legal pages.
- Blog list links to blog detail pages.
- Services hub links to individual service detail pages.
- Category pages link back to products and into filtered product views.
- Auth flow links between login, signup, forgot-password, and verify-email action paths.

## Existing Image Alt Text

Current alt text patterns observed:

- Brand assets: "Good Luck Foods" on logo images.
- Product/category imagery: dynamic alt using product/category/title values (for example: product name, category name, post title).
- Section imagery: descriptive static labels (for example: Drinks, Bespoke Packaging, Our Warehouse, Coming soon updates for wholesale offers).

# CONTENT INVENTORY

| Page | Primary Topic | Word Count (approx.) | Content Type | Status |
|---|---|---:|---|---|
| / | Wholesale value proposition, category highlights, featured products | ~900-1300 | Landing/Home | Active |
| /products | Product browsing and filtering UI | ~120-220 | Product Listing | Active |
| /offers | Offers placeholder and coming-soon messaging | ~120-220 | Landing/Placeholder | Active |
| /services | Service hub intro and service card listing | ~220-420 | Service Hub | Active |
| /services/:serviceSlug | Service-focused intro, supply/support bullets, FAQ, and CTA | Dynamic template ~500-900 | Service Landing | Active |
| /about | Company story, values, stats, CTA | ~500-800 | About/Brand | Active |
| /contact | Contact details and inquiry form content | ~500-900 | Contact/Lead Form | Active |
| /blog | Blog listing intro + article cards (dynamic list) | ~120-260 + dynamic post excerpts | Blog Listing | Active |
| /blog/:slug | Individual article body (dynamic from WP/fallback) | Dynamic (fallback sample ~180-350) | Blog Article | Active |
| /category/:slug | Category overview, subcategory cards, FAQ | Dynamic; fallback template ~500-900 | Category Landing | Active |
| /coming-soon | Coming-soon headline and short intro | ~60-120 | Placeholder | Active |
| /login | Login copy and form labels | ~120-220 | Auth | Active |
| /signup | Signup copy and form labels/validation text | ~220-380 | Auth | Active |
| /verify-email | Verification status messaging | ~40-120 | Auth | Active |
| /forgot-password | Reset flow copy and form labels | ~160-320 | Auth | Active |
| /privacy-policy | Minimal page shell only | ~0-10 | Legal | Placeholder |
| /terms-of-service | Minimal page shell only | ~0-10 | Legal | Placeholder |
| /wholesale-agreement | Minimal page shell only | ~0-10 | Legal | Placeholder |

# KEYWORD-TO-PAGE MAPPING (SEMRUSH)

Source file used:
- C:\Users\admin\Desktop\Shoiab UK websites\Good truck foods\Keywrords\All keywords.xlsx

Extraction snapshot:
- Parsed keywords: 271
- Non-zero volume keywords: 193

| Target URL | Primary Keyword Cluster | Secondary Keywords | Dominant Intent | Implementation Alignment |
|---|---|---|---|---|
| / | wholesale food suppliers uk | wholesale food suppliers, food wholesale suppliers, wholesale supplier of food | Commercial | Homepage title/description emphasize UK wholesale supplier entity and B2B audience fit |
| /products | wholesale restaurant supplies | wholesale food products uk, wholesale restaurant food supplies, restaurant supplies wholesale | Commercial | Products title, H1 and schema align to broad catalog/comparison intent |
| /contact | wholesale food supplier uk pricing | catering food suppliers near me, catering food and drink supplier, wholesale supplier contact intent | Transactional | Contact metadata and FAQ schema target quote, pricing and supplier qualification queries |
| /category/drinks | wholesale drinks | drinks wholesale, drink wholesalers, wholesale drinks suppliers | Commercial | Category metadata aligns to beverage procurement and bulk supply phrasing |
| /category/packaging | paper bags wholesale | wholesale paper bags, paper carrier bags wholesale, wholesale paper bags uk | Commercial | Category page intent supports packaging/bulk paper bag demand patterns |
| /category/frozen-foods | frozen food wholesalers uk | wholesale halal frozen chicken breast, catering frozen food suppliers | Commercial | Category metadata + FAQ support frozen supply intent without layout change |
| /category/cleaning-supplies | wholesale cleaning supplies | cleaning supplies wholesale, wholesale cleaning supplies uk, tissue paper wholesale uk | Commercial | Category metadata aligns with high-volume cleaning/sanitation demand |
| /category/spices-herbs | wholesale spices uk | wholesale spices suppliers uk, spices wholesale uk, herbs and spices wholesale suppliers uk | Commercial | Category page supports ingredient sourcing and spice supplier intent |
| /category/oils-fats | wholesale cooking oil | cooking oil wholesale, cooking oil wholesale uk, wholesale cooking oil suppliers uk | Commercial | Category page aligns to bulk oil procurement terms |
| /blog | wholesale food tips and insights | buyer guides, supplier comparison, delivery reliability questions | Informational | Blog listing metadata positioned for top-of-funnel discovery and GEO/AEO support |
| /services/wholesale-food-suppliers-uk | wholesale food suppliers uk | wholesale food suppliers, food wholesale suppliers | Commercial | Dedicated service page created with focused title/meta/FAQ and B2B quote CTA |
| /services/wholesale-drinks-suppliers | wholesale drinks suppliers | drinks wholesale, drink wholesalers | Commercial | Service page captures drinks-focused procurement intent and contact path |
| /services/wholesale-cleaning-supplies | wholesale cleaning supplies | cleaning supplies wholesale, wholesale cleaning supplies uk | Commercial | Service page supports hygiene/cleaning procurement intent and business inquiry flow |
| /services/frozen-food-wholesalers-uk | frozen food wholesalers uk | wholesale halal frozen chicken breast, catering frozen food suppliers | Commercial | Service page aligns frozen supply intent with FAQ and conversion-focused CTA |
| /services/wholesale-spices-suppliers-uk | wholesale spices suppliers uk | spices wholesale uk, herbs and spices wholesale suppliers uk | Commercial | Service page targets spice sourcing intent with focused support messaging |
| /services/wholesale-packaging-paper-bags | paper bags wholesale | wholesale paper bags, wholesale paper bags uk | Commercial | Service page addresses packaging and paper bag demand with quote-oriented flow |

Planned AEO/GEO query framing used for mapping:
- MOQ and minimum order questions
- Delivery window and reliability verification
- Quality consistency and batch confidence
- Price volatility and quote cadence
- Cash-and-carry vs supplier comparison

# NOTES

- The application is a single-page React app with BrowserRouter and client-side route fallback to /products for unmatched paths.
- Header and footer are hidden on /coming-soon.
- Blog content source is hybrid: WordPress API first, then local cache/fallback data.
- Product dataset is assembled from local constants and WooCommerce merge/fallback utilities.
- Offers page currently states no active offers and links to /coming-soon.
- Legal pages (privacy policy, terms of service, wholesale agreement) are present as route shells with sr-only H1 and no substantive body copy.
- Root index.html includes default SEO tags, Google Analytics, Google Tag Manager, and Google site verification tag.
- In current route code, /coming-soon SEO canonical path is set to /coming-soon.
- Auth routes now include route-specific SEO metadata and use noindex,nofollow robots directives.