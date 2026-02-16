import { format } from "date-fns";
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
      <ul className="mt-12 flex gap-8">
        <li className="text-sm">
          <span className="font-semibold">Date</span>&nbsp;
          {format(new Date(), "dd MMMM yyyy")}
        </li>
        <li className="text-sm">
          <span className="font-semibold">Duration</span>&nbsp; 1h 20 Min
        </li>
      </ul>
    </Link>
  );
}

export default React.memo(Podcast);
