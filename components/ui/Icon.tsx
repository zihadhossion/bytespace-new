import type { ImgHTMLAttributes } from "react";

type IconProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  alt: string;
};

export default function Icon({ src, alt, className, ...props }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} aria-hidden className={className} {...props} />
  );
}
