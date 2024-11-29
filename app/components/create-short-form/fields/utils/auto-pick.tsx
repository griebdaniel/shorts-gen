import React from "react";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import { useState } from "react";
import type { ReactElement } from "react";

interface AutoPickProps {
  children: ReactElement;
}

export function AutoPick({ children }: AutoPickProps) {
  const [autoPick, setAutoPick] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Switch
          id="auto-pick"
          checked={autoPick}
          onCheckedChange={setAutoPick}
        />
        <Label htmlFor="auto-pick" className="text-sm">
          Auto pick based on script, title and video kind
        </Label>
      </div>

      {React.cloneElement(children, { disabled: autoPick })}
    </div>
  );
}
