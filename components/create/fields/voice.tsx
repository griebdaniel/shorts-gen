import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useVoice, useVoiceAutoPick } from "@/components/create/state";
import { VoicePlayer } from "@/components/ui/voice-player";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FieldLabel } from "@/components/create/fields/field-label";

const VOICE_OPTIONS = [
  { id: "voice1", label: "American, deep, male" },
  { id: "voice2", label: "British, soft, female" },
  { id: "voice3", label: "Australian, casual, male" },
  { id: "voice4", label: "Indian, professional, female" },
  { id: "voice5", label: "American, deep, male" },
  { id: "voice6", label: "British, soft, female" },
  { id: "voice7", label: "Australian, casual, male" },
  { id: "voice8", label: "Indian, professional, female" },
  { id: "voice9", label: "American, deep, male" },
  { id: "voice10", label: "British, soft, female" },
  { id: "voice11", label: "Australian, casual, male" },
  { id: "voice12", label: "Indian, professional, female" },
];

export function VoiceField() {
  const [voice, setVoice] = useVoice();
  const [autoPick, setAutoPick] = useVoiceAutoPick();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (autoPick) {
      const randomIndex = Math.floor(Math.random() * VOICE_OPTIONS.length);
      setVoice(VOICE_OPTIONS[randomIndex].id);
    }
  }, [autoPick, setVoice]);

  const displayedVoices = showAll ? VOICE_OPTIONS : VOICE_OPTIONS.slice(0, 8);
  const hasMoreVoices = VOICE_OPTIONS.length > 8;

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
            audioUrl={`/api/preview-voice?voice=${encodeURIComponent(option.id)}`}
            selected={voice === option.id}
            onSelect={() => setVoice(option.id)}
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
