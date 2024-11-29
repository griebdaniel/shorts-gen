"use client";

import { Input } from "@/app/components/ui/input";
import { FormField } from "./utils/form-field";
import { signal } from "@preact-signals/safe-react";

export const title = signal("");

export function TitleField() {
  return (
    <FormField label="Title">
      <Input
        id="title"
        placeholder="Enter title"
        value={title.value}
        onChange={(e) => (title.value = e.target.value)}
      />
    </FormField>
  );
}
