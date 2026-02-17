function Wrapper() {
  return (
    <div className="bg-foreground text-background flex items-center justify-center gap-6 overflow-hidden border-b border-dashed p-4 select-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="shrink-0 text-sm uppercase md:text-base">
          Newsletter+++
        </span>
      ))}
    </div>
  );
}

export default Wrapper;
