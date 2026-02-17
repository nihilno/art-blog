import Subtitle from "@/components/globals/subtitle";
import Author from "./author";

function Authors() {
  return (
    <section className="border-foreground border-t">
      <Subtitle title="Authors" href="/authors" linkLabel="All authors" />

      <section className="grid grid-cols-1 md:mt-24 lg:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Author key={i} />
        ))}
      </section>
    </section>
  );
}

export default Authors;
