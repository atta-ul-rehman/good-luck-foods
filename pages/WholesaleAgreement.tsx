import React from 'react';
import SEO from '../components/SEO';

const WholesaleAgreement: React.FC = () => {
  return (
    <div className="min-h-[40vh] bg-white animate-in fade-in duration-500">
      <SEO
        title="Wholesale Agreement"
        description="Wholesale agreement page for Good Luck Foods Ltd."
        path="/wholesale-agreement"
      />

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Wholesale Agreement</h1>
        </div>
      </section>
    </div>
  );
};

export default WholesaleAgreement;