import { getBackgroundMusic } from "@/app/actions/background-music";
import { BackgroundMusicField } from "./background-music";

export async function BackgroundMusicServerField() {
  const music = await getBackgroundMusic();
  const musicOptions = music.map((m) => ({
    id: String(m.musicId),
    label: m.musicLabel,
    url: m.musicUrl,
  }));

  return <BackgroundMusicField musicOptions={musicOptions} />;
}
