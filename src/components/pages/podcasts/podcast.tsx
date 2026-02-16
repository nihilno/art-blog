import LinkBtn from "@/components/globals/link";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

function Podcast({ index }: { index: number }) {
  const isLast = index === 4;

  return (
    <section
      className={cn(
        "border-foreground relative flex items-center space-x-16",
        !isLast && "border-b pb-12",
      )}
    >
      <h4 className="text-xl">{index < 10 ? `0${index + 1}` : index + 1}</h4>

      <div className="relative size-60 shrink-0">
        <Image
          src="/sample/featured-blog.png"
          alt="Pocast Cover"
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
            <LinkBtn href="/">Listen</LinkBtn>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default React.memo(Podcast);
