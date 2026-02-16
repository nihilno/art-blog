import Content from "@/components/pages/frontpage/articles/content";
import FeaturedArticle from "@/components/pages/frontpage/articles/featured-article";
import Authors from "@/components/pages/frontpage/authors/authors";
import Podcasts from "@/components/pages/frontpage/podcasts/podcasts";
import Title from "@/components/globals/title";

export default function FrontPage() {
  return (
    <section>
      <Title label="Art & Life" wrapper={true} />
      <FeaturedArticle />
      <Content />

      <div className="space-y-48">
        <Podcasts />
        <Authors />
      </div>
    </section>
  );
}
