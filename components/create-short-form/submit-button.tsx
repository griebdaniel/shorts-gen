"use client";

import { Button } from "@/components/ui/button";
import { title, videoKind, script, videoLength } from "./fields";

function onFormSubmit() {
  console.log(title.value, videoKind.value, script.value, videoLength.value);
  title.value = "";
}

export function SubmitButton() {
  return <Button onClick={onFormSubmit}>Create Video</Button>;
}
