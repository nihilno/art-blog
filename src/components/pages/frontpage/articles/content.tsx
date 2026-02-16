import Articles from "./articles";
import FeaturedMagazine from "./featured-magazine";

function Content() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-24 md:grid-cols-[7fr_2.5fr]">
      <Articles />
      <FeaturedMagazine />
    </section>
  );
}

export default Content;
