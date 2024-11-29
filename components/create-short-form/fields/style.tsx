"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { FieldLabel } from "@/components/create-short-form/fields/field-label";
import type { Style } from "@/app/db/schema";
import { signal } from "@preact-signals/safe-react";
import { SelectableImageList } from "@/components/my-ui/selectable-image-list";

interface StyleFieldProps {
  styleImages: Style[];
}

export const selectedStyle = signal<null | number>(null);

export function StyleField({ styleImages }: StyleFieldProps) {
  const [autoPick, setAutoPick] = useState(false);

  return (
    <div className="space-y-4">
      <FieldLabel htmlFor="style">Style</FieldLabel>

      <div className="flex items-center gap-2 mb-2">
        <Switch
          name="auto-pick"
          checked={autoPick}
          onCheckedChange={setAutoPick}
        />
        <Label htmlFor="auto-pick" className="text-sm">
          Auto pick based on script, title and video kind
        </Label>
      </div>

      <SelectableImageList
        items={styleImages}
        imageUrl={(style) => style.imageUrl}
        imageDescription={(style) => style.name}
        selectedId={selectedStyle.value}
        onSelect={(id) => (selectedStyle.value = id)}
        disabled={autoPick}
        gridCols={4}
        maxDisplayed={8}
      />
    </div>
  );
}
