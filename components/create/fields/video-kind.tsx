import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useVideoKind, useVideoKinds } from "@/components/create/state";
import { FieldLabel } from "@/components/create/fields/field-label";

export function VideoKindField() {
  const [videoKind, setVideoKind] = useVideoKind();
  const options = useVideoKinds();

  return (
    <div className="space-y-2">
      <FieldLabel htmlFor="video-kind">Video Kind</FieldLabel>
      <Select value={videoKind} onValueChange={setVideoKind}>
        <SelectTrigger id="video-kind">
          <SelectValue placeholder={"Select a video kind"} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
