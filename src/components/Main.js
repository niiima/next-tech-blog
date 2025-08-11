// "use client";
import Countdown from "@/components/CountDown";
import { GoLocation } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendarHeartFill } from "react-icons/bs";
// import { useInvitation } from "@/context/InvitationContext";
import InvitationText from "@/components/InvitationText";
import Footer from "./Footer";
export default function MyAppMain() {
  // const { invitationText } = useInvitation();

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
        src='//i.imgur.com/dGOOfnA.png'
        alt='image-top-right'
        className='top-right-decoration'
      />
      <img
        src='//i.imgur.com/t6ffnbn.png'
        alt='image-top-left'
        className='top-left-decoration'
      />

      <div className='wrap'>
        <div className='title flex flex-col items-center'>
          {/* Poem */}
          <div className='poem text-center mb-4'>
            <p className='text-shekasteh text-2xl'>
              ز عشق آغاز کن، تا نقش گردون را بگردانی
            </p>
            <p className='text-shekasteh text-2xl'>
              که تنها عشق سازد نقش گردون را دگرگونش
            </p>
          </div>

          {/* Names + Heart */}
          <div
            className='flex items-center justify-center gap-4 w-full'
            style={{ direction: "rtl" }}>
            <h1 className='text-right m-0'>الهام</h1>
            <img
              src='/fprint.png'
              className='heart-logo mx-auto max-w-[10rem] md:max-w-[12rem]'
              alt='heart logo'
            />
            <h1 className='text-left m-0'>نیما</h1>
          </div>

          {/* Countdown */}
          <div className='mt-6 countdown-container'>
            <Countdown />
          </div>

          {/* Dates */}
          <div className='mt-6 flex flex-col items-center gap-3'>
            {/* Shamsi */}
            <div
              dir='rtl'
              className='flex items-center gap-2 bg-pink-50 rounded-xl shadow-md px-4 py-2'>
              <BsCalendarHeartFill className='text-pink-500 text-2xl' />
              <span className='font-bold text-shekasteh text-2xl'>جمعه</span>
              <span className='text-2xl font-bold text-gray-800'>
                ۷ شهریور ۱۴۰۴
              </span>
            </div>

            {/* Miladi */}
            <div className='flex items-center gap-2 bg-purple-50 rounded-xl shadow-md px-4 py-2'>
              <FaCalendarAlt className='text-purple-500 text-2xl' />
              <span className='text-xl font-bold text-gray-800 font-sacramento'>
                29 August 2025
              </span>
            </div>
          </div>

          {/* Invitation text from Context */}
          {/* <h4 className='mt-6 text-lg text-center text-gray-700 max-w-xl leading-relaxed'> */}
          <InvitationText />
          {/* </h4> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
