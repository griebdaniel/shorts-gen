"use client";

import { SelectableVoicePlayerList } from "@/app/components/ui-elements/selectable-voice-player-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

interface BackgroundMusicFieldProps {
  musicOptions: { id: string; label: string; url: string }[];
}

export function BackgroundMusicField({
  musicOptions,
}: BackgroundMusicFieldProps) {
  const form = useFormContext();

  return (
    <FormField label="Background Music">
      <form.Field name="backgroundMusic">
        {(field) => (
          <AutoPick>
            <SelectableVoicePlayerList
              voices={musicOptions}
              selectedId={field.state.value}
              onSelect={(id) => field.handleChange(id)}
              maxDisplayed={8}
            />
          </AutoPick>
        )}
      </form.Field>
    </FormField>
  );
}
