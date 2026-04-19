type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export function ProductShot({ src, alt, caption }: Props) {
  return (
    <figure className="relative">
      <div className="rounded-lg border hairline bg-surface/40 p-2 md:p-3 shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--color-foreground)_25%,transparent)]">
        <div className="rounded-md overflow-hidden border hairline bg-background">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
