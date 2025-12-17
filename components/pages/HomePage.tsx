// src/components/pages/HomePage.tsx
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { blogPosts as enPosts } from "@/data/blog-data";
import { blogPosts as faPosts } from "@/data/blog-data-fa"; import { useTranslation } from "react-i18next";

export function HomePage() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const blogPosts = i18n.language === "fa" ? faPosts : enPosts;
    const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);
    const recentPosts = blogPosts.slice(3, 9);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border">
                {/* Animated background blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
                />

                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 backdrop-blur-sm"
                        >
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm">{t("hero.latest_insights")}</span>
                        </motion.div>

                        {/* Headline */}
                        <div className="mb-6 overflow-hidden">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
                            >
                                {t("hero.headline1")}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                            >
                                {t("hero.headline2")}
                            </motion.h1>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                        >
                            {t("hero.description")}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" asChild className="group">
                                    <Link href="/blog">
                                        {t("common.explore_articles")}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/about">
                                        {t("common.about_us")}
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="mb-2 text-3xl font-bold">{t("featured.title")}</h2>
                    <p className="text-muted-foreground">{t("featured.subtitle")}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <BlogCard post={post} featured index={index} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Recent Posts */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-center justify-between"
                >
                    <div>
                        <h2 className="mb-2 text-3xl font-bold">{t("recent.title")}</h2>
                        <p className="text-muted-foreground">{t("recent.subtitle")}</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="ghost" asChild className="group">
                            <Link href="/blog">
                                {t("common.view_all")}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <BlogCard post={post} index={index} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <Newsletter />
            </section>
        </div>
    );
}