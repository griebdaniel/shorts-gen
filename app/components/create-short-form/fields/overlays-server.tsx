import { getOverlays } from "@/app/actions/overlays";
import { OverlaysField } from "./overlays";

export async function OverlaysFieldServer() {
  const overlayImages = await getOverlays();
  return <OverlaysField overlayImages={overlayImages} />;
}
