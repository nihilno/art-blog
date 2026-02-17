import ContentAbout from "@/components/pages/content-about";
import ContentData from "@/components/pages/content-data";

function PodcastProfile() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-[350px_1fr] gap-24">
      <ContentData type="podcast" />
      <ContentAbout type="podcast" />
    </div>
  );
}

export default PodcastProfile;
