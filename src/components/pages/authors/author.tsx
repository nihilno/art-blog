import List from "@/components/globals/list";
import { Author as AuthorType } from "@/generated/prisma/client";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  author: AuthorType;
  index?: number;
  length?: number;
  type: "latest" | "all";
};

function Author({ author, index, length, type }: Props) {
  const { imageUrl, name, occupation, city, slug } = author;
  const listDetails = { occupation, city };
  const isLast = index === length! - 1;

  if (type === "latest") {
    return (
      <Link
        href={`/authors/${slug}`}
        className="border-foreground hover:bg-foreground/5 group relative flex items-center gap-10 border p-2 transition md:p-8"
      >
        <div className="relative aspect-square w-25 md:w-[150px]">
          <Image src={imageUrl} alt={name} fill className="object-contain" />
        </div>

        <article className="space-y-4">
          <h4 className="text-2xl font-bold md:text-3xl">{name}</h4>
          <List type="author" details={listDetails} />
        </article>

        <ArrowUpRight className="absolute right-8 bottom-8 size-8! transition group-hover:size-12! group-hover:translate-x-4" />
      </Link>
    );
  }

  return (
    <Link
      href={`/authors/${slug}`}
      className={cn(
        "border-foreground group relative flex items-center space-x-16 transition hover:translate-x-2",
        !isLast && "border-b pb-12",
      )}
    >
      <div className="relative size-15 shrink-0 md:size-[150px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
        <h2 className="line-clamp-2 max-w-[22ch] text-2xl font-bold capitalize md:text-3xl">
          {name}
        </h2>

        <section className="flex justify-between gap-8">
          <List type="author" details={listDetails} />

          <span className="hidden w-fit items-center gap-2 font-bold uppercase md:flex">
            <span className="tracking-wider group-hover:underline">About</span>
            <ArrowRight className="size-5 transition group-hover:translate-x-4" />
          </span>
        </section>
      </article>
    </Link>
  );
}

export default Author;
