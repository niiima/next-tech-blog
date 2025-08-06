import React, { useEffect, useState } from "react";

const FlipUnitDigit = ({ digit }) => {
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit !== previousDigit) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setFlipping(false);
        setPreviousDigit(digit);
      }, 600); // animation duration
      return () => clearTimeout(timeout);
    }
  }, [digit, previousDigit]);

  return (
    <div className='flip-digit relative w-12 h-16 perspective-1000'>
      {/* Static Upper Half */}
      <div className='upper absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-lg bg-pink-100 border border-pink-300 text-pink-700 text-4xl font-bold flex items-end justify-center'>
        {previousDigit}
      </div>
      {/* Static Lower Half */}
      <div className='lower absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-lg bg-pink-200 border border-pink-300 text-pink-900 text-4xl font-bold flex items-start justify-center'>
        {digit}
      </div>

      {/* Animated flipping card */}
      {flipping && (
        <>
          {/* Flip top animation */}
          <div className='flip-top absolute top-0 left-0 w-full h-1/2 bg-pink-100 border border-pink-300 text-pink-700 text-4xl font-bold flex items-end justify-center rounded-t-lg origin-bottom animate-flipTop'>
            {previousDigit}
          </div>
          {/* Flip bottom animation */}
          <div className='flip-bottom absolute bottom-0 left-0 w-full h-1/2 bg-pink-200 border border-pink-300 text-pink-900 text-4xl font-bold flex items-start justify-center rounded-b-lg origin-top animate-flipBottom'>
            {digit}
          </div>
        </>
      )}
    </div>
  );
};

export default FlipUnitDigit;
