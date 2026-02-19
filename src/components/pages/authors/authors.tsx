import Subtitle from "@/components/globals/subtitle";
import Author from "@/components/pages/authors/author";
import { getAllAuthors } from "@/lib/data/get-authors";

async function Authors({ type }: { type: "latest" | "all" }) {
  const authors = await getAllAuthors();

  return type === "latest" ? (
    <section className="border-foreground border-t">
      <Subtitle title="Authors" href="/authors" linkLabel="All authors" />
      <div className="grid grid-cols-1 md:mt-24 lg:grid-cols-2">
        {authors.map((author, i) => {
          return (
            <Author
              type="latest"
              key={author.id}
              index={i}
              author={author}
              length={authors.length}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <section className="my-16 space-y-12">
      {authors.map((author) => (
        <Author key={author.id} author={author} type="all" />
      ))}
    </section>
  );
}

export default Authors;
