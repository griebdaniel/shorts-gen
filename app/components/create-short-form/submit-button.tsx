"use client";

import { Button } from "@/app/components/ui/button";
import {
  title,
  videoKind,
  script,
  videoLength,
  selectedBackgroundMusic,
} from "./fields";

function onFormSubmit() {
  console.log(
    title.value,
    videoKind.value,
    script.value,
    videoLength.value,
    selectedBackgroundMusic.value
  );
}

export function SubmitButton() {
  return <Button onClick={onFormSubmit}>Create Video</Button>;
}
