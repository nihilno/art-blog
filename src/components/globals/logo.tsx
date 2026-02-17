import { cn } from "@/lib/utils";
import Link from "next/link";

function Logo({ variant = "default" }: { variant?: "default" | "secondary" }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-extrabold uppercase md:text-base",
        variant === "secondary" ? "text-background" : "text-foreground",
      )}
    >
      Fyrre Magazine
    </Link>
  );
}

export default Logo;
