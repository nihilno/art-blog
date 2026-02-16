import { format } from "date-fns";
import Image from "next/image";
import React from "react";

function Podcast({ index }: { index: number }) {
  return (
    <div className="border-foreground space-y-8 p-10">
      <div className="relative aspect-square">
        <Image
          src={`/sample/podcasts/podcast-${index + 1}.png`}
          alt={`Podcast ${index + 1}`}
          fill
          className="object-contain"
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
    </div>
  );
}

export default React.memo(Podcast);
