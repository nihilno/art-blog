import { format } from "date-fns";
import Image from "next/image";
import { FaApple, FaSpotify } from "react-icons/fa";
import { RiSoundcloudLine } from "react-icons/ri";

import { RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

function PodcastData() {
  return (
    <section className="h-full w-[350px]">
      <div className="relative aspect-square">
        <Image src="/sample/podcasts/podcast-1.png" alt="Podcast 1" fill />
      </div>

      <div className="border-foreground flex items-center justify-between border-b pt-8 pb-12">
        <h5 className="text-lg">Listen On</h5>
        <div className="flex items-center gap-3">
          <FaSpotify className="size-6" />
          <FaApple className="size-6" />
          <RiSoundcloudLine className="size-6" />
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <p className="flex items-center justify-between gap-2">
          <span className="font-bold">Date</span>
          {format(new Date(), "MMMM dd, yyyy")}
        </p>
        <p className="flex items-center justify-between gap-2">
          <span className="font-bold">Duration</span>
          45 Min
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold">Share</span>
          <div className="flex items-center gap-2">
            <RiInstagramFill className="size-5" />
            <RiTwitterFill className="size-5" />
            <RiYoutubeFill className="size-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PodcastData;
