function Title({ label, wrapper }: { label: string; wrapper?: boolean }) {
  return (
    <article>
      <h1 className="text-center text-5xl leading-32 font-extrabold whitespace-nowrap select-none sm:text-[12vw] sm:leading-[14vw]">
        {label}
      </h1>

      {wrapper && (
        <div className="bg-foreground text-background flex items-center gap-2 p-4 text-sm sm:gap-6 sm:text-base">
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
