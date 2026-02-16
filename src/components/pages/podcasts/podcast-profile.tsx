import PodcastAbout from "./podcast-about";
import PodcastData from "./podcast-data";

function PodcastProfile() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-[350px_1fr] gap-24">
      <PodcastData />
      <PodcastAbout />
    </div>
  );
}

export default PodcastProfile;
