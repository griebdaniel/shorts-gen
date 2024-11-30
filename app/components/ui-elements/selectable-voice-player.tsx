// The component should display a voice player with the following controls:
// Props: label (e.g. "American, deep, male"), audioUrl
// Controls: play/pause

"use client";

import { useState, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { Play, Pause, Loader2 } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = async () => {
    try {
      setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
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
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
