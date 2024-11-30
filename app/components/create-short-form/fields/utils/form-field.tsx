import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, children, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="text-sm font-semibold text-foreground">{label}</div>
      {children}
    </div>
  );
}
