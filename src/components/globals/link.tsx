import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function LinkBtn({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      className={cn(
        "group flex w-fit items-center gap-2 font-bold uppercase",
        className,
      )}
      href={href}
    >
      <span className="tracking-wider group-hover:underline">{children}</span>
      &nbsp;
      <ArrowRight className="size-5 transition group-hover:translate-x-4" />
    </Link>
  );
}

export default LinkBtn;
