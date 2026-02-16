import { cn } from "@/lib/utils";

function Button({
  children,
  className,
  type = "button",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "secondary";
}) {
  return (
    <button
      className={cn(
        "grid h-[50px] shrink-0 place-items-center px-6 text-sm uppercase transition hover:shadow-xl",
        variant === "secondary"
          ? "bg-background text-foreground hover:bg-background/90"
          : "bg-foreground text-background hover:bg-foreground/90",
        className,
      )}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
