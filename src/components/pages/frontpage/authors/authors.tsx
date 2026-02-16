import Subtitle from "@/components/globals/subtitle";
import Author from "./author";

function Authors() {
  return (
    <section className="border-foreground border-t">
      <Subtitle title="Authors" href="/" linkLabel="All authors" />

      <section className="mt-24 grid grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Author key={i} />
        ))}
      </section>
    </section>
  );
}

export default Authors;
