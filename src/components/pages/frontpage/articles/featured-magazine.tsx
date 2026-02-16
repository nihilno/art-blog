import Button from "@/components/globals/button";
import { format } from "date-fns";
import Image from "next/image";
import MostPopular from "./most-popular";
import Newsletter from "./newsletter";

function FeaturedMagazine() {
  return (
    <aside className="space-y-8">
      <>
        <span className="font-bold uppercase">Printmagazine</span>
        <h3 className="mt-2.5 text-4xl font-bold">
          {format(new Date(), "MM/yyyy")}
        </h3>
      </>
      <div className="space-y-4">
        <Image
          src="/sample/featured-magazine.png"
          alt="Featured Magazine"
          width={300}
          height={400}
        />
        <Button>Check</Button>
      </div>

      <MostPopular />
      <Newsletter />
    </aside>
  );
}

export default FeaturedMagazine;
