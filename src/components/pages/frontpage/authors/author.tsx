import Image from "next/image";

function Author() {
  return (
    <div className="border-foreground flex items-center gap-10 border p-8">
      <div className="relative aspect-square w-[150px]">
        <Image
          src={`/sample/authors/author-1.png`}
          alt={`Author`}
          fill
          className="object-contain"
        />
      </div>
      <article className="space-y-4">
        <h4 className="text-3xl font-bold">Louise Jensen</h4>
        <ul className="flex gap-8">
          <li className="text-sm">
            <span className="font-semibold">Job</span>&nbsp; Artist
          </li>
          <li className="text-sm">
            <span className="font-semibold">City</span>&nbsp; Berlin
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Author;
