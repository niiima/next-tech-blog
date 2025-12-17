// src/components/Newsletter.tsx
"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Newsletter() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Placeholder for real backend integration (e.g., Mailchimp, ConvertKit, your API)
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });

    // Simulate success after 1 second
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000); // Reset after 4 seconds
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent p-8 md:p-12"
    >
      {/* Animated background blobs */}
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
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span className="text-sm">{t("newsletter.badge") || t("common.stay_updated")}</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t("newsletter.title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8 text-muted-foreground"
        >
          {t("newsletter.description")}
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder={t("common.enter_email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-background/50 backdrop-blur-sm"
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading" || status === "success"}
              className="w-full sm:w-auto"
            >
              {status === "success"
                ? t("common.subscribed")
                : status === "loading"
                  ? "Subscribing..."
                  : t("common.subscribe")}
            </Button>
          </motion.div>
        </motion.form>

        {/* Success Message */}
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-sm text-primary font-medium"
          >
            {t("common.thanks_subscribing")}
          </motion.p>
        )}

        {/* Error Message (optional - add if you handle real errors) */}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-destructive"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}