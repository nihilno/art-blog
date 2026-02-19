import Title from "@/components/globals/title";
import Filter from "@/components/pages/magazines/filter";
import Magazines from "@/components/pages/magazines/magazines";
import { Suspense } from "react";

export default function MagazinePage() {
  return (
    <section>
      <Title label="Magazines" />
      <Filter />
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Magazines />
      </Suspense>
    </section>
  );
}
