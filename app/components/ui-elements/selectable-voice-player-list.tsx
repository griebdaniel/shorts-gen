import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { VoicePlayer } from "./selectable-voice-player";

interface SelectableVoicePlayerListProps {
  voices: { id: string; label: string; url: string }[];
  selectedId: string;
  onSelect: (id: string) => void;
  disabled?: boolean;
  maxDisplayed?: number;
}

export function SelectableVoicePlayerList({
  voices,
  selectedId,
  onSelect,
  disabled = false,
  maxDisplayed = 8,
}: SelectableVoicePlayerListProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedVoices = showAll ? voices : voices.slice(0, maxDisplayed);
  const hasMore = voices.length > maxDisplayed;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {displayedVoices.map((voice) => (
          <VoicePlayer
            key={voice.id}
            label={voice.label}
            audioUrl={voice.url}
            selected={!disabled && selectedId === voice.id}
            onSelect={() => onSelect(voice.id)}
            disabled={disabled}
          />
        ))}
      </div>

      {hasMore && (
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
