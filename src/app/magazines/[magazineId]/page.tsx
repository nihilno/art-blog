import GoBack from "@/components/pages/go-back";
import Latest from "@/components/pages/latest";
import MagazineProfile from "@/components/pages/magazines/magazine-profile";

export default function MagazinePage() {
  return (
    <section className="space-y-24">
      <GoBack label="Magazine" />
      <MagazineProfile />
      <Latest label="Latest Posts" type="magazine" href="/magazines" />
    </section>
  );
}
