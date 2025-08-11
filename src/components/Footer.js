"use client";

import { GoLocation } from "react-icons/go";

export default function Footer() {
  return (
    <footer className='w-full bg-green-900 text-white mt-10 py-6'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-3'>
        <GoLocation size={28} className='text-pink-300' />
        <p className='text-lg leading-relaxed' dir='rtl'>
          آدرس: کیلومتر پنج جاده چالوس به نمک آبرود، قبل از پل هچیرود، جنب
          درمانگاه سلامت، تالار دیلان
        </p>
        <a href='https://www.google.com/maps/place/%D8%AA%D8%A7%D9%84%D8%A7%D8%B1+%D8%AF%DB%8C%D9%84%D8%A7%D9%86%E2%80%AD/@36.6881439,51.3474985,17.37z/data=!4m6!3m5!1s0x3f8ea978b50921bf:0x240d1189cc45b41a!8m2!3d36.6887573!4d51.349121!16s%2Fg%2F11snpxr1q4?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D'>
          لینک گوگلی مپ
        </a>
        <span className='text-sm opacity-70'>
          © {new Date().getFullYear()} الهام و نیما — تمامی حقوق محفوظ است
        </span>
      </div>
    </footer>
  );
}
