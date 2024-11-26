import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useOverlays, useOverlaysAutoPick } from "@/components/create/state";
import { FieldLabel } from "@/components/create/fields/field-label";

export function OverlaysField() {
  const [overlays, setOverlays] = useOverlays();
  const [autoPick, setAutoPick] = useOverlaysAutoPick();

  return (
    <div className="space-y-4">
      <FieldLabel htmlFor="overlays">Overlays</FieldLabel>

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
          id="overlays"
          placeholder="Configure overlays"
          value={overlays}
          onChange={(e) => setOverlays(e.target.value)}
          disabled={autoPick}
        />
      )}
    </div>
  );
}
