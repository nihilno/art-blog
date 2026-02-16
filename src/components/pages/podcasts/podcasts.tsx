import Podcast from "./podcast";

function Podcasts() {
  return (
    <section className="my-16 space-y-12">
      {Array.from({ length: 5 }).map((_, i) => {
        return <Podcast key={i} index={i} />;
      })}
    </section>
  );
}

export default Podcasts;
