import Image, { type ImageProps } from "next/image";

export default function AppImage({ unoptimized, ...props }: ImageProps) {
  const src = typeof props.src === "string" ? props.src : "";
  const isSvg = /\.svg(\?|$)/.test(src);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image unoptimized={unoptimized ?? isSvg} {...props} />
  );
}
