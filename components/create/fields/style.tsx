import { Label } from "@/components/ui/label";
import { useStyle, useStyleAutoPick } from "@/components/create/state";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FieldLabel } from "@/components/create/fields/field-label";

const stylePresets = [
  {
    id: 1,
    name: "Cinematic",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
  },
  {
    id: 2,
    name: "Vintage",
    image:
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&q=80",
  },
  {
    id: 3,
    name: "Minimalist",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80",
  },
  {
    id: 4,
    name: "Nature",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
  },
  {
    id: 5,
    name: "Urban",
    image:
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=600&q=80",
  },
  {
    id: 6,
    name: "Abstract",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
  },
  {
    id: 7,
    name: "Documentary",
    image:
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&q=80",
  },
  {
    id: 8,
    name: "Artistic",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
  },
  {
    id: 9,
    name: "Futuristic",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
  {
    id: 10,
    name: "Retro",
    image:
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=600&q=80",
  },
  {
    id: 11,
    name: "Dramatic",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&q=80",
  },
  {
    id: 12,
    name: "Ethereal",
    image:
      "https://images.unsplash.com/photo-1620503374956-c942862f0372?w=600&q=80",
  },
];

export function StyleField() {
  const [style, setStyle] = useStyle();
  const [autoPick, setAutoPick] = useStyleAutoPick();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (autoPick) {
      const randomIndex = Math.floor(Math.random() * stylePresets.length);
      setStyle(stylePresets[randomIndex].id);
    }
  }, [autoPick, setStyle]);

  const displayedStyles = showAll ? stylePresets : stylePresets.slice(0, 8);
  const hasMoreStyles = stylePresets.length > 8;

  return (
    <div className="space-y-4">
      <FieldLabel htmlFor="style">Style</FieldLabel>

      <div className="flex items-center gap-2 mb-2">
        <Switch
          id="auto-pick"
          checked={autoPick}
          onCheckedChange={setAutoPick}
        />
        <Label htmlFor="auto-pick" className="text-sm">
          Auto pick based on script, title and video kind
        </Label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayedStyles.map((stylePreset) => (
          <button
            key={stylePreset.id}
            onClick={() => setStyle(stylePreset.id)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              style === stylePreset.id
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            }`}
            disabled={autoPick}
          >
            <Image
              src={stylePreset.image}
              alt={stylePreset.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
              <p className="text-xs text-white text-center">
                {stylePreset.name}
              </p>
            </div>
          </button>
        ))}
      </div>

      {hasMoreStyles && (
        <button
          className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
