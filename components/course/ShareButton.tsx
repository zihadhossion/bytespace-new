"use client";

import { useEffect, useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { images } from "@/lib/images";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const showCopied = () => {
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      showCopied();
    } catch {
      setCopied(false);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: document.title, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    await copyLink(url);
  };

  return (
    <Button
      size="none"
      onClick={handleShare}
      className="h-10 shrink-0 gap-2 px-6 py-2 text-base"
    >
      <Icon src={images.icons.share} alt="Share" className="h-6 w-6" />
      {copied ? "Copied!" : "Share"}
    </Button>
  );
}
