// Mobile-specific optimizations and utilities
import { useEffect, useState } from 'react';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobileDevice = width <= 768;
      const isTabletDevice = width > 768 && width <= 1024;
      const isDesktopDevice = width > 1024;

      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      setIsDesktop(isDesktopDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export const useTouchDetection = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouch();
  }, []);

  return isTouch;
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

// Mobile-specific CSS classes
export const getMobileClasses = (isMobile, isTablet) => {
  const classes = [];
  
  if (isMobile) {
    classes.push('mobile-only');
  } else {
    classes.push('desktop-only');
  }
  
  if (isTablet) {
    classes.push('tablet-only');
  }
  
  return classes.join(' ');
};

// Touch-friendly event handlers
export const createTouchHandlers = (onClick, onTouchStart) => {
  return {
    onClick: onClick,
    onTouchStart: onTouchStart || onClick,
    style: {
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'rgba(229, 9, 20, 0.2)',
    }
  };
};

// Mobile-optimized animations
export const getMobileAnimationProps = (isMobile, baseProps = {}) => {
  if (isMobile) {
    return {
      ...baseProps,
      transition: { duration: 0.3 },
      whileHover: undefined, // Disable hover on mobile
      whileTap: { scale: 0.98 }
    };
  }
  
  return baseProps;
};
