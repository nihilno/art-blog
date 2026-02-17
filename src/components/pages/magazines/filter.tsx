import Label from "@/components/globals/label";

function Filter() {
  return (
    <section className="flex flex-col justify-between gap-2 md:mt-8 md:flex-row md:items-center">
      <span className="font-bold uppercase">Categories</span>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <Label label="All" />
        <Label label="Art" />
        <Label label="Street Art" />
        <Label label="Sculptures" />
      </div>
    </section>
  );
}

export default Filter;
