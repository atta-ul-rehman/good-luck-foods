import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Good Luck Foods Ltd.';
const SITE_URL = 'https://www.goodluckfoods.co.uk';
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo1.jpg`;

interface SEOProps {
  title: string;
  description: string;
  /** Canonical path, e.g. "/products" or "/category/drinks" */
  path?: string;
  /** Override the OG image URL */
  image?: string;
  /** Set to "article" for blog posts, default is "website" */
  type?: string;
  /** JSON-LD schema objects to inject into the page */
  schema?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
}) => {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  const schemaArray = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD structured data */}
      {schemaArray.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
