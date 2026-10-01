import Form from "next/form";

import GridOverlay from "@/components/ui/GridOverlay";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { images } from "@/lib/images";

interface CatalogHeroProps {
  ariaLabel: string;
  title: string;
  searchAriaLabel: string;
  filterLabel: string;
  q?: string;
  formParams?: Record<string, string>;
}

export default function CatalogHero({
  ariaLabel,
  title,
  searchAriaLabel,
  filterLabel,
  q = "",
  formParams = {},
}: CatalogHeroProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="relative min-h-[360px] overflow-hidden bg-brand-800"
    >
      <GridOverlay />

      <div className="relative mx-auto flex w-full max-w-page flex-col items-center gap-8 px-5 pt-[164px] sm:px-6 md:px-0">
        <Title
          as="h1"
          variant="heading"
          className="text-center font-heading text-heading font-semibold text-steel-50"
        >
          {title}
        </Title>

        <Form
          action=""
          role="search"
          className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-start sm:justify-center"
        >
          {Object.entries(formParams).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}

          <div className="flex h-[52px] w-full shrink-0 items-center gap-2 rounded-full bg-white px-6 sm:max-w-[461px]">
            <Button
              type="submit"
              variant="ghost"
              size="none"
              aria-label={searchAriaLabel}
              className="-mx-1 h-8 w-8 shrink-0"
            >
              <Icon src={images.icons.searchGray} alt="Search" className="h-6 w-6" />
            </Button>
            <input
              key={q}
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search"
              aria-label={searchAriaLabel}
              className="w-full bg-transparent text-lg text-steel-950 placeholder:text-steel-400 focus:outline-none"
            />
          </div>

          <Button className="h-12 w-full shrink-0 gap-2 text-label-l sm:w-[147px]">
            {filterLabel}
            <Icon
              src={images.icons.chevronDown}
              alt="Chevron down"
              className="h-6 w-6"
            />
          </Button>
        </Form>
      </div>
    </section>
  );
}
