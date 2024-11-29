// The component should display a voice player with the following controls:
// Props: label (e.g. "American, deep, male"), audioUrl
// Controls: play/pause

"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoicePlayerProps {
  label: string;
  audioUrl: string;
  selected?: boolean;
  onSelect?: () => void;
  disabled?: boolean;
}

export function VoicePlayer({
  label,
  audioUrl,
  selected = false,
  onSelect,
  disabled = false,
}: VoicePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = async () => {
    if (!audioRef.current) {
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      await audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border p-1 cursor-pointer transition-colors",
        selected && "border-primary bg-primary/5",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={() => !disabled && onSelect?.()}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          togglePlayPause();
        }}
        aria-label={isPlaying ? "Pause" : "Play"}
        disabled={disabled}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
