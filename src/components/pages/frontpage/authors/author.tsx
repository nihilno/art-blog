import List from "@/components/globals/list";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Author() {
  return (
    <Link
      href="/authors/1"
      className="border-foreground hover:bg-foreground/5 group relative flex items-center gap-10 border p-2 transition md:p-8"
    >
      <div className="relative aspect-square w-25 md:w-[150px]">
        <Image
          src={`/sample/authors/author-1.png`}
          alt="Louise Jensen"
          fill
          className="object-contain"
        />
      </div>
      <article className="space-y-4">
        <h4 className="text-2xl font-bold md:text-3xl">Louise Jensen</h4>
        <List type="author" />
      </article>
      <ArrowUpRight className="absolute right-8 bottom-8 size-8! transition group-hover:size-12! group-hover:translate-x-4" />
    </Link>
  );
}

export default Author;
