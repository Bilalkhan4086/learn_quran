import Image from "next/image";
import Link from "next/link";

export default function Logo({ inverse = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex min-h-11 items-center rounded-full"
      aria-label="Kanzul Quran home"
    >
      <Image
        src="/images/logo.png"
        alt="Kanzul Quran Online Academy"
        width={inverse ? 96 : 64}
        height={inverse ? 96 : 64}
        sizes={inverse ? "96px" : "64px"}
        className={`object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.32)] transition-opacity duration-200 group-hover:opacity-90 ${
          inverse ? "h-24 w-24" : "h-16 w-16"
        }`}
        priority={!inverse}
      />
    </Link>
  );
}

export type LogoProps = {
  inverse?: boolean;
};
