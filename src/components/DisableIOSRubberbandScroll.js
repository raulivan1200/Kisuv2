"use client"
import React, { useEffect } from 'react';

const DisableIOSRubberbandScroll = ({ children }) => { // Change the parameter to receive the props, including children
  useEffect(() => {
    const preventRubberbandScroll = (event) => {
      const { scrollTop, scrollHeight, clientHeight } = event.target;

      // Check if the content is scrollable beyond its boundaries
      const scrollable = scrollHeight > clientHeight;

      if (scrollable) {
        // Prevent rubber band scrolling only when the content is scrollable
        event.preventDefault();
      }
    };

    const resizeHandler = () => {
      document.body.style.width = `${window.innerWidth}px`;
      document.body.style.height = `${window.innerHeight}px`;
    };

    document.body.addEventListener('touchmove', preventRubberbandScroll, {
      passive: false,
      useCapture: false,
    });

    window.addEventListener('resize', resizeHandler);

    // Cleanup event listeners on unmount
    return () => {
      document.body.removeEventListener('touchmove', preventRubberbandScroll);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []); // Add an empty dependency array to run this effect only once

  return (
    // Wrap the children with the necessary logic
    <>
      {children}
    </>
  );
};

export default DisableIOSRubberbandScroll;
