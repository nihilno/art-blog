import ContentAbout from "@/components/pages/content-about";
import ContentData from "@/components/pages/content-data";
import { getArticleBySlug } from "@/lib/data/get-articles";
import { cacheLife } from "next/cache";
import MagazineHero from "./magazine-hero";

async function MagazineProfile({ slug }: { slug: string }) {
  "use cache";
  cacheLife("days");
  const article = await getArticleBySlug(slug);

  return (
    <section>
      <MagazineHero />
      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-24 lg:grid-cols-[350px_1fr]">
        <ContentData type="magazine" />
        <ContentAbout type="magazine" />
      </div>
    </section>
  );
}

export default MagazineProfile;
