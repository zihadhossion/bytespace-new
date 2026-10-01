"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import AppImage from "@/components/ui/AppImage";
import MobileNav from "@/components/layout/MobileNav";
import { authLinks, navLinks } from "@/data/nav";
import { images } from "@/lib/images";

function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface HeaderProps {
  tone?: "dark" | "light";
  variant?: "full" | "logo";
}

export default function Header({
  tone = "light",
  variant = "full",
}: HeaderProps) {
  const isDark = tone === "dark";
  const isLogoOnly = variant === "logo";
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative w-full transition-all duration-200 ${
        isDark
          ? scrolled
            ? "text-steel-950 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            : "text-steel-50"
          : "bg-white text-steel-950"
      }`}
    >
      {isDark ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 bg-white/85 backdrop-blur-md transition-opacity duration-200 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}
      <div className="relative mx-auto flex h-[72px] w-full max-w-page items-center justify-between px-5 sm:px-6 md:h-[120px] md:px-0">
        {isLogoOnly ? (
          <Link
            href="/"
            aria-label="ByteSpace home"
            className="ml-0.5 shrink-0 md:-translate-y-[9px]"
          >
            <AppImage
              src={images.icons.logoMark}
              alt="ByteSpace"
              width={29}
              height={32}
              preload
              className="h-[23px] w-auto md:h-8"
            />
          </Link>
        ) : (
          <>
            <Link
              href="/"
              aria-label="ByteSpace home"
              className="shrink-0 md:ml-0.5 md:-translate-y-[6.5px]"
            >
              <AppImage
                src={
                  isDark && !scrolled ? images.logo.header : images.logo.footer
                }
                alt="ByteSpace"
                width={171}
                height={37}
                preload
                className="h-[26px] w-auto md:h-[37px]"
              />
            </Link>

            <nav
              className="hidden items-center gap-6 md:absolute md:top-1/2 md:left-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2"
              aria-label="Primary"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-base leading-6 transition-opacity hover:opacity-70 ${
                      isActive
                        ? "font-medium underline decoration-2 underline-offset-[6px]"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 md:items-start md:gap-6">
              <Link
                href={authLinks.signIn.href}
                className="hidden text-base leading-6 transition-opacity hover:opacity-70 md:block"
              >
                {authLinks.signIn.label}
              </Link>
              <Link
                href={authLinks.join.href}
                className="hidden text-base leading-6 transition-opacity hover:opacity-70 md:block"
              >
                {authLinks.join.label}
              </Link>
              <CartIcon />
              <MobileNav tone={isDark && scrolled ? "light" : tone} />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
