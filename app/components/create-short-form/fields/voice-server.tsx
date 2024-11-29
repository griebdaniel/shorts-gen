import { getVoices } from "@/app/actions/voices";
import { VoiceField } from "./voice";

export async function VoiceServerField() {
  const voices = await getVoices();
  const voiceOptions = voices.map((voice) => ({
    id: String(voice.voiceId),
    label: voice.voiceLabel,
    url: voice.voiceUrl,
  }));

  return <VoiceField voiceOptions={voiceOptions} />;
}
