"use client";

import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

export function ScriptField() {
  const form = useFormContext();

  return (
    <FormField label="Script">
      <div className="space-y-2">
        <form.Field name="script">
          {(field) => (
            <Textarea
              id="script"
              placeholder="Enter your video script"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="min-h-[200px]"
            />
          )}
        </form.Field>
        <div className="flex justify-end">
          <Button>Generate Script Using AI</Button>
        </div>
      </div>
    </FormField>
  );
}
