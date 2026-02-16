import Label from "@/components/globals/label";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

function Article({
  className,
  isLast = false,
  type = "regular",
}: {
  className?: string;
  isLast?: boolean;
  type?: "regular" | "compact";
}) {
  return (
    <section
      className={cn(
        "border-foreground relative flex space-x-16",
        type === "regular" && !isLast && "border-b pb-12",
        type === "compact" && "border p-6",
        className,
      )}
    >
      <div
        className={cn(
          "relative size-60 shrink-0",
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
          <ul className="flex items-center gap-8">
            {type === "regular" && (
              <li>
                <span className="mr-1.5 font-bold">Text</span> Jakob Polowy
              </li>
            )}
            <li>
              <span className="mr-1.5 font-bold">Date</span>{" "}
              {format(new Date(), "d. MMMM yyyy")}
            </li>

            <li>
              <span className="mr-1.5 font-bold">Read</span> 1 Min
            </li>
          </ul>

          {type === "regular" && <Label label="Art" />}
        </section>
      </article>
    </section>
  );
}

export default React.memo(Article);
