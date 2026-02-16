import Title from "@/components/globals/title";
import Filter from "@/components/pages/magazines/filter";
import Magazines from "@/components/pages/magazines/magazines";

export default function MagazinePage() {
  return (
    <section>
      <Title label="Magazines" />
      <Filter />
      <Magazines />
    </section>
  );
}
