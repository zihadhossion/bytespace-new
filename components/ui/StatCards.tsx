import AvatarStack from "@/components/ui/AvatarStack";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { stackAvatars } from "@/data/avatars";
import { images } from "@/lib/images";

export function LearningProgressCard({
  className,
  labelClassName,
  barClassName,
}: {
  className: string;
  labelClassName: string;
  barClassName: string;
}) {
  return (
    <div className={className}>
      <Title as="p" variant="raw" className={labelClassName}>
        Learning Progress
      </Title>
      <Title
        as="p"
        variant="raw"
        className="mt-2 font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.01em]"
      >
        55%
      </Title>
      <div className="mt-2 h-2 w-full rounded-full bg-[#f6f6f6]">
        <div className={`${barClassName} h-full w-[56%] rounded-full bg-volt-400`} />
      </div>
    </div>
  );
}

function StarSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path
        d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.5l-3.52 1.85.67-3.93L2.3 5.64l3.94-.57L8 1.5z"
        fill="#003be2"
      />
    </svg>
  );
}

export function HappyStudentsCard({
  className,
  layout = "grouped",
  labelClassName,
  rowClassName,
  valueClassName,
  starVariant = "icon",
  stackClassName,
  totalVariant = "lime",
}: {
  className: string;
  layout?: "grouped" | "flat";
  labelClassName: string;
  rowClassName: string;
  valueClassName: string;
  starVariant?: "icon" | "svg";
  stackClassName?: string;
  totalVariant?: "lime" | "dark" | "steel";
}) {
  const rating = (
    <div className={rowClassName}>
      <span className={valueClassName}>4.5 (240)</span>
      {starVariant === "svg" ? (
        <StarSvg />
      ) : (
        <Icon src={images.icons.starSm} alt="Star" className="h-4 w-4" />
      )}
    </div>
  );

  const stack = (
    <AvatarStack avatars={stackAvatars} total="2K+" size="md" totalVariant={totalVariant} />
  );

  if (layout === "flat") {
    return (
      <div className={className}>
        <Title
          as="p"
          variant="raw"
          className={labelClassName}
        >
          Happy Students
        </Title>
        {rating}
        <div className={stackClassName}>{stack}</div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        <div>
          <Title as="p" variant="raw" className={labelClassName}>
            Happy Students
          </Title>
          {rating}
        </div>
        {stack}
      </div>
    </div>
  );
}
