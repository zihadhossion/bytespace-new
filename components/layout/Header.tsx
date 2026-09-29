import Image from "next/image";
import Link from "next/link";

import { authLinks, navLinks } from "@/data/nav";

function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="hidden shrink-0 sm:block"
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
}

export default function Header({ tone = "light" }: HeaderProps) {
  const isDark = tone === "dark";

  return (
    <header
      className={`w-full ${isDark ? "bg-brand-800 text-steel-50" : "bg-white text-steel-950"}`}
    >
      <div className="mx-auto flex h-[120px] w-full max-w-page items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="shrink-0 -translate-y-[6.5px]"
        >
          <Image
            src="/images/logo/header_logo.webp"
            alt="ByteSpace"
            width={171}
            height={37}
            priority
          />
        </Link>

        <nav className="hidden items-start gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base transition-opacity hover:opacity-70 ${
                index === 0 ? "font-medium leading-[1.2]" : "leading-[1.6]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-start gap-6">
          <Link
            href={authLinks.signIn.href}
            className="text-base leading-6 transition-opacity hover:opacity-70"
          >
            {authLinks.signIn.label}
          </Link>
          <Link
            href={authLinks.join.href}
            className="text-base leading-6 transition-opacity hover:opacity-70"
          >
            {authLinks.join.label}
          </Link>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
