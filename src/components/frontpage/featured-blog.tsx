import Image from "next/image";
import Label from "./globals/label";

function FeaturedBlog() {
  return (
    <section className="space-y-8">
      <article className="mt-16 grid grid-cols-1 gap-2 md:grid-cols-2">
        {/* blog title */}
        <h2 className="text-[5vw] leading-none font-bold uppercase">
          Don&apos;t close your eyes
        </h2>
        <div className="flex flex-col justify-between">
          {/* blog description */}
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            corporis animi, sapiente minima aperiam magni enim dolores veniam,
            sunt nostrum esse reiciendis porro minus voluptatibus, maiores autem
            sit tempore odit.
          </p>

          <section className="mt-auto flex justify-between pb-4">
            <ul className="flex items-center gap-8">
              {/* blog author */}
              <li>
                <span className="mr-1.5 font-bold">Text</span> Jakob Polowy
              </li>
              {/* blog date */}
              <li>
                <span className="mr-1.5 font-bold">Date</span>{" "}
                {new Date().toLocaleDateString()}
              </li>
              {/* blog button */}
              <li>
                <span className="mr-1.5 font-bold">Button</span>
              </li>
              {/* blog duration */}
              <li>
                <span className="mr-1.5 font-bold">Duration</span> 1Min
              </li>
            </ul>

            {/* blog label */}
            <Label />
          </section>
        </div>
      </article>

      {/* blog image */}
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

export default FeaturedBlog;
