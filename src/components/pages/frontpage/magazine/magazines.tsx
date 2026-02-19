import LinkBtn from "@/components/globals/link";
import { getLatestArticles } from "@/lib/data/get-articles";
import Article from "./magazine";

async function Magazines() {
  const articles = await getLatestArticles();

  return (
    <section className="border-foreground flex flex-col gap-12 pb-16">
      {articles.map((article, index) => {
        return (
          <Article
            key={article.id}
            article={article}
            index={index}
            length={articles.length}
          />
        );
      })}

      <LinkBtn href="/magazines" className="mt-4">
        All articles
      </LinkBtn>
    </section>
  );
}

export default Magazines;
