import { cn } from "@/lib/utils";

function Label({ label, className }: LabelProps) {
  return (
    <span
      className={cn(
        "border-foreground hover:bg-foreground hover:text-background fast grid h-8 w-fit shrink-0 cursor-default place-items-center rounded-full border px-2 text-sm text-nowrap uppercase hover:shadow-xl",
        className,
      )}
    >
      {label}
    </span>
  );
}

export default Label;
