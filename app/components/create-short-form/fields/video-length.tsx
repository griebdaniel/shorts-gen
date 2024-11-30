"use client";

import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

export function VideoLengthField() {
  const form = useFormContext();

  return (
    <FormField label="Video Length">
      <form.Field name="videoLength">
        {(field) => (
          <RadioGroup
            value={String(field.state.value)}
            onValueChange={(value) => field.handleChange(Number(value))}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="60" id="lt-1min" />
              <Label htmlFor="lt-1min">{"< 1 min length"}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="120" id="lt-2min" />
              <Label htmlFor="lt-2min">{"< 2 min length"}</Label>
            </div>
          </RadioGroup>
        )}
      </form.Field>
    </FormField>
  );
}
