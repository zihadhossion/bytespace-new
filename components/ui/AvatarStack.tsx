import AppImage from "@/components/ui/AppImage";

interface Avatar {
  src: string;
  alt: string;
}

interface AvatarStackProps {
  avatars: Avatar[];
  total?: string;
  size?: "sm" | "md";
  totalVariant?: "lime" | "dark";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-[43px] w-[43px] text-xs",
};

const overlaps = {
  sm: "-space-x-2",
  md: "-space-x-4",
};

export default function AvatarStack({
  avatars,
  total,
  size = "md",
  totalVariant = "lime",
}: AvatarStackProps) {
  const border = size === "md" ? "border-2 border-white" : "";
  const badgeColor =
    totalVariant === "lime" ? "bg-volt-400 text-steel-950" : "bg-black text-white";

  return (
    <div className={`flex ${overlaps[size]}`}>
      {avatars.map((avatar, index) => (
        <AppImage
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          width={200}
          height={200}
          className={`${sizes[size]} ${border} shrink-0 rounded-full object-cover`}
        />
      ))}
      {total ? (
        <span
          className={`${sizes[size]} ${border} ${badgeColor} flex shrink-0 items-center justify-center rounded-full ${
            size === "md" ? "font-bold" : "font-medium"
          }`}
        >
          {total}
        </span>
      ) : null}
    </div>
  );
}
