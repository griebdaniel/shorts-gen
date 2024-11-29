"use client";

import { signal } from "@preact-signals/safe-react";
import { SelectableVoicePlayerList } from "@/app/components/my-ui/selectable-voice-player-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";

interface VoiceFieldProps {
  voiceOptions: { id: string; label: string; url: string }[];
}

export const selectedVoice = signal("");

export function VoiceField({ voiceOptions }: VoiceFieldProps) {
  return (
    <FormField label="Voice">
      <AutoPick>
        <SelectableVoicePlayerList
          voices={voiceOptions}
          selectedId={selectedVoice.value}
          onSelect={(id) => (selectedVoice.value = id)}
          gridCols={4}
          maxDisplayed={8}
        />
      </AutoPick>
    </FormField>
  );
}
