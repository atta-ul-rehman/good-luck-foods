import React from 'react';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-[40vh] bg-white animate-in fade-in duration-500">
      <SEO
        title="Terms of Service"
        description="Terms of service page for Good Luck Foods Ltd."
        path="/terms-of-service"
      />

      <section className="py-24">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Terms of Service</h1>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;