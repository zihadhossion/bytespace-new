import Link from "next/link";

import { footerColumns, legalLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-steel-200 bg-white px-6 pt-[71px] pb-[71px] lg:px-30">
      <div className="flex flex-col gap-16 xl:flex-row xl:items-end xl:justify-between xl:gap-[92px]">
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-fit">
              <img
                src="/images/logo/footer_logo.webp"
                alt="ByteSpace"
                width={171}
                height={37}
                className="h-[37px] w-[171px]"
              />
            </Link>
            <p className="max-w-[528px] text-sm text-steel-950">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <form className="flex items-center gap-6">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                className="h-[52px] w-[376px] max-w-full min-w-0 rounded-full border border-steel-200 bg-white px-6 text-base text-steel-950 placeholder:text-steel-950 focus:border-steel-950 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-3xl bg-volt-400 px-6 py-3 text-label-l font-medium text-steel-950 transition-colors hover:bg-volt-300"
              >
                Search
              </button>
            </form>
            <p className="max-w-[504px] text-xs text-steel-950">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-end gap-10">
          {footerColumns.map((column) => (
            <div
              key={column.title ?? column.links[0].href}
              className="flex w-[167px] flex-col gap-6"
            >
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-steel-950 transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-[130px] border-t border-steel-200 pt-[22px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-steel-950">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-steel-950 transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
