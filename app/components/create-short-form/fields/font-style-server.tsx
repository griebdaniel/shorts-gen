import { getFontStyles } from "@/app/actions/font-styles";
import { FontStyleField } from "./font-style";

export async function FontStyleFieldServer() {
  const fontStyles = await getFontStyles();
  return <FontStyleField fontStyles={fontStyles} />;
}
