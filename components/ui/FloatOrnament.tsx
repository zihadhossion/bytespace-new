import AppImage from "@/components/ui/AppImage";

export interface OrnamentConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  delay: string;
}

export default function FloatOrnament({
  src,
  alt,
  width,
  height,
  className,
  delay,
}: OrnamentConfig) {
  return (
    <AppImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      aria-hidden
      className={className}
      style={{ animationDelay: delay }}
    />
  );
}
