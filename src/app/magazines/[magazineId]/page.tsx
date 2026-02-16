import GoBack from "@/components/pages/go-back";
import Latest from "@/components/pages/latest";

export default function MagazinePage() {
  return (
    <section className="space-y-24">
      <GoBack label="Magazine" />
      <div>placeholder</div>
      {/* <MagazineProfile /> */}
      <Latest label="Latest Posts" type="magazine" href="/magazines" />
    </section>
  );
}
