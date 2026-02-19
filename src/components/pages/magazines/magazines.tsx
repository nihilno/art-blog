import LinkBtn from "@/components/globals/link";
import { getAllArticles } from "@/lib/data/get-articles";
import { cacheLife } from "next/cache";
import Magazine from "./magazine";

async function Magazines() {
  "use cache";
  cacheLife("hours");
  const articles = await getAllArticles();

  return (
    <section className="flex flex-col gap-12">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Magazine key={article.id} article={article} />
        ))}
      </div>

      <LinkBtn href="#" className="ml-auto">
        Next
      </LinkBtn>
    </section>
  );
}

export default Magazines;
