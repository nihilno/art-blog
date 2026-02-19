import SocialLinks from "../globals/social-links";

function Socials() {
  return (
    <section className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
      <p className="text-background/80 text-sm">
        &copy; {2025} Made by&nbsp;
        <span className="text-background">Maciej Polowy</span> &mdash; Powered
        by loremipsum.
      </p>

      <SocialLinks />
    </section>
  );
}

export default Socials;
