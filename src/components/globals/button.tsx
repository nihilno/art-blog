import { cn } from "@/lib/utils";

function Button({
  children,
  className,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className={cn(
        "bg-foreground text-background grid h-[50px] place-items-center px-6 text-sm uppercase",
        className,
      )}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
