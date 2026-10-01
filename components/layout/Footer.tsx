import Link from "next/link";

import AppImage from "@/components/ui/AppImage";
import Reveal from "@/components/ui/Reveal";
import Title from "@/components/ui/Title";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import { footerColumns, legalLinks } from "@/data/nav";
import { images } from "@/lib/images";
import { container } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-steel-200 bg-white">
      <Reveal className={`${container} pt-6 pb-6 md:pt-[71px] md:pb-[48px]`}>
        <div className="flex flex-col gap-6 sm:gap-16 xl:flex-row xl:gap-[92px]">
          <div className="flex flex-col gap-8 md:gap-[45px]">
            <div className="flex flex-col gap-4">
              <Link href="/" className="w-fit">
                <AppImage
                  src={images.logo.footer}
                  alt="ByteSpace"
                  width={171}
                  height={37}
                  className="h-[37px] w-[171px]"
                />
              </Link>
              <Title
                as="p"
                variant="raw"
                className="max-w-[528px] text-sm text-steel-950"
              >
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </Title>
            </div>

            <div className="flex flex-col gap-6">
              <NewsletterForm />
              <Title
                as="p"
                variant="raw"
                className="max-w-[504px] text-xs text-steel-950"
              >
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </Title>
            </div>
          </div>

          <nav className="flex items-end gap-x-4 gap-y-6 sm:gap-x-10 sm:gap-y-10">
            {footerColumns.map((column) => (
              <div
                key={column.title ?? column.links[0]?.href}
                className="flex w-[calc(50%_-_8px)] flex-col gap-6 sm:w-[167px]"
              >
                <ul className="flex flex-col gap-2.5 md:gap-4">
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

        <div className="mt-10 sm:mt-16 border-t border-steel-200 pt-4 sm:pt-[22px] md:mt-[130px]">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
            <Title as="p" variant="raw" className="text-xs text-steel-950">
              @ {new Date().getFullYear()} ByteSpace. All rights reserved.
            </Title>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-1 text-xs text-steel-950 transition-opacity hover:opacity-70 md:py-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
