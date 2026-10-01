import Link from "next/link";

import Title, { type TitleVariant } from "@/components/ui/Title";

interface AuthFormFooterProps {
  titleVariant: TitleVariant;
  className: string;
  prompt: string;
  linkLabel: string;
  href: string;
}

export default function AuthFormFooter({
  titleVariant,
  className,
  prompt,
  linkLabel,
  href,
}: AuthFormFooterProps) {
  return (
    <Title as="p" variant={titleVariant} className={className}>
      {prompt}
      <Link href={href} className="text-brand-800 hover:underline">
        {linkLabel}
      </Link>
    </Title>
  );
}
