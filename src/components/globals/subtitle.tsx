import LinkBtn from "./link";

function Subtitle({
  title,
  href,
  linkLabel,
}: {
  title: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="my-12 flex items-center justify-between gap-2">
      <h2 className="text-[5vw] leading-none font-bold uppercase">{title}</h2>
      <LinkBtn href={href}>{linkLabel}</LinkBtn>
    </div>
  );
}

export default Subtitle;
