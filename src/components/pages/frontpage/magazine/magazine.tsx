import Label from "@/components/globals/label";
import List from "@/components/globals/list";
import { Post } from "@/generated/prisma/client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Article({
  article,
  className,
  type = "regular",
}: {
  article: Post & { author: { name: string } };
  className?: string;
  type?: "regular" | "compact";
}) {
  const {
    slug,
    imageUrl,
    title,
    description,
    label,
    author: { name },
    createdAt,
    durationInMinutes,
  } = article;

  const listDetails = { name, createdAt, durationInMinutes };

  return (
    <Link
      href={`/magazines/${slug}`}
      className={cn(
        "border-foreground group relative flex flex-col gap-16 transition hover:-translate-1 lg:flex-row",
        type === "regular" && "border-b pb-12",
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
          src={imageUrl}
          alt="Featured Blog"
          fill
          className="object-cover"
          quality={50}
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
          <h2 className="text-3xl font-bold capitalize">{title}</h2>
          {type === "regular" && (
            <p className="line-clamp-4 text-sm font-light md:text-base">
              {description}
            </p>
          )}
        </div>

        <section className="mt-auto flex justify-between">
          <List size="sm" details={listDetails} />

          {type === "regular" && (
            <Label
              label={label}
              className="group-hover:bg-foreground group-hover:text-background"
            />
          )}
        </section>
      </article>
    </Link>
  );
}

export default React.memo(Article);
