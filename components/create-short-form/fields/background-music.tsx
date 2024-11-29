"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  useBackgroundMusic,
  useBackgroundMusicAutoPick,
} from "@/components/create/state";
import { useEffect } from "react";
import { FieldLabel } from "@/components/create-short-form/fields/field-label";

export function BackgroundMusicField() {
  const [music, setMusic] = useBackgroundMusic();
  const [autoPick, setAutoPick] = useBackgroundMusicAutoPick();

  useEffect(() => {
    if (autoPick) {
      // Simulate random selection - replace with actual options
      const randomMusic = `music-${Math.floor(Math.random() * 10)}`;
      setMusic(randomMusic);
    }
  }, [autoPick, setMusic]);

  return (
    <div className="space-y-4">
      <FieldLabel htmlFor="background-music">Background Music</FieldLabel>
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
      <Input
        id="background-music"
        placeholder="Select background music"
        value={music}
        onChange={(e) => setMusic(e.target.value)}
        disabled={autoPick}
      />
    </div>
  );
}
