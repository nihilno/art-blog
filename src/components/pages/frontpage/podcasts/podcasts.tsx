import Subtitle from "@/components/globals/subtitle";
import Podcast from "./podcast";

function Podcasts() {
  return (
    <section className="border-foreground border-t">
      <Subtitle title="Podcasts" href="/podcasts" linkLabel="All episodes" />

      <section className="grid grid-cols-1 md:mt-24 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Podcast key={i} index={i} />
        ))}
      </section>
    </section>
  );
}

export default Podcasts;
