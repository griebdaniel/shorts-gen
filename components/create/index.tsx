"use client";

import { TitleField } from "@/components/create/fields/title";
import { VideoKindField } from "@/components/create/fields/video-kind";
import { VideoLengthField } from "@/components/create/fields/video-length";
import { ScriptField } from "@/components/create/fields/script";
import { VoiceField } from "@/components/create/fields/voice";
import { StyleField } from "@/components/create/fields/style";
import { BackgroundMusicField } from "@/components/create/fields/background-music";
import { FontStyleField } from "@/components/create/fields/font-style";
import { OverlaysField } from "@/components/create/fields/overlays";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormStore } from "./state";

export default function CreateShort() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formValues = useFormStore.getState();
    console.log("Form submitted:", formValues);
  };

  return (
    <Card className="w-[90%] max-w-[1200px]">
      <CardHeader>
        <CardTitle>Create</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TitleField />
          <VideoKindField />
          <VideoLengthField />
          <ScriptField />
          <VoiceField />
          <StyleField />
          <BackgroundMusicField />
          <FontStyleField />
          <OverlaysField />
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Create Video</Button>
      </CardFooter>
    </Card>
  );
}
