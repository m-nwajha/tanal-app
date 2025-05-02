import { useEffect, useState } from 'react';

const useScroll = () => {
  // Scroll State.
  const [heightScroll, setHeightScroll] = useState(0);

  // Use Effect.
  useEffect(() => {
    // Add Scroll Event Listener on Component Mounting
    document.addEventListener('scroll', () => {
      setHeightScroll(window.scrollY);
    });
  }, []);
  return { heightScroll };
};

export default useScroll;
