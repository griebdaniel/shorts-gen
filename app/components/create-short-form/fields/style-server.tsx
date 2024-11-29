import { getStyles } from "@/app/actions/styles";
import { StyleField } from "./style";

export async function StyleFieldServer() {
  const styleImages = await getStyles();
  return <StyleField styleImages={styleImages} />;
}
