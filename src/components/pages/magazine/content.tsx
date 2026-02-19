import { Suspense } from "react";
import FeaturedMagazine from "./featured-article";
import Magazines from "./magazines";

function Content() {
  return (
    <section className="mt-24 grid grid-cols-1 gap-24 lg:grid-cols-[7fr_2.5fr]">
      <Suspense fallback={<p>Loading articles...</p>}>
        <Magazines />
      </Suspense>
      <FeaturedMagazine />
    </section>
  );
}

export default Content;
