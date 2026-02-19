import Subtitle from "@/components/globals/subtitle";
import { getAuthors } from "@/lib/data/get-authors";
import Author from "./author";

async function Authors() {
  const authors = await getAuthors();

  return (
    <section className="border-foreground border-t">
      <Subtitle title="Authors" href="/authors" linkLabel="All authors" />

      <section className="grid grid-cols-1 md:mt-24 lg:grid-cols-2">
        {authors.map((author) => (
          <Author key={author.id} author={author} />
        ))}
      </section>
    </section>
  );
}

export default Authors;
