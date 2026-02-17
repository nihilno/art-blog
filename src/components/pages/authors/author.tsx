import List from "@/components/globals/list";
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
      <div className="relative size-15 shrink-0 md:size-[150px]">
        <Image
          src="/sample/authors/author-1.png"
          alt="Featured Blog"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <article className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
        <h2 className="line-clamp-2 max-w-[22ch] text-2xl font-bold capitalize md:text-3xl">
          Lorem, ipsum.
        </h2>

        <section className="flex justify-between gap-8">
          <List type="author" />
          <span className="flex hidden w-fit items-center gap-2 font-bold uppercase md:block">
            <span className="tracking-wider group-hover:underline">About</span>
            &nbsp;
            <ArrowRight className="size-5 transition group-hover:translate-x-4" />
          </span>
        </section>
      </article>
    </Link>
  );
}

export default Author;
