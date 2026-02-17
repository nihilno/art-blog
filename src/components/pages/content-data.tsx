import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import { FaApple, FaSpotify } from "react-icons/fa";
import { RiSoundcloudLine } from "react-icons/ri";

import { RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

function ContentData({ type }: { type: "magazine" | "podcast" }) {
  return (
    <section>
      <div
        className={cn(
          type === "magazine" &&
            "border-foreground flex items-center gap-4 border-b pb-8",
        )}
      >
        <div
          className={cn(
            "relative aspect-square",
            type === "podcast" ? "sm:w-[350px]" : "w-20",
          )}
        >
          <Image
            src="/sample/podcasts/podcast-1.png"
            alt="Podcast 1"
            fill
            className={cn(type === "magazine" && "rounded-full")}
          />
        </div>
        {type === "magazine" && (
          <h3 className="max-w-[10ch] text-3xl font-bold normal-case">
            Jokob Gronberg
          </h3>
        )}
      </div>

      {type === "podcast" && (
        <div className="border-foreground flex items-center justify-between border-b pt-8 pb-12">
          <h5 className="text-lg">Listen On</h5>
          <div className="flex items-center gap-3">
            <FaSpotify
              className="size-6 cursor-pointer"
              aria-label="Listen on Spotify"
            />
            <FaApple
              className="size-6 cursor-pointer"
              aria-label="Listen on Apple Podcasts"
            />
            <RiSoundcloudLine
              className="size-6 cursor-pointer"
              aria-label="Listen on SoundCloud"
            />
          </div>
        </div>
      )}

      <div className="mt-8 space-y-5">
        <p className="flex items-center justify-between gap-2">
          <span className="font-bold">Date</span>
          {format(new Date(), "MMMM dd, yyyy")}
        </p>
        <p className="flex items-center justify-between gap-2">
          <span className="font-bold">
            {type === "podcast" ? "Duration" : "Read"}
          </span>
          45 Min
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold">Share</span>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Share on Instagram">
              <RiInstagramFill className="size-5" />
            </button>
            <button type="button" aria-label="Share on Twitter">
              <RiTwitterFill className="size-5" />
            </button>
            <button type="button" aria-label="Share on YouTube">
              <RiYoutubeFill className="size-5" />
            </button>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default ContentData;
