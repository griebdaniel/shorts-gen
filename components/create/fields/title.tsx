import { Input } from "@/components/ui/input";
import { useTitle } from "@/components/create/state";
import { FieldLabel } from "@/components/create/fields/field-label";

export function TitleField() {
  const [title, setTitle] = useTitle();

  return (
    <div className="space-y-2">
      <FieldLabel htmlFor="title">Title</FieldLabel>
      <Input
        id="title"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
