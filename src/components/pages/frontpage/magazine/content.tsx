import FeaturedMagazine from "./featured-article";
import Magazines from "./magazines";

function Content() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-24 md:grid-cols-[7fr_2.5fr]">
      <Magazines />
      <FeaturedMagazine />
    </section>
  );
}

export default Content;
