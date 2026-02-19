import GoBack from "@/components/pages/go-back";
import Latest from "@/components/pages/latest";
import PodcastProfile from "@/components/pages/podcasts/podcast-profile";

export default function PodcastPage() {
  return (
    <section className="space-y-24">
      <GoBack label="Podcast" />
      <PodcastProfile />
      <Latest label="Latest Episodes" href="/podcasts" />
    </section>
  );
}
