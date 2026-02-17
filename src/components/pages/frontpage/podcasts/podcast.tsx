import List from "@/components/globals/list";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Podcast({ index }: { index: number }) {
  return (
    <Link
      href={`/podcasts/${index + 1}`}
      className="border-foreground group cursor-pointer space-y-8 border p-10 transition hover:-translate-y-4"
    >
      <div className="relative aspect-square">
        <Image
          src={`/sample/podcasts/podcast-${index + 1}.png`}
          alt={`Podcast ${index + 1}`}
          fill
          className="object-contain transition group-hover:scale-102 group-hover:shadow-xl group-hover:brightness-110 group-hover:contrast-110"
        />
      </div>
      <h4 className="text-3xl font-bold">
        The Problem of today&apos;s cultural development
      </h4>
      <List type="podcast" size="sm" />
    </Link>
  );
}

export default React.memo(Podcast);
