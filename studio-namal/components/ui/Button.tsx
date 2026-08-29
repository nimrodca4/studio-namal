import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export function ButtonPrimary({
  href,
  children,
  className = "",
}: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 border border-ink px-8 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-700 ease-editorial hover:bg-ink hover:text-cream ${className}`}
    >
      {children}
      <ArrowUpRight
        size={14}
        strokeWidth={1.25}
        className="transition-transform duration-700 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

export function ButtonGhost({
  href,
  children,
  className = "",
}: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink ${className}`}
    >
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-wine transition-all duration-700 ease-editorial group-hover:w-full" />
    </Link>
  );
}

export function TextButton({
  onClick,
  children,
  className = "",
}: BaseProps & { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink ${className}`}
    >
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-wine transition-all duration-700 ease-editorial group-hover:w-full" />
    </button>
  );
}
