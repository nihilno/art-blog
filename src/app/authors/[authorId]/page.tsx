import AuthorArticles from "@/components/pages/authors/author-articles";
import AuthorProfile from "@/components/pages/authors/author-profile";
import GoBack from "@/components/pages/go-back";

async function Page({ params }: { params: Promise<{ authorId: string }> }) {
  //   const { authorId } = await params;

  return (
    <section className="space-y-24">
      <GoBack label="Author" />
      <AuthorProfile />
      <AuthorArticles />
    </section>
  );
}

export default Page;
