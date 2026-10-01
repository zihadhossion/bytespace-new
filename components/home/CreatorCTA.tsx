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
          src={images.cta.ornaments.springLime}
          alt="Lime green spiral spring decoration"
          width={505}
          height={537}
          aria-hidden
          className="absolute animate-float top-[-98px] left-[-56px] w-[252px] max-w-none"
          style={{ animationDelay: "0s" }}
        />

        <AppImage
          src={images.cta.ornaments.squiggleSm}
          alt="Small squiggle decoration"
          width={230}
          height={245}
          aria-hidden
          className="absolute animate-float top-[34px] left-[212px] w-[115px] max-w-none"
          style={{ animationDelay: "0.7s" }}
        />

        <AppImage
          src={images.cta.ornaments.coneWhite}
          alt="White cone decoration"
          width={256}
          height={305}
          aria-hidden
          className="absolute animate-float top-[242px] left-[-12px] w-[128px] max-w-none"
          style={{ animationDelay: "1.4s" }}
        />

        <AppImage
          src={images.cta.ornaments.donutLime}
          alt="Lime green donut ring decoration"
          width={477}
          height={437}
          aria-hidden
          className="absolute animate-float top-[358px] left-[71px] w-[238px] max-w-none"
          style={{ animationDelay: "2.1s" }}
        />

        <AppImage
          src={images.cta.ornaments.coneLime}
          alt="Lime green cone decoration"
          width={250}
          height={275}
          aria-hidden
          className="absolute animate-float top-[22px] left-[1107px] w-[125px] max-w-none"
          style={{ animationDelay: "2.8s" }}
        />

        <AppImage
          src={images.cta.ornaments.cylinderWhite}
          alt="White cylinder decoration"
          width={547}
          height={600}
          aria-hidden
          className="absolute animate-float top-[40px] left-[1272px] w-[274px] max-w-none"
          style={{ animationDelay: "3.5s" }}
        />

        <AppImage
          src={images.cta.ornaments.squiggleLg}
          alt="Large squiggle decoration"
          width={381}
          height={499}
          aria-hidden
          className="absolute animate-float top-[328px] left-[1181px] w-[190px] max-w-none"
          style={{ animationDelay: "4.2s" }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-page flex-col items-center px-5 py-16 text-center sm:px-6 md:px-0 md:py-[85px] xl:min-h-[488px] xl:justify-center xl:py-0">
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
