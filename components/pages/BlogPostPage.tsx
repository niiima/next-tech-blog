// src/components/pages/BlogPostPage.tsx
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageSquare,
} from "lucide-react";
import { CodeBlock } from "../CodeBlock";
import type { BlogPost } from "@/types/blog";
import { blogPosts as enPosts } from "@/data/blog-data";
import { blogPosts as faPosts } from "@/data/blog-data-fa";
import { useTranslation } from "react-i18next";

interface BlogPostPageProps {
  post: BlogPost;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const blogPosts = i18n.language === "fa" ? faPosts : enPosts;
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id && p.tags.some((tag: any) => post.tags.includes(tag))
    )
    .slice(0, 3);

  const tableOfContents = [
    { title: t("blogPost.toc.introduction"), id: "intro" },
    { title: t("blogPost.toc.features"), id: "features" },
    { title: t("blogPost.toc.practices"), id: "practices" },
    { title: t("blogPost.toc.conclusion"), id: "conclusion" },
  ];

  const codeExample = `// app/page.tsx
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
}`;

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-16 z-40 border-b border-border bg-background/80 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" asChild className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  {t("blogPost.back")}
                </Link>
              </Button>
            </motion.div>
            <div className="flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" aria-label={t("blogPost.bookmark")}>
                  <Bookmark className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" aria-label={t("blogPost.share")}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {post.tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Badge>{tag}</Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8"
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-12 hidden sm:block" />
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mb-12 overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto aspect-video object-cover"
              />
            </motion.div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 id="intro">{t("blogPost.toc.introduction")}</h2>
                <p className="text-muted-foreground">
                  {t("blogPost.content.introduction")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 id="features">{t("blogPost.toc.features")}</h2>
                <p className="text-muted-foreground">
                  {t("blogPost.content.features")}
                </p>
              </motion.div>

              <CodeBlock code={codeExample} language="tsx" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 id="practices">{t("blogPost.toc.practices")}</h2>
                <ul className="text-muted-foreground">
                  <li>{t("blogPost.content.practice1")}</li>
                  <li>{t("blogPost.content.practice2")}</li>
                  <li>{t("blogPost.content.practice3")}</li>
                  <li>{t("blogPost.content.practice4")}</li>
                  <li>{t("blogPost.content.practice5")}</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 id="conclusion">{t("blogPost.toc.conclusion")}</h2>
                <p className="text-muted-foreground">
                  {t("blogPost.content.conclusion")}
                </p>
              </motion.div>
            </div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground mb-4">
                {t("blogPost.share")}
              </p>
              <div className="flex gap-2">
                {["Twitter", "LinkedIn", "Facebook", "Copy Link"].map((platform) => (
                  <motion.div
                    key={platform}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm">
                      {platform}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Comments Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-border"
            >
              <h3 className="mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                {t("blogPost.comments")} (12)
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    {t("blogPost.commentsComing")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <h3>{t("blogPost.tableOfContents")}</h3>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      {tableOfContents.map((item, i) => (
                        <motion.a
                          key={item.id}
                          href={`#${item.id}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{ x: 4 }}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.title}
                        </motion.a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <h3>{t("blogPost.relatedPosts")}</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((relatedPost, i) => (
                      <motion.div
                        key={relatedPost.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        whileHover={{ x: 4 }}
                      // asChild
                      >
                        <Link href={`/blog/${relatedPost.id}`} className="block group">
                          <h4 className="text-sm mb-1 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </Link>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Newsletter Promo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
                  <CardContent className="pt-6">
                    <h4 className="mb-2">{t("blogPost.newsletter.title")}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("blogPost.newsletter.description")}
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/">{t("blogPost.newsletter.subscribe")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}