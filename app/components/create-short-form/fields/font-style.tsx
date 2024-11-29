"use client";

import { signal } from "@preact-signals/safe-react";
import { SelectableFontImageList } from "@/app/components/my-ui/selectable-font-image-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";
import type { FontStyle } from "@/app/db/schema";

interface FontStyleFieldProps {
  fontStyles: FontStyle[];
}

export const selectedFontStyle = signal<null | number>(null);

export function FontStyleField({ fontStyles }: FontStyleFieldProps) {
  return (
    <FormField label="Font Style">
      <AutoPick>
        <SelectableFontImageList
          items={fontStyles}
          fontFamily={(font) => font.fontFamily}
          fontWeight={(font) => font.fontWeight}
          sampleText={(font) => font.sampleText}
          description={(font) => font.name}
          selectedId={selectedFontStyle.value}
          onSelect={(id) => (selectedFontStyle.value = id)}
          gridCols={4}
          maxDisplayed={8}
        />
      </AutoPick>
    </FormField>
  );
}
