import Label from "@/components/globals/label";

function Filter() {
  return (
    <section className="mt-8 flex items-center justify-between">
      <span className="font-bold uppercase">Categories</span>
      <div className="flex items-center gap-3">
        <Label label="All" />
        <Label label="Art" />
        <Label label="Street Art" />
        <Label label="Sculptures" />
      </div>
    </section>
  );
}

export default Filter;
