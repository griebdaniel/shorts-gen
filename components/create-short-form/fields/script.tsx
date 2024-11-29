"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/create-short-form/fields/field-label";
import { signal } from "@preact-signals/safe-react";

export const script = signal<string>("");

export function ScriptField() {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor="script">Script</FieldLabel>
      <Textarea
        id="script"
        placeholder="Enter your video script"
        value={script.value}
        onChange={(e) => (script.value = e.target.value)}
        className="min-h-[200px]"
      />
      <div className="flex justify-end">
        <Button>Generate Script Using AI</Button>
      </div>
    </div>
  );
}
