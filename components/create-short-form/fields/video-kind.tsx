"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldLabel } from "@/components/create-short-form/fields/field-label";
import { signal } from "@preact-signals/safe-react";

interface VideoKindFieldProps {
  videoKinds: { value: string; label: string }[];
}

export const videoKind = signal<string>("");

export function VideoKindField({ videoKinds }: VideoKindFieldProps) {
  return (
    <div className="space-y-2">
      <FieldLabel>Video Kind</FieldLabel>
      <Select
        name="video-kind"
        value={videoKind.value}
        onValueChange={(value) => (videoKind.value = value)}
      >
        <SelectTrigger id="video-kind">
          <SelectValue placeholder={"Select a video kind"} />
        </SelectTrigger>
        <SelectContent>
          {videoKinds.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
