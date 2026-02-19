import MagazineProfile from "./magazine-profile";

async function MagazineProfileWrapper({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) return <div>Empty</div>;

  return <MagazineProfile slug={slug} />;
}

export default MagazineProfileWrapper;
