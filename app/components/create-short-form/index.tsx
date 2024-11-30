import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  VideoKindField,
  TitleField,
  VoiceField,
  StyleField,
  BackgroundMusicField,
  FontStyleField,
} from "./fields";
import { VideoLengthField } from "./fields/video-length";
import { ScriptField } from "./fields";
import { OverlaysField } from "./fields";
import { FormProvider } from "./form-provider";
import { Button } from "@/app/components/ui/button";

export default function CreateShort() {
  return (
    <Card className="w-[90%] max-w-[1200px]">
      <CardHeader>
        <CardTitle>Create</CardTitle>
      </CardHeader>
      <FormProvider>
        <CardContent>
          <div className="space-y-5">
            <TitleField />
            <VideoKindField />
            <VideoLengthField />
            <ScriptField />
            <VoiceField />
            <StyleField />
            <BackgroundMusicField />
            <FontStyleField />
            <OverlaysField />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Create</Button>
        </CardFooter>
      </FormProvider>
    </Card>
  );
}
