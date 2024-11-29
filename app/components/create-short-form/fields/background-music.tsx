"use client";

import { signal } from "@preact-signals/safe-react";
import { SelectableVoicePlayerList } from "@/app/components/ui-elements/selectable-voice-player-list";
import { AutoPick } from "./utils/auto-pick";
import { FormField } from "./utils/form-field";

interface BackgroundMusicFieldProps {
  musicOptions: { id: string; label: string; url: string }[];
}

export const selectedBackgroundMusic = signal("");

export function BackgroundMusicField({
  musicOptions,
}: BackgroundMusicFieldProps) {
  return (
    <FormField label="Background Music">
      <AutoPick>
        <SelectableVoicePlayerList
          voices={musicOptions}
          selectedId={selectedBackgroundMusic.value}
          onSelect={(id) => (selectedBackgroundMusic.value = id)}
          maxDisplayed={8}
        />
      </AutoPick>
    </FormField>
  );
}
