"use client";

import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { FormField } from "./utils/form-field";
import { signal } from "@preact-signals/safe-react";

export const script = signal<string>("");

export function ScriptField() {
  return (
    <FormField label="Script">
      <div className="space-y-2">
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
    </FormField>
  );
}
