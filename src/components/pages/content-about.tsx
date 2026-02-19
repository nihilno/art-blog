import { ImQuotesLeft } from "react-icons/im";

function ContentAbout({ type }: ContentType) {
  return (
    <section>
      {type === "podcast" && (
        <p className="font-bold uppercase">Episode {"01"}</p>
      )}
      <div className="mt-4">
        {type === "podcast" && (
          <h1 className="max-w-[15ch] text-4xl font-extrabold tracking-wide sm:text-6xl md:text-8xl">
            Save the world from ourselves!
          </h1>
        )}
        <article className="mt-8 space-y-8">
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium eveniet ducimus ipsam. Asperiores minima nostrum
            inventore ad, libero assumenda laboriosam aspernatur delectus
            quibusdam minus sunt quas consequuntur ab odit veritatis et fuga,
            tempora ratione maxime omnis sit suscipit exercitationem qui.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quaerat voluptatem cum placeat ipsum iste necessitatibus magnam,
            rem, sint inventore quae reprehenderit, ipsam maiores eos minus id
            voluptas aperiam ullam nisi iure nam reiciendis. Quo, tempore,
            cupiditate alias incidunt molestias nihil qui recusandae possimus ut
            consequatur numquam ipsum unde accusamus eligendi, sint ullam soluta
            libero inventore exercitationem saepe? Aliquam, iure! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Commodi dicta tenetur
            similique ducimus, iusto repudiandae obcaecati tempore dolor impedit
            aut?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti ipsum beatae mollitia natus perferendis, perspiciatis eius
            saepe sed molestias illum?
          </p>

          <blockquote className="border-foreground grid grid-cols-[min-content_1fr] gap-x-8 border-t border-b py-12 leading-16">
            <ImQuotesLeft className="size-8 md:size-12" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold normal-case sm:text-3xl md:text-5xl">
                The greatest glory in living lies not in never falling, but in
                rising every time we fall.
              </h2>
              <p>Nelson Mandela</p>
            </div>
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quaerat voluptatem cum placeat ipsum iste necessitatibus magnam,
            rem, sint inventore quae reprehenderit, ipsam maiores eos minus id
            voluptas aperiam ullam nisi iure nam reiciendis. Quo, tempore,
            cupiditate alias incidunt molestias nihil qui recusandae possimus ut
            consequatur numquam ipsum unde accusamus eligendi, sint ullam soluta
            libero inventore exercitationem saepe? Aliquam, iure! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Commodi dicta tenetur
            similique ducimus, iusto repudiandae obcaecati tempore dolor impedit
            aut?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti ipsum beatae mollitia natus perferendis, perspiciatis eius
            saepe sed molestias illum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quaerat voluptatem cum placeat ipsum iste necessitatibus magnam,
            rem, sint inventore quae reprehenderit, ipsam maiores eos minus id
            voluptas aperiam ullam nisi iure nam reiciendis. Quo, tempore,
            cupiditate alias incidunt molestias nihil qui recusandae possimus ut
            consequatur numquam ipsum unde accusamus eligendi, sint ullam soluta
            libero inventore exercitationem saepe? Aliquam, iure! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Commodi dicta tenetur
            similique ducimus, iusto repudiandae obcaecati tempore dolor impedit
            aut?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti ipsum beatae mollitia natus perferendis, perspiciatis eius
            saepe sed molestias illum?
          </p>
        </article>
      </div>
    </section>
  );
}

export default ContentAbout;
