import Links from "./links";
import Newsletter from "./newsletter";
import Socials from "./socials";
import Wrapper from "./wrapper";

function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <Wrapper />
      <section className="mt-16 space-y-32 px-6 pb-8 md:mt-32 md:px-24">
        <Newsletter />
        <Links />
        <Socials />
      </section>
    </footer>
  );
}

export default Footer;
