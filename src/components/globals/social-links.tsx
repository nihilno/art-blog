import { SOCIAL_LINKS } from "@/constants/nav-links";
import Link from "next/link";

function SocialLinks() {
  return (
    <ul className="flex items-center gap-4">
      {SOCIAL_LINKS.map(({ label, icon: Icon }) => (
        <li key={label}>
          <Link href="#" aria-label={label}>
            <Icon className="size-4.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
