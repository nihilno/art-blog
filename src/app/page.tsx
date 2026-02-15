import FeaturedBlog from "@/components/frontpage/featured-blog";
import Title from "@/components/frontpage/globals/title";
import Header from "@/components/frontpage/header";

export default function FrontPage() {
  return (
    <section>
      <Header />
      <Title label="Art & Life" wrapper={true} />
      <FeaturedBlog />
    </section>
  );
}
