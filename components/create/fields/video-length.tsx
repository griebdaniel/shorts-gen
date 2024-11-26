import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useVideoLength } from "@/components/create/state";
import { FieldLabel } from "@/components/create/fields/field-label";

export function VideoLengthField() {
  const [videoLength, setVideoLength] = useVideoLength();

  return (
    <div className="space-y-2">
      <FieldLabel htmlFor="video-length">Video Length</FieldLabel>
      <RadioGroup
        value={String(videoLength)}
        onValueChange={(value) => setVideoLength(Number(value))}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="60" id="lt-1min" />
          <Label htmlFor="lt-1min">Less than 1 minute</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="120" id="lt-2min" />
          <Label htmlFor="lt-2min">Less than 2 minutes</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
