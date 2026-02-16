import Logo from "@/components/globals/logo";
import { FOOTER_LINKS } from "@/constants/nav-links";

function Links() {
  return (
    <section className="flex max-w-360 justify-between gap-1">
      <Logo variant="secondary" />
      <ul className="grid grid-cols-3 gap-x-48 gap-y-4">
        {FOOTER_LINKS.map((link) => (
          <li
            className="text-background/80 hover:text-background w-fit cursor-pointer font-extralight transition hover:underline"
            key={link}
          >
            {link}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Links;
