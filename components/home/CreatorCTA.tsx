import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";
import Title from "@/components/ui/Title";
import { images } from "@/lib/images";

interface CreatorCTAProps {
  className?: string;
}

export default function CreatorCTA({ className = "" }: CreatorCTAProps) {
  return (
    <section
      id="join-creator"
      className={`relative overflow-hidden bg-brand-800 text-steel-50 ${className}`}
      aria-label="Join as creator"
    >
      <GridOverlay />

      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 xl:block"
      >
        <AppImage
          src={images.cta.ornaments}
          alt=""
          width={3436}
          height={1608}
          aria-hidden
          className="absolute top-[-162px] left-[-120px] w-[1718px] max-w-none"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-page flex-col items-center px-6 py-16 text-center md:py-[85px] lg:px-10 xl:min-h-[488px] xl:justify-center xl:py-0">
        <div className="flex w-full max-w-[964px] flex-col items-center gap-10">
          <Title
            as="h2"
            variant="title"
            className="max-w-[710px] text-title text-steel-50"
          >
            Unlock Your Potential as a Creator with ByteSpace
          </Title>

          <Title as="p" variant="raw" className="text-lg text-steel-50">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </Title>

          <Button className="leading-[1.2]">Join as Creator</Button>
        </div>
      </div>
    </section>
  );
}
