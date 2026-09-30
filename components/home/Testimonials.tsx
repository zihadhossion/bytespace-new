import AppImage from "@/components/ui/AppImage";
import Glow from "@/components/ui/Glow";
import Title from "@/components/ui/Title";
import { testimonials } from "@/data/testimonials";

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={`relative overflow-hidden bg-soft ${className}`}
      aria-label="Discover what our community is saying"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-full w-[1440px] -translate-x-1/2">
          <Glow color="volt" className="top-[-241px] left-[842px] h-[1137px] w-[1137px]" />
          <Glow color="volt" className="top-[-138px] left-[395px] h-[672px] w-[672px]" />
          <Glow color="brand" className="top-[149px] left-[-442px] h-[1137px] w-[1137px]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-page px-6 pt-12 pb-14 md:pt-[74px] md:pb-[57px] lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end lg:gap-[43px]">
          <Title
            as="h2"
            variant="title"
            className="max-w-[577px] text-title text-black"
          >
            Discover What Our
            <br />
            Community Is Saying
          </Title>
          <Title as="p" variant="raw" className="max-w-[580px] text-lg text-muted">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </Title>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-[41px] md:mt-[72px] md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-card bg-white p-6"
            >
              <AppImage
                src={testimonial.avatar}
                alt={testimonial.name}
                width={200}
                height={200}
                className="h-20 w-20 rounded-full object-cover"
              />
              <figcaption className="flex flex-col">
                <span className="font-heading text-subheading font-semibold text-black">
                  {testimonial.name}
                </span>
                <span className="text-lg text-brand-800">
                  {testimonial.role}
                </span>
              </figcaption>
              <blockquote className="text-lg text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
