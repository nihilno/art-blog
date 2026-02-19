import Title from "@/components/globals/title";
import Authors from "@/components/pages/frontpage/authors/authors";
import Content from "@/components/pages/frontpage/magazine/content";
import FeaturedArticle from "@/components/pages/frontpage/magazine/hero-article";
import Podcasts from "@/components/pages/frontpage/podcasts/podcasts";
import { Suspense } from "react";

export default function FrontPage() {
  return (
    <section>
      <Title label="Art & Life" wrapper={true} />
      <FeaturedArticle />
      <Content />

      <div className="mt-24 space-y-24 md:mt-0 md:space-y-48">
        <Suspense
          fallback={
            <div className="h-96 w-full animate-pulse rounded-lg bg-gray-300" />
          }
        >
          <Podcasts />
        </Suspense>
        <Suspense
          fallback={
            <div className="h-96 w-full animate-pulse rounded-lg bg-gray-300" />
          }
        >
          <Authors />
        </Suspense>
      </div>
    </section>
  );
}
