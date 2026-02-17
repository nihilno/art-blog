import Label from "@/components/globals/label";
import LinkBtn from "@/components/globals/link";
import List from "@/components/globals/list";
import Image from "next/image";

function HeroArticle() {
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
            <List />
            <Label label="Art" />
          </section>
          <LinkBtn href={`/magazines/${1}`}>Read More</LinkBtn>
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

export default HeroArticle;
