import GoBack from "@/components/pages/go-back";
import Latest from "@/components/pages/latest";
import MagazineProfileWrapper from "@/components/pages/magazines/magazine-profile-wrapper";
import { Suspense } from "react";

export default async function MagazinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <section className="space-y-24">
      <GoBack label="Magazine" />
      <Suspense fallback={<div>Loading...</div>}>
        <MagazineProfileWrapper params={params} />
      </Suspense>
      <Latest label="Latest Posts" type="magazine" href="/magazines" />
    </section>
  );
}
