import { useState, useEffect } from 'react';

export function useDeviceType() {
  const [device, setDevice] = useState('');

  useEffect(() => {
    function handleDeviceDetection() {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|windows phone/g.test(
        userAgent
      );
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) setDevice('Mobile');
      else if (isTablet) setDevice('Tablet');
      else setDevice('Desktop');
    }

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => window.removeEventListener('resize', handleDeviceDetection);
  }, []);

  return device;
}
