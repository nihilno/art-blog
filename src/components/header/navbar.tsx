"use client";

import { LINKS } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "../globals/social-links";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-background flex items-center gap-8 pl-8">
      <ul className="flex items-center gap-8">
        <li className="border-foreground border-r pr-8">
          <Link href="/" aria-label="Home">
            <HomeIcon className="size-6" />
          </Link>
        </li>
        {LINKS.map(({ label, href }) => (
          <li
            key={href}
            className={cn(pathname.startsWith(href) ? "underline" : "")}
          >
            <Link href={href} aria-label={label}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="bg-foreground h-px w-4" aria-hidden="true" />
      <SocialLinks />
    </nav>
  );
}

export default Navbar;
