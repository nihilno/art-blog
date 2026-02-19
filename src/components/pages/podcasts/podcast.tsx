import List from "@/components/globals/list";
import { Post } from "@/generated/prisma/client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Podcast({
  type = "latest",
  podcast,
  index,
  length,
}: {
  type: "latest" | "all";
  podcast: Post;
  index: number;
  length: number;
}) {
  const isLast = index === length - 1;
  const { slug, imageUrl, title, createdAt, durationInMinutes } = podcast;
  const listDetails = { createdAt, durationInMinutes };

  return type === "latest" ? (
    <Link
      href={`/podcasts/${slug}`}
      className={cn(
        "border-foreground group relative flex flex-col gap-8 transition hover:-translate-1 lg:flex-row lg:items-center lg:gap-16",
        !isLast && "border-b pb-12",
      )}
    >
      <h4 className="self-start text-xl">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </h4>

      <div className="relative size-60 shrink-0 transition group-hover:scale-105 group-hover:shadow-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <article className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-0">
        <h2 className="line-clamp-2 max-w-[22ch] text-3xl font-bold capitalize">
          {title}
        </h2>

        <section className="space-y-2">
          <List type="podcast" details={listDetails} />
          <span className="flex w-fit items-center gap-2 font-bold uppercase group-hover:underline">
            Listen
            <ArrowRight className="size-5 transition group-hover:translate-x-4" />
          </span>
        </section>
      </article>
    </Link>
  ) : (
    <Link
      href={`/podcasts/${slug}`}
      className="border-foreground group cursor-pointer space-y-8 border p-10 transition hover:-translate-y-4"
    >
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain transition group-hover:scale-102 group-hover:shadow-xl group-hover:brightness-110 group-hover:contrast-110"
        />
      </div>
      <h4 className="text-3xl font-bold">{title}</h4>
      <List type="podcast" size="sm" details={listDetails} />
    </Link>
  );
}

export default React.memo(Podcast);
