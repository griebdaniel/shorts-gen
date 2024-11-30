"use client";

import { Input } from "@/app/components/ui/input";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

export function TitleField() {
  const form = useFormContext();

  return (
    <FormField label="Title">
      <form.Field name="title">
        {(field) => (
          <Input
            id="title"
            placeholder="Enter title"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.Field>
    </FormField>
  );
}
