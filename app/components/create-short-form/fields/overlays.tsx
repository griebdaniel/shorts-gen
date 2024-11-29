"use client";

import type { Overlay } from "@/app/db/schema";
import { signal } from "@preact-signals/safe-react";
import { SelectableImageList } from "@/app/components/my-ui/selectable-image-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";

interface OverlaysFieldProps {
  overlayImages: Overlay[];
}

export const selectedOverlay = signal<null | number>(null);

export function OverlaysField({ overlayImages }: OverlaysFieldProps) {
  return (
    <FormField label="Overlays">
      <AutoPick>
        <SelectableImageList
          items={overlayImages}
          imageUrl={(overlay) => overlay.imageUrl}
          imageDescription={(overlay) => overlay.name}
          selectedId={selectedOverlay.value}
          onSelect={(id) => (selectedOverlay.value = id)}
          gridCols={4}
          maxDisplayed={8}
        />
      </AutoPick>
    </FormField>
  );
}
