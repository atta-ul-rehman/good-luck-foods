import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import SEO from './components/SEO';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Products from './pages/Products';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';
import CategoryDetail from './pages/CategoryDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import WholesaleAgreement from './pages/WholesaleAgreement';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';

const NotFound: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
    <SEO
      title="Page Not Found"
      description="The page you are looking for could not be found. Browse our wholesale food products or return to the homepage."
      path="/404"
      noindex={true}
    />
    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-red mb-4">404 – Not Found</p>
    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
      Page Not Found
    </h1>
    <p className="text-slate-500 max-w-md mb-10">
      The page you're looking for doesn't exist or has been moved. Try browsing our wholesale product range instead.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        to="/"
        className="bg-brand-red text-white px-8 py-3 rounded-lg font-black text-sm tracking-widest uppercase hover:brightness-110 transition-all"
      >
        Go Home
      </Link>
      <Link
        to="/products"
        className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-black text-sm tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all"
      >
        Browse Products
      </Link>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppLayout = () => {
  const { pathname } = useLocation();
  const isComingSoonRoute = pathname === '/coming-soon';

  return (
    <div className="flex flex-col min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <ScrollToTop />
      {!isComingSoonRoute && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/wholesale-agreement" element={<WholesaleAgreement />} />
          <Route path="/category/:slug" element={<CategoryDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isComingSoonRoute && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <HelmetProvider>
      <AuthProvider>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;