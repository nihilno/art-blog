function Label({ label }: { label: string }) {
  return (
    <span className="border-foreground hover:bg-foreground hover:text-background grid h-8 w-fit cursor-default place-items-center rounded-full border px-2 text-sm uppercase transition">
      {label}
    </span>
  );
}

export default Label;
