"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

interface VideoKindFieldProps {
  videoKinds: { value: string; label: string }[];
}

export function VideoKindField({ videoKinds }: VideoKindFieldProps) {
  const form = useFormContext();

  return (
    <FormField label="Video Kind">
      <form.Field name="videoKind">
        {(field) => (
          <Select value={field.state.value} onValueChange={field.handleChange}>
            <SelectTrigger id="video-kind">
              <SelectValue placeholder="Select a video kind" />
            </SelectTrigger>
            <SelectContent>
              {videoKinds.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </form.Field>
    </FormField>
  );
}
