"use client";

import { Label } from "@/components/ui/label";
import { VoicePlayer } from "@/components/my-ui/selectable-voice-player";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FieldLabel } from "./field-label";
import { signal } from "@preact-signals/safe-react";
import { Switch } from "@/components/ui/switch";

interface VoiceFieldProps {
  voiceOptions: { id: string; label: string; url: string }[];
}

export const selectedVoice = signal("");

const VOICE_HIDE_COUNT = 8;

export function VoiceField({ voiceOptions }: VoiceFieldProps) {
  const [showAll, setShowAll] = useState(false);
  const [autoPick, setAutoPick] = useState(false);

  const displayedVoices = showAll ? voiceOptions : voiceOptions.slice(0, 8);
  const hasMoreVoices = voiceOptions.length > VOICE_HIDE_COUNT;

  return (
    <div className="space-y-4">
      <FieldLabel htmlFor="voice">Voice</FieldLabel>
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {displayedVoices.map((option) => (
          <VoicePlayer
            key={option.id}
            label={option.label}
            audioUrl={option.url}
            selected={selectedVoice.value === option.id}
            onSelect={() => (selectedVoice.value = option.id)}
            disabled={autoPick}
          />
        ))}
      </div>

      {hasMoreVoices && (
        <button
          className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
