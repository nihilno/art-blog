import Subtitle from "@/components/globals/subtitle";
import Podcast from "./podcast";

function Podcasts() {
  return (
    <section className="border-foreground border-t">
      <Subtitle title="Podcasts" href="/" linkLabel="All episodes" />

      <section className="border-foreground mt-24 grid grid-cols-3 divide-x border">
        {Array.from({ length: 3 }).map((_, i) => (
          <Podcast key={i} index={i} />
        ))}
      </section>
    </section>
  );
}

export default Podcasts;
