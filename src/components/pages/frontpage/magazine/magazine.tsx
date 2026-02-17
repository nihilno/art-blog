import Label from "@/components/globals/label";
import List from "@/components/globals/list";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Magazine({
  className,
  isLast = false,
  type = "regular",
}: {
  className?: string;
  isLast?: boolean;
  type?: "regular" | "compact";
}) {
  return (
    <Link
      href={`/magazines/1`}
      className={cn(
        "border-foreground group relative flex space-x-16 transition hover:-translate-1",
        type === "regular" && !isLast && "border-b pb-12",
        type === "compact" && "border p-6",
        className,
      )}
    >
      <div
        className={cn(
          "relative size-60 shrink-0 transition group-hover:scale-105 group-hover:shadow-xl",
          type === "compact" && "size-37.5",
        )}
      >
        <Image
          src="/sample/featured-blog.png"
          alt="Featured Blog"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <article
        className={cn(
          "border-foreground flex flex-col pr-4",
          type === "compact" && "my-auto h-fit gap-4",
        )}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold capitalize">
            Don&apos;t close your eyes
          </h2>
          {type === "regular" && (
            <p className="line-clamp-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              corporis animi, sapiente minima aperiam magni enim dolores veniam,
              sunt nostrum esse reiciendis porro minus voluptatibus, maiores
              autem sit tempore odit.
            </p>
          )}
        </div>

        <section className="mt-auto flex justify-between">
          <List />

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
