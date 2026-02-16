import { format } from "date-fns";
import SocialLinks from "../globals/social-links";

function Socials() {
  const now = format(new Date(), "yyyy");

  return (
    <section className="flex items-center justify-between">
      <p className="text-background/80 text-sm">
        &copy; {now} Made by&nbsp;
        <span className="text-background">Maciej Polowy</span> &mdash; Powered
        by loremipsum.
      </p>

      <SocialLinks />
    </section>
  );
}

export default Socials;
