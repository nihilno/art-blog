import LinkBtn from "@/components/globals/link";
import Article from "./article";

function Articles() {
  return (
    <section className="border-foreground flex flex-col gap-12 pb-16">
      {Array.from({ length: 6 }).map((_, i) => {
        const isLast = i === 5;
        return <Article key={i} isLast={isLast} />;
      })}

      <LinkBtn href="/" className="mt-4">
        All articles
      </LinkBtn>
    </section>
  );
}

export default Articles;
