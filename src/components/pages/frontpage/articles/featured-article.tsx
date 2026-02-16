import Label from "@/components/globals/label";
import LinkBtn from "@/components/globals/link";
import { format } from "date-fns";
import Image from "next/image";

function FeaturedArticle() {
  return (
    <section className="space-y-8">
      <article className="mt-16 grid grid-cols-1 gap-2 md:grid-cols-2">
        <h2 className="text-[5vw] leading-none font-bold uppercase">
          Don&apos;t close your eyes
        </h2>
        <div className="flex flex-col justify-between gap-2">
          {/* blog description */}
          <p className="line-clamp-4 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            corporis animi, sapiente minima aperiam magni enim dolores veniam,
            sunt nostrum esse reiciendis porro minus voluptatibus, maiores autem
            sit tempore odit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Necessitatibus vitae quibusdam ducimus. Quasi quo
            necessitatibus, nesciunt odio est error ducimus? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Asperiores, perspiciatis
            quos. Expedita reiciendis rerum similique. Saepe ea laudantium eos?
            Non.
          </p>

          <section className="mt-auto flex justify-between">
            <ul className="flex items-center gap-8">
              <li>
                <span className="mr-1.5 font-bold">Text</span> Jakob Polowy
              </li>
              <li>
                <span className="mr-1.5 font-bold">Date</span>{" "}
                {format(new Date(), "d. MMMM yyyy")}
              </li>

              <li>
                <span className="mr-1.5 font-bold">Duration</span> 1 Min
              </li>
            </ul>

            <Label label="Art" />
          </section>
          <LinkBtn href="#">Read More</LinkBtn>
        </div>
      </article>

      <div className="relative aspect-video">
        <Image
          src="/sample/featured-blog.png"
          alt="Featured Blog"
          fill
          className="object-contain"
          priority={true}
        />
      </div>
    </section>
  );
}

export default FeaturedArticle;
