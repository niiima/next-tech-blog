// src/components/pages/AboutPage.tsx
"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { teamMembers } from "../../data/blog-data";
import { Users, Target, Zap, Heart, Award, TrendingUp, Code2, Rocket, Shield, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Zap,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
    {
      icon: Code2,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: Rocket,
      title: t("about.values.performance.title"),
      description: t("about.values.performance.description"),
    },
    {
      icon: Shield,
      title: t("about.values.security.title"),
      description: t("about.values.security.description"),
    },
    {
      icon: Palette,
      title: t("about.values.design.title"),
      description: t("about.values.design.description"),
    },
    {
      icon: Users,
      title: t("about.values.client.title"),
      description: t("about.values.client.description"),
    },
  ];

  const milestones = [
    { year: "2020", title: t("about.milestones.founded.title"), description: t("about.milestones.founded.description") },
    { year: "2021", title: t("about.milestones.growth.title"), description: t("about.milestones.growth.description") },
    { year: "2022", title: t("about.milestones.launch.title"), description: t("about.milestones.launch.description") },
    { year: "2023", title: t("about.milestones.funding.title"), description: t("about.milestones.funding.description") },
    { year: "2025", title: t("about.milestones.present.title"), description: t("about.milestones.present.description") },
  ];

  const stats = [
    { value: "100+", label: t("about.stats.projects") },
    { value: "50+", label: t("about.stats.clients") },
    { value: "500+", label: t("about.stats.articles") },
    { value: "99.9%", label: t("about.stats.uptime") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent">
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

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">{t("about.badge")}</span>
            </div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("about.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t("about.description")}
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t("about.valuesSection.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("about.valuesSection.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full text-center hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardContent className="pt-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
                  >
                    <value.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t("about.team.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("about.team.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardContent className="pt-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-6"
                  >
                    <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{t("about.journey.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("about.journey.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg hover:shadow-primary/10 transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0"
                    >
                      {index === 4 ? <Target className="h-7 w-7" /> : <Award className="h-7 w-7" />}
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent p-12 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="mb-4 text-4xl font-bold">{t("about.cta.title")}</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              {t("about.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <a href="#contact">{t("about.cta.contact")}</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" asChild>
                  <a href="/blog">{t("about.cta.blog")}</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}