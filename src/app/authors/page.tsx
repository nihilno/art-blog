import Title from "@/components/globals/title";
import Authors from "@/components/pages/authors/authors";
import { Suspense } from "react";

export default function AuthorPage() {
  return (
    <section>
      <Title label="Authors" />
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Authors type="all" />
      </Suspense>
    </section>
  );
}
