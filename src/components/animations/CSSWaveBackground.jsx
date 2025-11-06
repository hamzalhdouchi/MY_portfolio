import { useEffect, useState } from 'react';
import './CSSWaveBackground.css';

export const CSSWaveBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`wave-background ${prefersReducedMotion ? 'reduced-motion' : ''}`}>
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
    </div>
  );
};
