import { partnerLogo } from "@/lib/images";

interface PartnerLogosProps {
  className?: string;
}

const logos = [1, 2, 3, 4, 5];

export default function PartnerLogos({ className = "" }: PartnerLogosProps) {
  return (
    <section
      id="partners"
      className={`bg-steel-50 ${className}`}
      aria-label="Partner logos"
    >
      <div className="mx-auto flex min-h-[202px] w-full max-w-page flex-wrap items-center justify-center gap-8 px-6 py-10 sm:gap-12 lg:px-10 xl:gap-[72px]">
        {logos.map((logo) => (
          <img
            key={logo}
            src={partnerLogo(logo)}
            alt="Logoipsum"
            className="h-[34px] w-auto md:h-[41px]"
          />
        ))}
      </div>
    </section>
  );
}
