import AppImage from "@/components/ui/AppImage";
import { partnerLogo } from "@/lib/images";

interface PartnerLogosProps {
  className?: string;
}

const logos = [1, 2, 3, 4, 5];

function LogoRow({ duplicate }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className={`flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 xl:gap-[72px] xl:pr-[72px] ${
        duplicate ? "marquee-dup" : ""
      }`}
    >
      {logos.map((logo) => (
        <AppImage
          key={logo}
          src={partnerLogo(logo)}
          alt="Logoipsum"
          width={160}
          height={41}
          className="h-[34px] w-auto md:h-[41px]"
        />
      ))}
    </div>
  );
}

export default function PartnerLogos({ className = "" }: PartnerLogosProps) {
  return (
    <section
      id="partners"
      className={`overflow-hidden bg-steel-50 ${className}`}
      aria-label="Partner logos"
    >
      <div className="marquee-mask flex min-h-[202px] items-center py-10">
        <div className="marquee-track flex w-max">
          <LogoRow />
          <LogoRow duplicate />
        </div>
      </div>
    </section>
  );
}
