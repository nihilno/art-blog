import Label from "@/components/globals/label";
import List from "@/components/globals/list";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Magazine({ article }: { article: PostWithAuthor }) {
  const {
    title,
    slug,
    imageUrl,
    label,
    createdAt,
    author: { name },
    durationInMinutes,
    description,
  } = article;

  const listDetails = { name, durationInMinutes };

  return (
    <Link
      href={`/magazines/${slug}`}
      className="border-foreground group flex flex-col items-center border px-10 pb-12 transition hover:-translate-y-4"
    >
      <div className="flex w-full items-center justify-between gap-1 py-10">
        {/* <p>{format(new Date(createdAt), "d. MMMM yyyy")}</p> */}
        2025
        <Label
          label={label}
          className="group-hover:bg-foreground group-hover:text-background"
        />
      </div>

      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={400}
        className="aspect-square w-full border object-cover transition group-hover:scale-102 group-hover:shadow-xl group-hover:brightness-110 group-hover:contrast-110"
        priority={true}
      />
      <article className="mt-8 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold capitalize">{title}</h2>
          <p className="line-clamp-5 font-light">{description}</p>
        </div>

        <section className="flex justify-between">
          <List size="sm" compact={true} details={listDetails} />
        </section>
      </article>
    </Link>
  );
}

export default React.memo(Magazine);
