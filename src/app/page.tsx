import Content from "@/components/frontpage/articles/content";
import FeaturedArticle from "@/components/frontpage/articles/featured-article";
import Authors from "@/components/frontpage/authors/authors";
import Header from "@/components/frontpage/header";
import Podcasts from "@/components/frontpage/podcasts/podcasts";
import Title from "@/components/globals/title";

export default function FrontPage() {
  return (
    <section>
      <Header />
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
