// src/data/blog-data-fa.ts
// Persian (Farsi) version of blog data
// Technical terms like Next.js, React, Tailwind CSS, TypeScript, Framer Motion kept in English
// Tone: Professional, engaging, and informative – same as original

import type { BlogPost, TeamMember } from "@/types/blog"; // Adjust path if needed

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "ساخت برنامه‌های React پربازده با Next.js 15",
        excerpt: "جدیدترین ویژگی‌های Next.js 15 را کاوش کنید و یاد بگیرید چگونه از App Router، Server Components و streaming برای ساخت برنامه‌های وب فوق‌سریع استفاده کنید.",
        content: `
# ساخت برنامه‌های React پربازده با Next.js 15

Next.js 15 ویژگی‌های قدرتمند جدیدی معرفی کرده که ساخت برنامه‌های وب سریع و مدرن را آسان‌تر از همیشه می‌کند. در این راهنمای جامع، بهبودهای کلیدی و بهترین شیوه‌ها را بررسی می‌کنیم.

## قدرت Server Components

Server Components نحوه تفکر ما درباره برنامه‌های React را متحول کرده‌اند. با رندر کردن کامپوننت‌ها روی سرور، می‌توانیم:

- اندازه باندل‌های JavaScript را به طور چشمگیری کاهش دهیم
- داده‌ها را نزدیک‌تر به منبع دریافت کنیم
- زمان بارگذاری اولیه صفحه را بهبود ببخشیم
- SEO و اشتراک‌گذاری اجتماعی را تقویت کنیم

\`\`\`tsx
// app/page.tsx
async function HomePage() {
  const posts = await fetch('https://api.example.com/posts');
  const data = await posts.json();
  
  return (
    <div>
      {data.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

## Streaming و Suspense

Streaming اجازه می‌دهد تا UI را به تدریج و با در دسترس شدن داده‌ها رندر کنید و عملکرد ادراک‌شده را بهبود ببخشد.

## نتیجه‌گیری

Next.js 15 ابزارهای فوق‌العاده‌ای برای ساخت برنامه‌های سریع و مقیاس‌پذیر ارائه می‌دهد. امروز شروع به آزمایش کنید!
    `,
        author: {
            name: "سارا چن",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            role: "مهندس ارشد فرانت‌اند"
        },
        publishedAt: "2024-12-10",
        readTime: "۸ دقیقه مطالعه",
        tags: ["Next.js", "React", "Performance"],
        category: "توسعه وب",
        featured: true,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
        id: "2",
        title: "تسلط بر Tailwind CSS: الگوها و تکنیک‌های پیشرفته",
        excerpt: "عمیقاً به Tailwind CSS بپردازید با الگوهای پیشرفته، تنظیمات سفارشی و استراتژی‌های آماده تولید برای مقیاس‌پذیری سیستم طراحی.",
        content: `
# تسلط بر Tailwind CSS

Tailwind CSS نحوه رویکرد ما به استایلینگ را تغییر داده است. بیایید تکنیک‌های پیشرفته‌ای را کاوش کنیم که پروژه‌های شما را ارتقا می‌دهد.

## توکن‌های طراحی سفارشی

ساخت یک سیستم طراحی یکپارچه با Tailwind ساده است:

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#8b5cf6'
      }
    }
  }
}
\`\`\`

## ترکیب کامپوننت‌ها

کامپوننت‌های قابل استفاده مجدد با دستور @apply و CSS modules برای سازماندهی بهتر بسازید.
    `,
        author: {
            name: "مایکل رودریگز",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            role: "رهبر سیستم‌های طراحی"
        },
        publishedAt: "2024-12-08",
        readTime: "۶ دقیقه مطالعه",
        tags: ["Tailwind CSS", "CSS", "Design Systems"],
        category: "توسعه وب",
        featured: true,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    },
    {
        id: "3",
        title: "راهنمای کامل React Server Components",
        excerpt: "درک React Server Components از پایه، شامل زمان استفاده از آن‌ها و چگونگی ادغام با دانش موجود React شما.",
        content: "# راهنمای React Server Components\n\nServer Components نمایانگر تغییر پارادایم هستند...",
        author: {
            name: "امیلی تامپسون",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            role: "عضو تیم اصلی React"
        },
        publishedAt: "2024-12-05",
        readTime: "۱۰ دقیقه مطالعه",
        tags: ["React", "Server Components", "Architecture"],
        category: "توسعه وب",
        featured: true,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
    },
    {
        id: "4",
        title: "ساخت سیستم طراحی ما: داستان یک شرکت",
        excerpt: "چگونه سیستم طراحی مقیاس‌پذیر را از صفر ساختیم، چالش‌هایی که با آن مواجه شدیم و درس‌هایی که آموختیم.",
        content: "# ساخت سیستم طراحی ما\n\nهر محصول عالی نیاز به پایه محکمی دارد...",
        author: {
            name: "الکس کیم",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            role: "طراح محصول"
        },
        publishedAt: "2024-12-03",
        readTime: "۷ دقیقه مطالعه",
        tags: ["Design Systems", "Company Culture", "Process"],
        category: "داستان‌های شرکت",
        featured: false,
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop"
    },
    {
        id: "5",
        title: "بهترین شیوه‌های TypeScript برای برنامه‌های بزرگ‌مقیاس",
        excerpt: "الگوها و شیوه‌های ضروری TypeScript که برای حفظ کیفیت کد در کدبیس رو به رشد استفاده می‌کنیم.",
        content: "# بهترین شیوه‌های TypeScript\n\nایمنی نوع در مقیاس نیاز به انضباط دارد...",
        author: {
            name: "دیوید پارک",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
            role: "مهندس ارشد"
        },
        publishedAt: "2024-12-01",
        readTime: "۹ دقیقه مطالعه",
        tags: ["TypeScript", "Best Practices", "Architecture"],
        category: "توسعه وب",
        featured: false,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
    },
    {
        id: "6",
        title: "انیمیشن‌ها با Framer Motion: از پایه تا پیشرفته",
        excerpt: "انیمیشن‌های خیره‌کننده در React با Framer Motion بسازید. اصول پایه و تکنیک‌های پیشرفته برای تجربیات کاربری دلپذیر یاد بگیرید.",
        content: "# راهنمای Framer Motion\n\nانیمیشن‌ها رابط‌ها را زنده می‌کنند...",
        author: {
            name: "سارا چن",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            role: "مهندس ارشد فرانت‌اند"
        },
        publishedAt: "2024-11-28",
        readTime: "۱۲ دقیقه مطالعه",
        tags: ["Framer Motion", "Animations", "React"],
        category: "توسعه وب",
        featured: false,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop"
    },
    {
        id: "7",
        title: "چگونه تیم مهندسی خود را به بیش از ۵۰ مهندس مقیاس دادیم",
        excerpt: "درس‌های آموخته‌شده از رشد سریع: استخدام، onboard، حفظ فرهنگ و ساخت فرآیندهایی که مقیاس‌پذیر هستند.",
        content: "# مقیاس‌دهی تیم‌های مهندسی\n\nرشد از ۱۰ به ۵۰ مهندس...",
        author: {
            name: "جنیفر والش",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
            role: "معاون مهندسی"
        },
        publishedAt: "2024-11-25",
        readTime: "۱۱ دقیقه مطالعه",
        tags: ["Company Culture", "Engineering", "Leadership"],
        category: "داستان‌های شرکت",
        featured: false,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
    },
    {
        id: "8",
        title: "بهینه‌سازی Web Vitals برای تجربه کاربری بهتر",
        excerpt: "راهنمای عملی برای بهبود امتیازات Core Web Vitals و ارائه برنامه‌های وب سریع‌تر و پاسخگوتر.",
        content: "# بهینه‌سازی Web Vitals\n\nمعیارهای عملکرد مهم هستند...",
        author: {
            name: "مایکل رودریگز",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            role: "رهبر سیستم‌های طراحی"
        },
        publishedAt: "2024-11-20",
        readTime: "۸ دقیقه مطالعه",
        tags: ["Performance", "Web Vitals", "SEO"],
        category: "توسعه وب",
        featured: false,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    }
];

