import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SelectableImage } from "./selectable-image";

interface SelectableImageListProps<T> {
  items: T[];
  imageUrl: (item: T) => string;
  imageDescription: (item: T) => string;
  selectedId: number | null;
  onSelect: (id: number) => void;
  disabled?: boolean;
  gridCols?: number;
  maxDisplayed?: number;
}

export function SelectableImageList<T extends { id: number }>({
  items,
  imageUrl,
  imageDescription,
  selectedId,
  onSelect,
  disabled = false,
  maxDisplayed = 8,
}: SelectableImageListProps<T>) {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, maxDisplayed);
  const hasMore = items.length > maxDisplayed;

  return (
    <div className="space-y-4">
      <div className={`grid grid-cols-4 md:grid-cols-4 gap-4`}>
        {displayedItems.map((item) => (
          <SelectableImage
            key={item.id}
            imageUrl={imageUrl(item)}
            imageDescription={imageDescription(item)}
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
