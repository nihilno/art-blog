import Title from "@/components/globals/title";
import Podcasts from "@/components/pages/podcasts/podcasts";

export default function PodcastPage() {
  return (
    <section>
      <Title label="Podcasts" />
      <Podcasts type="all" />
    </section>
  );
}
