"use client";

// import React, { useState, useEffect } from "react";
// import FlipUnitDigit from "./FlipUnitDigit";
// const Countdown = () => {
//   const targetDate = new Date("2025-08-29T00:00:00");

//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const diff = targetDate - now;

//     if (diff <= 0) return null;

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((diff / 1000 / 60) % 60);
//     const seconds = Math.floor((diff / 1000) % 60);

//     return { days, hours, minutes, seconds };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   if (!timeLeft) {
//     return (
//       <div className='text-center text-3xl font-semibold text-pink-600'>
//         The Wedding Day is Here! 🎉
//       </div>
//     );
//   }

//   // Helper to get digit array (2 digits min)
//   const formatDigits = (num) => num.toString().padStart(2, "0").split("");

//   const { days, hours, minutes, seconds } = timeLeft;

//   return (
//     <div className='flex justify-center space-x-6 font-mono text-pink-700'>
//       {/* Days */}
//       <div className='flex flex-col items-center'>
//         <div className='flex space-x-1'>
//           {formatDigits(days).map((digit, i) => (
//             <FlipUnitDigit key={i} digit={digit} />
//           ))}
//         </div>
//         <div className='mt-2 uppercase text-sm tracking-widest'>Days</div>
//       </div>

//       {/* Hours */}
//       <div className='flex flex-col items-center'>
//         <div className='flex space-x-1'>
//           {formatDigits(hours).map((digit, i) => (
//             <FlipUnitDigit key={i} digit={digit} />
//           ))}
//         </div>
//         <div className='mt-2 uppercase text-sm tracking-widest'>Hours</div>
//       </div>

//       {/* Minutes */}
//       <div className='flex flex-col items-center'>
//         <div className='flex space-x-1'>
//           {formatDigits(minutes).map((digit, i) => (
//             <FlipUnitDigit key={i} digit={digit} />
//           ))}
//         </div>
//         <div className='mt-2 uppercase text-sm tracking-widest'>Minutes</div>
//       </div>

//       {/* Seconds */}
//       <div className='flex flex-col items-center'>
//         <div className='flex space-x-1'>
//           {formatDigits(seconds).map((digit, i) => (
//             <FlipUnitDigit key={i} digit={digit} />
//           ))}
//         </div>
//         <div className='mt-2 uppercase text-sm tracking-widest'>Seconds</div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

import React, { useState, useEffect } from "react";

const Countdown = () => {
  // Target date: June 29, 2024 (set to midnight start of that day)
  const targetDate = new Date("2025-08-28T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // Countdown complete
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className='text-nastealigh text-center text-3xl font-semibold text-green-800'>
        قرارمون یادت نره
      </div>
    );
  }

  return (
    <div className='text-nastealigh pt-18 flex justify-center space-x-6 text-center md-w-32 font-mono text-gray-800'>
      <div className='p-4 bg-gray-100 rounded-lg shadow-lg w-20'>
        <div className='text-4xl font-bold text-purple-400'>
          {timeLeft.days}
        </div>
        <div className='uppercase text-sm'>روز</div>
      </div>
      <div className='p-4 bg-gray-100 rounded-lg shadow-lg w-20'>
        <div className='text-4xl font-bold text-purple-400'>
          {timeLeft.hours}
        </div>
        <div className='uppercase text-sm'>ساعت</div>
      </div>
      <div className='p-4 bg-gray-100 rounded-lg shadow-lg w-20'>
        <div className='text-4xl font-bold text-purple-400'>
          {timeLeft.minutes}
        </div>
        <div className='uppercase text-sm'>دقیقه</div>
      </div>
      <div className='p-4 bg-gray-100 rounded-lg shadow-lg w-20'>
        <div className='text-4xl font-bold text-purple-400'>
          {timeLeft.seconds}
        </div>
        <div className='uppercase text-sm'>ثانیه</div>
      </div>
    </div>
  );
};

export default Countdown;
