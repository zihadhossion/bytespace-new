interface GridOverlayProps {
  className?: string;
}

export default function GridOverlay({ className = "" }: GridOverlayProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-10
        [background-image:linear-gradient(to_right,_#fff_0_2px,_transparent_2px),linear-gradient(to_bottom,_#fff_0_2px,_transparent_2px)]
        [background-size:120px_120px]
        ${className}`}
    />
  );
}
