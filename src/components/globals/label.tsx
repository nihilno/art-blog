import { cn } from "@/lib/utils";

function Label({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "border-foreground hover:bg-foreground hover:text-background fast grid h-8 w-fit cursor-default place-items-center rounded-full border px-2 text-sm uppercase hover:shadow-xl",
        className,
      )}
    >
      {label}
    </span>
  );
}

export default Label;
