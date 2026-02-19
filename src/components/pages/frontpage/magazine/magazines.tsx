import LinkBtn from "@/components/globals/link";
import Article from "./magazine";

function Magazines() {
  return (
    <section className="border-foreground flex flex-col gap-12 pb-16">
      {Array.from({ length: 6 }).map((_, index) => {
        return <Article key={index} />;
      })}

      <LinkBtn href="/magazines" className="mt-4">
        All articles
      </LinkBtn>
    </section>
  );
}

export default Magazines;
