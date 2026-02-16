import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Author({ index }: { index: number }) {
  const isLast = index === 5;

  return (
    <Link
      href="/authors/1"
      className={cn(
        "border-foreground group relative flex items-center space-x-16 transition hover:translate-x-2",
        !isLast && "border-b pb-12",
      )}
    >
      <div className="relative size-[150px] shrink-0">
        <Image
          src="/sample/authors/author-1.png"
          alt="Featured Blog"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <article className="flex w-full items-center justify-between">
        <h2 className="line-clamp-2 max-w-[22ch] text-3xl font-bold capitalize">
          Lorem, ipsum.
        </h2>

        <section className="flex justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <span className="mr-1.5 font-bold">Job</span> Artist
            </li>
            <li>
              <span className="mr-1.5 font-bold">City</span> Berlin
            </li>
            <span className="group flex w-fit items-center gap-2 font-bold uppercase">
              <span className="tracking-wider group-hover:underline">
                About
              </span>
              &nbsp;
              <ArrowRight className="size-5 transition group-hover:translate-x-4" />
            </span>
          </ul>
        </section>
      </article>
    </Link>
  );
}

export default Author;
