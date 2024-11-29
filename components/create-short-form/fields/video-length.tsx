"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldLabel } from "@/components/create-short-form/fields/field-label";
import { signal } from "@preact-signals/safe-react";

export const videoLength = signal<number>(60);

export function VideoLengthField() {
  return (
    <div className="space-y-2">
      <FieldLabel>Video Length</FieldLabel>
      <RadioGroup
        name="video-length"
        value={String(videoLength.value)}
        onValueChange={(value) => (videoLength.value = Number(value))}
        // orientation="horizontal"
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="60" id="lt-1min" />
          <Label htmlFor="lt-1min">{"< 1 min length"}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="120" id="lt-2min" />
          <Label htmlFor="lt-2min">{"< 2 min length"}</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
