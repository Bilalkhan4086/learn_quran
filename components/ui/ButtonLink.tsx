import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <LuArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

const baseClasses =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors duration-200 sm:px-6";

const variantClasses = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-brand-light focus-visible:outline-accent",
  secondary:
    "border border-primary/20 bg-surface text-primary hover:border-primary/40 hover:bg-sage",
  ghost: "text-primary hover:bg-primary/5",
} as const;

export type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variantClasses;
  showArrow?: boolean;
  className?: string;
  ariaLabel?: string;
};