export const teamMembers: TeamMember[] = [
    {
        name: "سارا چن",
        role: "مهندس ارشد فرانت‌اند",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        bio: "علاقه‌مند به ایجاد تجربیات کاربری دلپذیر با React و فناوری‌های وب مدرن."
    },
    {
        name: "مایکل رودریگز",
        role: "رهبر سیستم‌های طراحی",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        bio: "ساخت سیستم‌های طراحی مقیاس‌پذیر و پل زدن بین طراحی و توسعه."
    },
    {
        name: "امیلی تامپسون",
        role: "عضو تیم اصلی React",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        bio: "مشارکت در هسته React و کمک به توسعه‌دهندگان برای ساخت برنامه‌های بهتر."
    },
    {
        name: "دیوید پارک",
        role: "مهندس ارشد",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        bio: "معماری سیستم‌های قوی و type-safe که با کسب‌وکار شما مقیاس‌پذیر هستند."
    },
    {
        name: "جنیفر والش",
        role: "معاون مهندسی",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
        bio: "رهبری تیم‌های مهندسی و پرورش فرهنگ نوآوری و تعالی."
    },
    {
        name: "الکس کیم",
        role: "طراح محصول",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        bio: "ساخت رابط‌های زیبا و شهودی که کاربران عاشق آن می‌شوند."
    }
];

export const categories = [
    "همه",
    "توسعه وب",
    "داستان‌های شرکت",
    "سیستم‌های طراحی",
    "عملکرد",
    "معماری"
];