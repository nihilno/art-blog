import ContentAbout from "@/components/pages/content-about";
import ContentData from "@/components/pages/content-data";
import MagazineHero from "./magazine-hero";

function MagazineProfile() {
  return (
    <section>
      <MagazineHero />
      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-[350px_1fr] gap-24">
        <ContentData type="magazine" />
        <ContentAbout type="magazine" />
      </div>
    </section>
  );
}

export default MagazineProfile;
