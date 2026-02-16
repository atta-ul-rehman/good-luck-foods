import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show logo animation for 2.5 seconds, then start slide up
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2500);

    // Complete the transition after slide animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3300); // 2500ms logo + 800ms slide

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-transform duration-700 ease-in-out ${
        isAnimating ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Animated Logo */}
        <div className={`splash-logo ${isAnimating ? 'splash-logo-exit' : ''}`}>
          <img
            src="/assets/logo-gif.gif"
            alt="Good Luck Foods"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </div>
        
        {/* Loading text with animated dots */}
      
      </div>
    </div>
  );
};

export default SplashScreen;
