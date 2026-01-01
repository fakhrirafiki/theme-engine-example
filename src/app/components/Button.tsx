import { ReactNode } from "react";

export default function Button({
  children,
  onClick,
  pressed = false,
  variant = "outline",
}: {
  children: ReactNode;
  onClick: () => void;
  pressed?: boolean;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const className =
    variant === "solid"
      ? `${base} bg-primary text-primary-foreground hover:opacity-90`
      : `${base} border border-border bg-background text-foreground hover:bg-accent ${pressed ? "bg-accent" : ""}`;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
