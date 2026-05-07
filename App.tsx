import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Products from './pages/Products';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';
import CategoryDetail from './pages/CategoryDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/category/:slug" element={<CategoryDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
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