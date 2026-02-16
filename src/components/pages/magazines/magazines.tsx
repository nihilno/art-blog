import LinkBtn from "@/components/globals/link";
import Magazine from "./magazine";

function Magazines() {
  return (
    <section className="flex flex-col gap-12">
      <div className="mt-16 grid grid-cols-3">
        {Array.from({ length: 15 }).map((_, i) => (
          <Magazine key={i} />
        ))}
      </div>

      <LinkBtn href="#" className="ml-auto">
        Next
      </LinkBtn>
    </section>
  );
}

export default Magazines;
