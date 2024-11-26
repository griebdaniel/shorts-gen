import { Label } from "@/components/ui/label";

interface FieldLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

export function FieldLabel({ htmlFor, children }: FieldLabelProps) {
  return (
    <Label htmlFor={htmlFor} className="text-sm font-semibold text-foreground">
      {children}
    </Label>
  );
}
