import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "metal";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({ href, children, variant = "primary", className, type = "button", onClick }: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]",
    variant === "primary" && "border border-red-400/20 bg-gradient-to-l from-red-800 to-red-950 text-white shadow-[0_0_40px_rgba(159,16,40,0.25)] hover:-translate-y-0.5 hover:brightness-110",
    variant === "ghost" && "border border-white/15 bg-white/[0.045] text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10",
    variant === "metal" && "bg-gradient-to-r from-zinc-200 via-white to-zinc-500 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] hover:-translate-y-0.5 hover:brightness-110",
    className,
  );
  const content = (
    <>
      {children}
      <ArrowUpLeft className="h-4 w-4 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
