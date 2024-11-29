import { fetchVideoKinds } from "@/lib/api";
import { VideoKindField } from "./video-kind";

export async function VideoKindFieldServer() {
  const videoKinds = await fetchVideoKinds();

  return <VideoKindField videoKinds={videoKinds} />;
}
