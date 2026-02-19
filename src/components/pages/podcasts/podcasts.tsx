import Subtitle from "@/components/globals/subtitle";
import { getAllPodcasts } from "@/lib/data/get-podcasts";
import { cacheLife } from "next/cache";
import Podcast from "./podcast";

async function Podcasts({ type }: { type: "latest" | "all" }) {
  "use cache";
  cacheLife("hours");
  const podcasts = await getAllPodcasts();

  return type === "latest" ? (
    <section className="border-foreground border-t">
      <Subtitle title="Podcasts" href="/podcasts" linkLabel="All episodes" />

      <section className="grid grid-cols-1 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
        {podcasts.map((podcast, index) => (
          <Podcast
            key={podcast.id}
            type="all"
            podcast={podcast}
            index={index}
            length={podcasts.length}
          />
        ))}
      </section>
    </section>
  ) : (
    <section className="my-16 space-y-12">
      {podcasts.map((podcast, index) => {
        return (
          <Podcast
            key={podcast.id}
            type="latest"
            podcast={podcast}
            index={index}
            length={podcasts.length}
          />
        );
      })}
    </section>
  );
}

export default Podcasts;
