import Title from "@/components/globals/title";
import Authors from "@/components/pages/authors/authors";

export default function AuthorPage() {
  return (
    <section>
      <Title label="Authors" />
      <Authors type="all" />
    </section>
  );
}
