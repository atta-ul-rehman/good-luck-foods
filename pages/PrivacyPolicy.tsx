import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-[40vh] bg-white animate-in fade-in duration-500">
      <SEO
        title="Privacy Policy"
        description="Privacy policy page for Good Luck Foods Ltd."
        path="/privacy-policy"
      />

      <section className="py-24">
        <div className="site-shell px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Privacy Policy</h1>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;