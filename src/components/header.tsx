"use client";

import { LINKS, SOCIAL_LINKS } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="card-with-lines border-foreground container mx-auto mt-8 flex h-12 justify-between border-b">
      <Link href="/" className="text-sm font-extrabold uppercase md:text-base">
        Fyrre Magazine
      </Link>
      <nav className="bg-background flex items-center gap-8 pl-8">
        <ul className="flex items-center gap-8">
          <li className="border-foreground border-r pr-8">
            <Link href="/">
              <HomeIcon className="size-6" />
            </Link>
          </li>
          {LINKS.map(({ label, href }) => (
            <li
              key={href}
              className={cn(
                pathname === href ? "underline" : "",
                "hover:underline",
              )}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="bg-foreground h-px w-4" />
        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Link href="#">
                <Icon className="size-4.5" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
