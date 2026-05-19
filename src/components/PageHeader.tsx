type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHeader({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-ocean text-primary-foreground">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-30 mix-blend-luminosity"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-transparent to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 backdrop-blur text-xs font-medium tracking-widest uppercase mb-6">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
