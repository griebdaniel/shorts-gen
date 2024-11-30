"use client";

import { SelectableVoicePlayerList } from "@/app/components/ui-elements/selectable-voice-player-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";
import { useFormContext } from "../form-provider";

interface VoiceFieldProps {
  voiceOptions: { id: string; label: string; url: string }[];
}

export function VoiceField({ voiceOptions }: VoiceFieldProps) {
  const form = useFormContext();

  return (
    <FormField label="Voice">
      <form.Field name="voice">
        {(field) => (
          <AutoPick>
            <SelectableVoicePlayerList
              voices={voiceOptions}
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
