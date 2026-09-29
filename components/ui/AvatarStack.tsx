interface Avatar {
  src: string;
  alt: string;
}

interface AvatarStackProps {
  avatars: Avatar[];
  total?: string;
  size?: "sm" | "md";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-[43px] w-[43px] text-xs",
};

export default function AvatarStack({
  avatars,
  total,
  size = "md",
}: AvatarStackProps) {
  return (
    <div className="flex -space-x-2.5">
      {avatars.map((avatar) => (
        <img
          key={avatar.src}
          src={avatar.src}
          alt={avatar.alt}
          className={`${sizes[size]} rounded-full border-2 border-white object-cover`}
        />
      ))}
      {total ? (
        <span
          className={`${sizes[size]} flex items-center justify-center rounded-full border-2 border-white bg-steel-950 font-medium text-white`}
        >
          {total}
        </span>
      ) : null}
    </div>
  );
}
