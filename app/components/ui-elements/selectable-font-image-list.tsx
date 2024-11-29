import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SelectableFontImage } from "./selectable-font-image";

interface SelectableFontImageListProps<T> {
  items: T[];
  fontFamily: (item: T) => string;
  fontWeight: (item: T) => string;
  sampleText: (item: T) => string;
  description: (item: T) => string;
  selectedId: number | null;
  onSelect: (id: number) => void;
  disabled?: boolean;
  gridCols?: number;
  maxDisplayed?: number;
}

export function SelectableFontImageList<T extends { id: number }>({
  items,
  fontFamily,
  fontWeight,
  sampleText,
  selectedId,
  onSelect,
  disabled = false,
  maxDisplayed = 8,
}: SelectableFontImageListProps<T>) {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, maxDisplayed);
  const hasMore = items.length > maxDisplayed;

  return (
    <div className="space-y-4">
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
        {displayedItems.map((item) => (
          <SelectableFontImage
            key={item.id}
            fontFamily={fontFamily(item)}
            fontWeight={fontWeight(item)}
            sampleText={sampleText(item)}
            selected={disabled ? false : selectedId === item.id}
            onSelect={() => !disabled && onSelect(item.id)}
            disabled={disabled}
          />
        ))}
      </div>

      {hasMore && (
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
