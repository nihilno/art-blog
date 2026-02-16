import Label from "@/components/globals/label";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

function Magazine() {
  return (
    <section className="border-foreground flex flex-col items-center border px-10 pb-12">
      <div className="flex w-full items-center justify-between gap-1 py-10">
        <p>{format(new Date(), "d. MMMM yyyy")}</p>
        <Label label="Art" />
      </div>

      <Image
        src="/sample/featured-blog.png"
        alt="Featured Blog"
        width={400}
        height={400}
        className="aspect-square w-full border object-cover"
        priority={true}
      />
      <article className="mt-8 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold capitalize">
            Don&apos;t close your eyes
          </h2>
          <p className="line-clamp-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            corporis animi, sapiente minima aperiam magni enim dolores veniam,
            sunt nostrum esse reiciendis porro minus voluptatibus, maiores autem
            sit tempore odit.
          </p>
        </div>

        <section className="flex justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <span className="mr-1.5 font-bold">Text</span> Jakob Polowy
            </li>
            <li>
              <span className="mr-1.5 font-bold">Duration</span> 1 Min
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default React.memo(Magazine);
