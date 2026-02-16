function Title({ label, wrapper }: { label: string; wrapper?: boolean }) {
  return (
    <article>
      <h1 className="text-center text-[12vw] leading-[14vw] font-extrabold whitespace-nowrap select-none">
        {label}
      </h1>

      {wrapper && (
        <div className="bg-foreground text-background flex items-center gap-6 p-4">
          <h4 className="shrink-0 text-lg uppercase">News Ticker+++</h4>
          <p className="shrink-0 opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit +++
          </p>
          <p className="shrink-0 opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit +++
          </p>
          <p className="shrink-0 opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit +++
          </p>
        </div>
      )}
    </article>
  );
}

export default Title;
