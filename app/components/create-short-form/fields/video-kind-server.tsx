import { getVideoKinds } from "@/app/actions/video-kinds";
import { VideoKindField } from "./video-kind";

export async function VideoKindFieldServer() {
  const videoKinds = await getVideoKinds();

  return <VideoKindField videoKinds={videoKinds} />;
}
