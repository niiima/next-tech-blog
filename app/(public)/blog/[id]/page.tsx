// src/app/(main)/blog/[id]/page.tsx
import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { notFound } from "next/navigation";
import { blogPosts as enPosts } from "@/data/blog-data";
import { blogPosts as faPosts } from "@/data/blog-data-fa";
import { headers } from "next/headers";

interface Params {
    id: string;
}

export default async function BlogPost({ params }: { params: Params }) {

    const { id } = await params;

    // Detect language from Accept-Language header (or fallback to 'en')
    const headersList = headers();
    const acceptLanguageRes = await headersList;
    const acceptLanguage = acceptLanguageRes.get("accept-language");
    const preferredLang = acceptLanguage?.split(",")[0].split("-")[0] || "en";
    const isFa = preferredLang === "fa";

    // Select correct blog data based on language
    const blogPosts = isFa ? faPosts : enPosts;

    // Find the post
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return <BlogPostPage post={post} />;
}

// Generate static params for both languages to enable SSG
export async function generateStaticParams() {
    const allIds = new Set<string>();

    // Add English post IDs
    enPosts.forEach((post) => allIds.add(post.id));
    // Add Persian post IDs (in case of future differences)
    faPosts.forEach((post) => allIds.add(post.id));

    return Array.from(allIds).map((id) => ({ id }));
}