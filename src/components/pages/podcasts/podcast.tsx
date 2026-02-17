import { cn } from "@/lib/utils";
import { format } from "date-fns";
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
        "border-foreground group relative flex items-center space-x-16 transition hover:-translate-1",
        !isLast && "border-b pb-12",
      )}
    >
      <h4 className="text-xl">{index < 10 ? `0${index + 1}` : index + 1}</h4>

      <div className="relative size-60 shrink-0 transition group-hover:scale-105 group-hover:shadow-xl">
        <Image
          src="/sample/featured-blog.png"
          alt="Podcast Cover"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <article className="flex w-full items-center justify-between">
        <h2 className="line-clamp-2 max-w-[22ch] text-3xl font-bold capitalize">
          Don&apos;t close your eyes Don&apos;t close your eyes
        </h2>

        <section className="flex justify-between">
          <ul className="flex items-center gap-8">
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
          </ul>
        </section>
      </article>
    </Link>
  );
}

export default React.memo(Podcast);
