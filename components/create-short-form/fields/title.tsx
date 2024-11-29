"use client";

import { Input } from "@/components/ui/input";
import { FieldLabel } from "@/components/create-short-form/fields/field-label";
import { signal } from "@preact-signals/safe-react";

export const title = signal("");

export function TitleField() {
  return (
    <div className="space-y-2">
      <FieldLabel>Title</FieldLabel>
      <Input
        id="title"
        placeholder="Enter title"
        value={title.value}
        onChange={(e) => (title.value = e.target.value)}
      />
    </div>
  );
}
