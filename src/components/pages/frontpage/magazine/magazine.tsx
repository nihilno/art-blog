import Label from "@/components/globals/label";
import List from "@/components/globals/list";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Magazine({
  className,
  type = "regular",
}: {
  className?: string;

  type?: "regular" | "compact";
}) {
  return (
    <Link
      href={`/magazines/1`}
      className={cn(
        "border-foreground group relative flex flex-col gap-16 transition hover:-translate-1 lg:flex-row",
        // type === "regular" && !isLast && "border-b pb-12",
        type === "compact" && "border p-6",
        className,
      )}
    >
      <div
        className={cn(
          "relative size-60 shrink-0 place-self-center transition group-hover:scale-105 group-hover:shadow-xl sm:place-self-start",
          type === "compact" && "size-37.5",
        )}
      >
        <Image
          src="/sample/articles/image-1.png"
          alt="Featured Blog"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <article
        className={cn(
          "border-foreground flex w-full flex-col gap-8 pr-4 lg:gap-0",
          type === "compact" && "my-auto h-fit gap-4",
        )}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold capitalize">Sample Title</h2>
          {type === "regular" && (
            <p className="line-clamp-4 text-sm font-light md:text-base">
              Sample description for the article. This is just a placeholder
              text to demonstrate how the description will look like in the
              regular type of magazine article. It should be concise and
              informative, giving readers an idea of what the article is about
              without revealing too much.
            </p>
          )}
        </div>

        <section className="mt-auto flex justify-between">
          <List size="sm" />

          {type === "regular" && (
            <Label
              label="Art"
              className="group-hover:bg-foreground group-hover:text-background"
            />
          )}
        </section>
      </article>
    </Link>
  );
}

export default React.memo(Magazine);
