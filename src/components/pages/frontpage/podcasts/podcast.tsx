import List from "@/components/globals/list";
import { Post } from "@/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Podcast({ podcast }: { podcast: Post }) {
  const {
    slug = "test",
    imageUrl,
    title,
    createdAt,
    durationInMinutes,
  } = podcast;
  const listDetails = { createdAt, durationInMinutes };

  return (
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
