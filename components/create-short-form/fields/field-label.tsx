"use client";

interface FieldLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

export function FieldLabel({ children }: FieldLabelProps) {
  return (
    <div className="text-sm font-semibold text-foreground">{children}</div>
  );
}
