import { getLatestArticles } from "@/lib/data/get-articles";
import { cacheLife } from "next/cache";
import LinkBtn from "../globals/link";
import Magazine from "./magazine/magazine";
import Podcast from "./podcasts/podcast";

async function Latest({ label, type, href }: LatestProps) {
  "use cache";
  cacheLife("days");
  const posts = await getLatestArticles();

  return (
    <section className="border-foreground space-y-24 border-t pt-12">
      <article className="flex flex-col items-center justify-between">
        <h2 className="text-2xl font-bold md:text-6xl">{label}</h2>
        <LinkBtn href={href}>See All</LinkBtn>
      </article>
      <div className="grid grid-cols-1">
        {posts
          .slice(0, 3)
          .map((post, index) =>
            post.type === "PODCAST" ? (
              <Podcast
                key={post.id}
                index={index}
                length={posts.length}
                podcast={post}
              />
            ) : (
              <Magazine
                key={post.id}
                index={index}
                article={post}
                length={posts.length}
                type="compact"
              />
            ),
          )}
      </div>
    </section>
  );
}

export default Latest;
