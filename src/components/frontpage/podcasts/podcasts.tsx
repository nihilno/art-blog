import LinkBtn from "@/components/globals/link";
import Podcast from "./podcast";

function Podcasts() {
  return (
    <section>
      <div className="my-12 flex items-center justify-between gap-2">
        <h2 className="text-[5vw] leading-none font-bold uppercase">
          Podcasts
        </h2>
        <LinkBtn href="/">All episodes</LinkBtn>
      </div>

      <section className="border-foreground mt-24 grid grid-cols-3 border-t border-r border-b">
        {Array.from({ length: 3 }).map((_, i) => (
          <Podcast key={i} index={i} />
        ))}
      </section>
    </section>
  );
}

export default Podcasts;
