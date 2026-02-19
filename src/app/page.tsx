import Title from "@/components/globals/title";
import Authors from "@/components/pages/authors/authors";
import Content from "@/components/pages/magazine/content";
import FeaturedArticle from "@/components/pages/magazine/hero-article";
import Podcasts from "@/components/pages/podcasts/podcasts";

export default function FrontPage() {
  return (
    <section>
      <Title label="Art & Life" wrapper={true} />
      <FeaturedArticle />
      <Content />

      <div className="mt-24 space-y-24 md:mt-0 md:space-y-48">
        <Podcasts type="latest" />
        <Authors type="latest" />
      </div>
    </section>
  );
}
