import Title from "@/components/globals/title";
import Authors from "@/components/pages/frontpage/authors/authors";
import Content from "@/components/pages/frontpage/magazine/content";
import FeaturedArticle from "@/components/pages/frontpage/magazine/hero-article";
import Podcasts from "@/components/pages/frontpage/podcasts/podcasts";

export default function FrontPage() {
  return (
    <section>
      <Title label="Art & Life" wrapper={true} />
      <FeaturedArticle />
      <Content />

      <div className="mt-24 space-y-24 md:mt-0 md:space-y-48">
        <Podcasts />
        <Authors />
      </div>
    </section>
  );
}
