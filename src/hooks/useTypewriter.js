"use client";

import { useEffect, useRef } from "react";
import Typewriter from "@/lib/Typewriter";

export function useTypewriter({
  loop = false,
  typingSpeed = 50,
  deletingSpeed = 50,
  onInit,
} = {}) {
  const ref = useRef(null);
  const started = useRef(false); // 🔥 prevent double start

  useEffect(() => {
    if (!ref.current || started.current) return;
    started.current = true; // mark as started

    const tw = new Typewriter(ref.current, {
      loop,
      typingSpeed,
      deletingSpeed,
    });
    if (onInit) onInit(tw);
    tw.start();
  }, [loop, typingSpeed, deletingSpeed, onInit]);

  return ref;
}
