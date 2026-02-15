import LinkBtn from "@/components/globals/link";
import Article from "./article";

function Articles() {
  return (
    <section className="border-foreground flex flex-col gap-12 border-b pb-16">
      {Array.from({ length: 6 }).map((_, index) => {
        const isLast = index === 5;
        return <Article key={index} isLast={isLast} />;
      })}

      <LinkBtn href="/" className="mt-4">
        All articles
      </LinkBtn>
    </section>
  );
}

export default Articles;
