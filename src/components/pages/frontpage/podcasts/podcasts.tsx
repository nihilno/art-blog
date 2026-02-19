import Subtitle from "@/components/globals/subtitle";
import { getPodcasts } from "@/lib/data/get-podcasts";
import Podcast from "./podcast";

async function Podcasts() {
  const podcasts = await getPodcasts();

  return (
    <section className="border-foreground border-t">
      <Subtitle title="Podcasts" href="/podcasts" linkLabel="All episodes" />

      <section className="grid grid-cols-1 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
        {podcasts.map((podcast) => (
          <Podcast key={podcast.id} podcast={podcast} />
        ))}
      </section>
    </section>
  );
}

export default Podcasts;
