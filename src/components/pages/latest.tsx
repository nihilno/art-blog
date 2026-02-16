import LinkBtn from "../globals/link";
import Podcast from "./frontpage/podcasts/podcast";
import Magazine from "./magazines/magazine";

function Latest({
  label,
  type,
  href,
}: {
  label: string;
  type: "podcast" | "magazine";
  href: string;
}) {
  return (
    <section className="border-foreground space-y-24 border-t pt-12">
      <article className="flex items-center justify-between">
        <h2 className="text-6xl font-bold">{label}</h2>
        <LinkBtn href={href}>See All</LinkBtn>
      </article>
      <div className="grid grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) =>
          type === "podcast" ? (
            <Podcast index={i} key={i} />
          ) : (
            <Magazine key={i} />
          ),
        )}
      </div>
    </section>
  );
}

export default Latest;
