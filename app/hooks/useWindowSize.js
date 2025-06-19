import { useCallback, useEffect, useRef, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    setWindowSize(getSize());
    window.addEventListener('resize', () => setWindowSize(getSize()));
    return () => window.removeEventListener('resize', () => setWindowSize(getSize()));
  }, []);
  return windowSize;
}
