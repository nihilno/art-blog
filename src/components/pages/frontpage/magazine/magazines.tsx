import LinkBtn from "@/components/globals/link";
import { getArticles } from "@/lib/data/get-articles";
import Article from "./magazine";

async function Magazines() {
  const articles = await getArticles();

  return (
    <section className="border-foreground flex flex-col gap-12 pb-16">
      {articles.map((article) => {
        return <Article key={article.id} article={article} />;
      })}

      <LinkBtn href="/magazines" className="mt-4">
        All articles
      </LinkBtn>
    </section>
  );
}

export default Magazines;
