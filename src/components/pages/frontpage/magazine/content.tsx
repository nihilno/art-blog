import FeaturedMagazine from "./featured-article";
import Magazines from "./magazines";

function Content() {
  return (
    <section className="mt-24 grid grid-cols-1 gap-24 md:mt-8 md:grid-cols-[7fr_2.5fr]">
      <Magazines />
      <FeaturedMagazine />
    </section>
  );
}

export default Content;
