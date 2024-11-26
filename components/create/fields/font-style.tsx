import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useFontStyle, useFontStyleAutoPick } from "@/components/create/state";
import { FieldLabel } from "@/components/create/fields/field-label";

export function FontStyleField() {
  const [fontStyle, setFontStyle] = useFontStyle();
  const [autoPick, setAutoPick] = useFontStyleAutoPick();

  return (
    <div className="space-y-4">
      <FieldLabel htmlFor="font-style">Font Style</FieldLabel>
      <div className="flex items-center gap-2 mb-2">
        <Switch
          id="auto-pick"
          checked={autoPick}
          onCheckedChange={setAutoPick}
        />
        <Label htmlFor="auto-pick" className="text-sm">
          Auto pick based on script, title and video kind
        </Label>
      </div>

      {!autoPick && (
        <Input
          id="font-style"
          placeholder="Select font style"
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
          disabled={autoPick}
        />
      )}
    </div>
  );
}
