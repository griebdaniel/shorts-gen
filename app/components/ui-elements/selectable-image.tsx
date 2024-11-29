import { cn } from "@/lib/utils";
import Image from "next/image";

interface SelectableImageProps {
  imageUrl: string;
  imageDescription: string;
  selected?: boolean;
  onSelect?: () => void;
  disabled?: boolean;
}

// Define sizes constant outside component to ensure consistency
const IMAGE_SIZES = "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw";

export function SelectableImage({
  imageUrl,
  imageDescription,
  selected = false,
  onSelect,
  disabled = false,
}: SelectableImageProps) {
  return (
    <div
      onClick={() => !disabled && onSelect?.()}
      className={cn(
        "flex flex-col gap-2 cursor-pointer group",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <div
        className={cn(
          "relative aspect-square rounded-lg overflow-hidden border-2 transition-all",
          selected
            ? "border-blue-500 shadow-lg"
            : "border-transparent hover:border-gray-200",
          disabled && "hover:border-transparent"
        )}
      >
        <Image
          src={imageUrl}
          alt={imageDescription}
          fill
          sizes={IMAGE_SIZES}
          className="object-cover"
          priority={false}
        />
        {selected && (
          <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <p
        className={cn(
          "text-sm transition-colors",
          selected
            ? "text-blue-500 font-medium"
            : "text-gray-600 group-hover:text-gray-900",
          disabled && "group-hover:text-gray-600"
        )}
      >
        {imageDescription}
      </p>
    </div>
  );
}
