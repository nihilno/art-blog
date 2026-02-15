import Content from "@/components/frontpage/articles/content";
import FeaturedArticle from "@/components/frontpage/articles/featured-article";
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

      <Podcasts />
    </section>
  );
}
