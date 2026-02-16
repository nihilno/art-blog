import Author from "./author";

function Authors() {
  return (
    <section className="my-16 space-y-12">
      {Array.from({ length: 6 }).map((_, i) => {
        return <Author key={i} index={i} />;
      })}
    </section>
  );
}

export default Authors;
