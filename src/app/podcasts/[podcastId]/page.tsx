import GoBack from "@/components/pages/go-back";
import Latest from "@/components/pages/latest";
import PodcastProfile from "@/components/pages/podcasts/podcast-profile";

export default async function PodcastPage({
  params,
}: {
  params: Promise<{ podcastId: string }>;
}) {
  const { podcastId } = await params;

  return (
    <section className="space-y-24">
      <GoBack label="Podcast" />
      <PodcastProfile />
      <Latest label="Latest Episodes" type="podcast" href="/podcasts" />
    </section>
  );
}
