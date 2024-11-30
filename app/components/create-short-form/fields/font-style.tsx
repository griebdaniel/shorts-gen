"use client";

import { SelectableFontImageList } from "@/app/components/ui-elements/selectable-font-image-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";
import type { FontStyle } from "@/app/db/schema";

interface FontStyleFieldProps {
  fontStyles: FontStyle[];
}

export function FontStyleField({ fontStyles }: FontStyleFieldProps) {
  const form = useFormContext();

  return (
    <FormField label="Font Style">
      <form.Field name="fontStyle">
        {(field) => (
          <AutoPick>
            <SelectableFontImageList
              items={fontStyles}
              fontFamily={(font) => font.fontFamily}
              fontWeight={(font) => font.fontWeight}
              sampleText={(font) => font.sampleText}
              description={(font) => font.name}
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
