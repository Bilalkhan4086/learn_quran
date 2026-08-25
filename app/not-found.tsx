import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="site-container grid min-h-[65vh] place-items-center py-20 text-center">
      <div className="max-w-xl">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-primary sm:text-6xl">
          Let&apos;s guide you back.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          The page you requested may have moved or no longer exists. Explore our
          courses or return to the homepage.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/courses" showArrow>
            Browse courses
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Return home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
