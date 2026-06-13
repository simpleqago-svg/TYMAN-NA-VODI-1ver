import Link from "next/link";

type SectionCtaProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function SectionCta({
  href,
  label,
  variant = "secondary",
  className = "",
}: SectionCtaProps) {
  const classes = `${variant === "primary" ? "btn-primary" : "btn-secondary"} cursor-pointer shrink-0 ${className}`.trim();

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}

type BlockActionProps = {
  hint?: string;
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function BlockAction({
  hint,
  href,
  label,
  variant = "secondary",
  className = "",
}: BlockActionProps) {
  if (hint) {
    return (
      <div
        className={`mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${className}`.trim()}
      >
        <p className="max-w-md text-sm text-muted">{hint}</p>
        <SectionCta href={href} label={label} variant={variant} />
      </div>
    );
  }

  return (
    <div className={`mt-8 flex justify-start ${className}`.trim()}>
      <SectionCta href={href} label={label} variant={variant} />
    </div>
  );
}
