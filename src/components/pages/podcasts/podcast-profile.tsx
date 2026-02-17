import ContentAbout from "@/components/pages/content-about";
import ContentData from "@/components/pages/content-data";

function PodcastProfile() {
  return (
    <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-24 lg:grid-cols-[350px_1fr]">
      <ContentData type="podcast" />
      <ContentAbout type="podcast" />
    </div>
  );
}

export default PodcastProfile;
