"use client";
import Countdown from "@/components/CountDown";
import { GoLocation } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendarHeartFill } from "react-icons/bs";
// import InvitationText from "@/components/InvitationText";
import Footer from "./Footer";
import { useSpring, useTrail, animated } from "@react-spring/web";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function MyAppMain() {
  const ref = useTypewriter({
    typingSpeed: 150,
    onInit: (tw) => {
      tw.typeString(
        "با کمال احترام دعوت می‌شوید تا در آیین پیوند ما شرکت فرمایید"
      ).pauseFor(1500);
    },
  });

  // Trail animation for poem lines
  const poemTrail = useTrail(2, {
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 20 },
    delay: 200,
  });

  // Bounce scale for heart & names
  const heartSpring = useSpring({
    from: { scale: 0.1, opacity: 0 },
    to: { scale: 0.6, opacity: 0.8 },
    config: { tension: 80, friction: 12 },
    delay: 500,
  });

  // Slide up for countdown
  const countdownSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 800,
  });

  // Dates (fade left & right)
  const dateSpringShamsi = useSpring({
    from: { opacity: 0, transform: "translateX(-40px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    delay: 1100,
  });
  const dateSpringMiladi = useSpring({
    from: { opacity: 0, transform: "translateX(40px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    delay: 1300,
  });

  // Invitation text (soft zoom)
  const invitationSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 1600,
  });

  return (
    <div
      className='pt-16 relative'
      style={{
        backgroundImage: "url(bg.jpg)",
        backgroundPosition: "0px 0px",
        backgroundSize: "cover",
      }}>
      {/* Decorations */}
      <img
        src='/right-banner.png'
        alt='image-top-right'
        className='top-right-decoration'
      />
      <img
        src='/left-banner.png'
        alt='image-top-left'
        className='top-left-decoration'
      />

      <div className='wrap'>
        <div className='title flex flex-col items-center'>
          {/* Poem */}
          <div className='poem text-center mb-4'>
            {/* <p className='text-shekasteh text-2xl'>
              ز عشق آغاز کن، تا نقش گردون را بگردانی
            </p>
            <p className='text-shekasteh text-2xl'>
              که تنها عشق سازد نقش گردون را دگرگونش
            </p> */}
            {poemTrail.map((style, i) => (
              <animated.p
                key={i}
                style={style}
                className='text-shekasteh text-2xl'>
                {i === 0
                  ? "ز عشق آغاز کن، تا نقش گردون را بگردانی"
                  : "که تنها عشق سازد نقش گردون را دگرگونش"}
              </animated.p>
            ))}
          </div>

          {/* Names + Heart */}
          <div
            className='flex items-center justify-center gap-4 w-full'
            style={{ direction: "rtl" }}>
            <h1 className='text-right m-0'>الهام</h1>
            <animated.div
              style={heartSpring}
              className='flex items-center justify-center gap-4 w-full'>
              <img
                src='/fprint.png'
                className='heart-logo mx-auto max-w-[5rem] md:max-w-[12rem]'
                alt='heart logo'
              />
            </animated.div>
            <h1 className='text-left m-0'>نیما</h1>
          </div>

          {/* Countdown */}
          {/* <div className='mt-6 countdown-container'> */}
          <animated.div
            style={countdownSpring}
            className='mt-6 countdown-container'>
            <Countdown />
          </animated.div>
          {/* </div> */}

          {/* Dates */}
          <div className='mt-6 flex flex-col items-center gap-3'>
            {/* Shamsi */}
            {/* <div */}
            <animated.div
              style={dateSpringShamsi}
              dir='rtl'
              className='flex items-center gap-2 bg-pink-50 rounded-xl shadow-md px-4 py-2'>
              <BsCalendarHeartFill className='text-pink-500 text-2xl' />
              <span className='font-bold text-shekasteh text-2xl'>جمعه</span>
              <span className='text-2xl font-bold text-gray-800'>
                ۷ شهریور ۱۴۰۴
              </span>
              <span className='bg-pink-200 text-pink-900 text-lg font-bold px-3 py-1 rounded-lg shadow-sm'>
                ساعت ۲۰
              </span>
            </animated.div>
            {/* </div> */}

            {/* Miladi */}
            {/* <div  */}
            <animated.div
              style={dateSpringMiladi}
              className='flex items-center gap-2 bg-purple-50 rounded-xl shadow-md px-4 py-2'>
              <FaCalendarAlt className='text-purple-500 text-2xl' />
              <span className='text-xl font-bold text-gray-800 font-sacramento'>
                29 August 2025
              </span>
              <span className='bg-pink-200 text-pink-900 text-lg font-bold px-3 py-1 rounded-lg shadow-sm'>
                8PM
              </span>
            </animated.div>
            {/* </div> */}
          </div>

          {/* Invitation text from Context */}
          {/* <h4 className='mt-6 text-lg text-center text-gray-700 max-w-xl leading-relaxed'> */}
          <animated.div
            style={invitationSpring}
            ref={ref}
            dir={"rtl"}
            className='mt-6 text-lg text-center max-w-xl leading-relaxed 
             bg-white/40 dark:bg-black/40 
             backdrop-blur-sm px-6 py-4 
             rounded-2xl shadow-md text-gray-800 dark:text-gray-100'>
            {/* <InvitationText /> */}
          </animated.div>
          {/* </h4> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
