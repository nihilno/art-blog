import Article from "@/components/pages/frontpage/magazine/magazine";

function AuthorArticles() {
  return (
    <section className="border-foreground border-t pt-12">
      <h2 className="text-5xl font-bold capitalize">
        Articles by Louise Jensen
      </h2>
      <div className="mt-24 grid grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Article key={index} type="compact" />
        ))}
      </div>
    </section>
  );
}

export default AuthorArticles;
