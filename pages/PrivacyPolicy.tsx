import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-[40vh] bg-white animate-in fade-in duration-500">
      <SEO
        title="Privacy Policy"
        description="Read the Good Luck Foods Ltd. privacy policy covering data handling, inquiries and business account information."
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