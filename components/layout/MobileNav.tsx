"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Button from "@/components/ui/Button";
import { authLinks, navLinks } from "@/data/nav";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface MobileNavProps {
  tone?: "dark" | "light";
}

export default function MobileNav({ tone = "light" }: MobileNavProps) {
  const isDark = tone === "dark";
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const openerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const opener = openerRef.current;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables =
        panelRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ) ?? [];
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  const border = isDark ? "border-white/15" : "border-steel-200";
  const hover = isDark ? "hover:bg-white/10" : "hover:bg-steel-100";
  const outlineHoverBorder = isDark ? "hover:border-white/15" : "hover:border-steel-200";

  return (
    <div className="md:hidden">
      <Button
        ref={openerRef}
        variant="ghost"
        size="none"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={`-mr-2 h-11 w-11 text-current hover:text-current ${hover}`}
      >
        <MenuIcon />
      </Button>

      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-40 bg-steel-950/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-[360px] flex-col transition-transform duration-300 ease-out ${
          isDark ? "bg-brand-800 text-steel-50" : "bg-white text-steel-950"
        } ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className={`flex items-center justify-between border-b px-5 py-3 ${border}`}
        >
          <span className="font-heading text-label-l font-medium">Menu</span>
          <Button
            ref={closeButtonRef}
            variant="ghost"
            size="none"
            onClick={close}
            aria-label="Close menu"
            className={`-mr-2 h-11 w-11 text-current hover:text-current ${hover}`}
          >
            <CloseIcon />
          </Button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-5 py-2"
          aria-label="Mobile primary"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className={`block border-b py-4 text-lg transition-opacity hover:opacity-70 ${border}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`flex flex-col gap-3 border-t px-5 py-6 ${border}`}
        >
          <Button
            href={authLinks.join.href}
            onClick={close}
            className="h-12 text-base"
          >
            {authLinks.join.label}
          </Button>
          <Button
            href={authLinks.signIn.href}
            variant="outline"
            onClick={close}
            className={`h-12 text-base ${border} ${hover} ${outlineHoverBorder}`}
          >
            {authLinks.signIn.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
