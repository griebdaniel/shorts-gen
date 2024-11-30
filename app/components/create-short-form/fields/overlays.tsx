"use client";

import type { Overlay } from "@/app/db/schema";
import { SelectableImageList } from "@/app/components/ui-elements/selectable-image-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

interface OverlaysFieldProps {
  overlayImages: Overlay[];
}

export function OverlaysField({ overlayImages }: OverlaysFieldProps) {
  const form = useFormContext();

  return (
    <FormField label="Overlays">
      <form.Field name="overlay">
        {(field) => (
          <AutoPick>
            <SelectableImageList
              items={overlayImages}
              imageUrl={(overlay) => overlay.imageUrl}
              imageDescription={(overlay) => overlay.name}
              selectedId={field.state.value}
              onSelect={(id) => field.handleChange(id)}
              gridCols={4}
              maxDisplayed={8}
            />
          </AutoPick>
        )}
      </form.Field>
    </FormField>
  );
}
