"use client";

import type { Style } from "@/app/db/schema";
import { SelectableImageList } from "@/app/components/ui-elements/selectable-image-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

interface StyleFieldProps {
  styleImages: Style[];
}

export function StyleField({ styleImages }: StyleFieldProps) {
  const form = useFormContext();

  return (
    <FormField label="Style">
      <form.Field name="style">
        {(field) => (
          <AutoPick>
            <SelectableImageList
              items={styleImages}
              imageUrl={(style) => style.imageUrl}
              imageDescription={(style) => style.name}
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
