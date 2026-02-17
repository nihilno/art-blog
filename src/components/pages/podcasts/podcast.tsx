import List from "@/components/globals/list";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Podcast({ index }: { index: number }) {
  const isLast = index === 4;

  return (
    <Link
      href="/podcasts/1"
      className={cn(
        "border-foreground group relative flex flex-col items-center gap-8 transition hover:-translate-1 md:flex-row md:gap-16",
        !isLast && "border-b pb-12",
      )}
    >
      <h4 className="self-start text-xl">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </h4>

      <div className="relative size-60 shrink-0 transition group-hover:scale-105 group-hover:shadow-xl">
        <Image
          src="/sample/featured-blog.png"
          alt="Podcast Cover"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <article className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-center md:gap-0">
        <h2 className="line-clamp-2 max-w-[22ch] text-3xl font-bold capitalize">
          Don&apos;t close your eyes
        </h2>

        <section className="space-y-2">
          <List type="podcast" />
          <span className="flex w-fit items-center gap-2 font-bold uppercase group-hover:underline">
            Listen
            <ArrowRight className="size-5 transition group-hover:translate-x-4" />
          </span>
        </section>
        {/* <ul className="flex items-center gap-8">
            <li>
              <span className="mr-1.5 font-bold">Date</span>{" "}
              {format(new Date(), "d. MMMM yyyy")}
            </li>
            <li>
              <span className="mr-1.5 font-bold">Duration</span> 1h 20 Min
            </li>
            <span className="flex w-fit items-center gap-2 font-bold uppercase group-hover:underline">
              Listen
              <ArrowRight className="size-5 transition group-hover:translate-x-4" />
            </span>
          </ul> */}
      </article>
    </Link>
  );
}

export default React.memo(Podcast);
