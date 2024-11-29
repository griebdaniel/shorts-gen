"use client";

import type { Style } from "@/app/db/schema";
import { signal } from "@preact-signals/safe-react";
import { SelectableImageList } from "@/app/components/my-ui/selectable-image-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";

interface StyleFieldProps {
  styleImages: Style[];
}

export const selectedStyle = signal<null | number>(null);

export function StyleField({ styleImages }: StyleFieldProps) {
  return (
    <FormField label="Style">
      <AutoPick>
        <SelectableImageList
          items={styleImages}
          imageUrl={(style) => style.imageUrl}
          imageDescription={(style) => style.name}
          selectedId={selectedStyle.value}
          onSelect={(id) => (selectedStyle.value = id)}
          gridCols={4}
          maxDisplayed={8}
        />
      </AutoPick>
    </FormField>
  );
}
