import Countdown from "@/components/CountDown";
import { PiCloverThin } from "react-icons/pi";
import { GoLocation } from "react-icons/go";

export default function MyAppMain() {
  return (
    <div
      //   dir='rtl'
      className='pt-16'
      style={{ backgroundImage: "url(bg.jpg)", backgroundPosition: "0px 0px" }}
      // className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-200 p-8 font-sans'>
    >
      <div className='sakura-falling'></div>
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
        <div className='title'>
          <div
            className='flex justify-between items-center w-full'
            style={{ direction: "rtl", lineHeight: 1.5 }}>
            <h1 className='text-right m-0 pr-16'>الهام</h1>
            {/* <h2 className='text-center m-0 '>و</h2> */}
            <img src='/fprint.png' className='heart-logo' />
            <h1 className='text-left m-0 pl-5'>نیما</h1>
          </div>
          <h3>29/8/2025</h3>
          <Countdown />
          <h3>هفتم شهریور هزارو چهارصد و چهار</h3>
          {/* <div className='rings'></div> */}
          <h3>دراین شب عاشقانه</h3>
          <h4>
            {" "}
            با کمال احترام دعوت می‌شوید تا در مراسم پیوند مقدس ما شرکت نمایید
          </h4>
        </div>
      </div>
      {/* <header className="text-center mb-10">
<h1 className="text-5xl font-bold text-pink-700 mb-2">دعوتنامه جشن عروسی</h1>
<p className="text-xl text-pink-600">الهام و نیما با افتخار حضور شما را دعوت می‌کنند</p>
</header> */}

      <section
        dir='rtl'
        className='max-w-3xl  mx-auto mt-10  bg-green-900 p-8 rounded-lg 
      shadow-lg text-center text-white leading-relaxed'>
        {" "}
        <GoLocation
          className='mt-5'
          size={35}
          style={{ position: "absolute" }}
        />{" "}
        <p className='text-lg text-nastealigh' style={{ fontSize: 40 }}>
          <a
            style={{ textDecoration: "underline" }}
            href='https://www.google.com/maps/place/%D8%AA%D8%A7%D9%84%D8%A7%D8%B1+%D8%AF%DB%8C%D9%84%D8%A7%D9%86%E2%80%AD/@36.6881439,51.3474985,17.37z/data=!4m6!3m5!1s0x3f8ea978b50921bf:0x240d1189cc45b41a!8m2!3d36.6887573!4d51.349121!16s%2Fg%2F11snpxr1q4?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D'
            target='_blank'>
            مکان: چالوس. هچیرود. تالار دیلان
          </a>
        </p>
        {/* <PiCloverThin size={30} /> */}
      </section>

      <section className='max-w-3xl mx-auto mt-10 h-96 rounded-lg overflow-hidden shadow-lg'>
        {/* <div className='p-8 space-y-8' dir='rtl'>
          <h1 className='text-3xl font-bold text-center'>دعوت به جشن عروسی</h1>
        </div> */}

        {/* <Map
      initialViewState={{
        longitude: 51.389,
        latitude: 35.6892,
        zoom: 14,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxAccessToken={MAPBOX_TOKEN}>
      <Marker
        longitude={51.389}
        latitude={35.6892}
        anchor='bottom'
        color='pink'
      />
    </Map> */}
      </section>
    </div>
  );
}
