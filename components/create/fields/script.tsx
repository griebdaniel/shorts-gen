import { Textarea } from "@/components/ui/textarea";
import { useScript } from "@/components/create/state";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/create/fields/field-label";

export function ScriptField() {
  const [script, setScript] = useScript();

  return (
    <div className="space-y-2">
      <FieldLabel htmlFor="script">Script</FieldLabel>
      <Textarea
        id="script"
        placeholder="Enter your video script"
        value={script}
        onChange={(e) => setScript(e.target.value)}
        className="min-h-[200px]"
      />
      <Button>Generate script</Button>
    </div>
  );
}
