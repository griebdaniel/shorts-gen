import { cn } from "@/lib/utils";

interface SelectableFontImageProps {
  fontFamily: string;
  fontWeight: string;
  sampleText: string;
  selected?: boolean;
  onSelect?: () => void;
  disabled?: boolean;
}

export function SelectableFontImage({
  fontFamily,
  fontWeight,
  sampleText,
  selected = false,
  onSelect,
  disabled = false,
}: SelectableFontImageProps) {
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
          "relative h-12 rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center bg-background",
          selected
            ? "border-blue-500 shadow-lg"
            : "border-transparent hover:border-gray-200",
          disabled && "hover:border-transparent"
        )}
      >
        <div
          style={{ fontFamily, fontWeight }}
          className="text-base text-center px-4"
        >
          {sampleText}
        </div>
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
    </div>
  );
}
