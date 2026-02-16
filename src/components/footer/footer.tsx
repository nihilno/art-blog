import Links from "./links";
import Newsletter from "./newsletter";
import Socials from "./socials";
import Wrapper from "./wrapper";

function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <Wrapper />
      <section className="mt-32 space-y-32 px-24 pb-8">
        <Newsletter />
        <Links />
        <Socials />
      </section>
    </footer>
  );
}

export default Footer;
