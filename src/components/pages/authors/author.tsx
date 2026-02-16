import LinkBtn from "@/components/globals/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Author({ index }: { index: number }) {
  const isLast = index === 5;

  return (
    <section
      className={cn(
        "border-foreground relative flex items-center space-x-16",
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
            <LinkBtn href="/">About</LinkBtn>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default Author;
