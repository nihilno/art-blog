import List from "@/components/globals/list";
import { Author as AuthorType } from "@/generated/prisma/client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Author({ author }: { author: AuthorType }) {
  const { imageUrl, name, occupation, city, slug } = author;
  const listDetails = { occupation, city };

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

export default Author;
