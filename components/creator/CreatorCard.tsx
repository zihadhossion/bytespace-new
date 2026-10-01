import Link from "next/link";

import AppImage from "@/components/ui/AppImage";
import AvatarStack from "@/components/ui/AvatarStack";
import GridOverlay from "@/components/ui/GridOverlay";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { cardAvatars } from "@/data/avatars";
import type { Creator } from "@/data/creator";
import { images } from "@/lib/images";

interface CreatorCardProps {
  creator: Creator;
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  const courseCount = creator.courseIds.length;

  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="group block cursor-pointer"
    >
      <article className="rounded-card border border-steel-200 bg-white p-4 pb-[21px] transition group-hover:border-steel-300 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <div className="relative">
          <div className="relative h-[140px] w-full overflow-hidden rounded-xl bg-brand-800">
            <GridOverlay />
          </div>
          <AppImage
            src={creator.avatar}
            alt={creator.name}
            width={192}
            height={192}
            className="absolute -bottom-8 left-6 h-20 w-20 rounded-full border-4 border-white object-cover"
          />
        </div>

        <div className="mt-[44px] flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Title
              as="h3"
              variant="subheading"
              className="truncate font-heading text-subheading font-semibold text-black"
            >
              {creator.name}
            </Title>
            <Title
              as="p"
              variant="raw"
              className="truncate text-sm font-medium text-brand-800"
            >
              {creator.role}
            </Title>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-full bg-steel-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-steel-700">
              <Icon src={images.icons.category} alt="Category" className="h-5 w-5" />
              {courseCount} {courseCount === 1 ? "Course" : "Courses"}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-steel-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-steel-700">
              <Icon src={images.icons.heroUsers} alt="Users" className="h-5 w-5" />
              {creator.followers} Followers
            </span>
          </div>

          <div className="flex items-center justify-between">
            <AvatarStack
              avatars={cardAvatars}
              total={`${creator.followers}`}
              size="sm"
              totalVariant="lime"
            />
            <span className="rounded-full bg-volt-400 px-5 py-2.5 text-label-s font-medium text-steel-950 transition-colors group-hover:bg-volt-500">
              {creator.followLabel}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
