import { cn } from "@/lib/utils";

function MostPopular() {
  return (
    <section className="mt-12">
      <h4 className="uppercase">Most Popular</h4>
      <ul className="mt-6 space-y-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <PopularItem
            key={index}
            index={index}
            className="not-last:border-foreground not-last:border-b not-last:pb-6"
          />
        ))}
      </ul>
    </section>
  );
}

export default MostPopular;

function PopularItem({
  index,
  className,
}: {
  index: number;
  className: string;
}) {
  return (
    <li className={cn("grid grid-cols-[1fr_10fr] gap-8", className)}>
      <span className="text-lg font-bold">
        {index < 9 ? `0${index + 1}` : index + 1}
      </span>
      <div className="space-y-2">
        <h4 className="text-lg">Street art festival</h4>
        <p className="text-sm">
          <span className="mr-1.5 font-bold">Text</span> Maciej Polowy
        </p>
      </div>
    </li>
  );
}
