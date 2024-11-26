import { create } from "zustand";

interface VideoKind {
  value: string;
  label: string;
}

export interface FormState {
  title: string;
  videoKind: string;
  videoLength: number;
  script: string;
  voiceAutoPick: boolean;
  voice: string;
  styleAutoPick: boolean;
  style: number;
  backgroundMusicAutoPick: boolean;
  backgroundMusic: string;
  fontStyleAutoPick: boolean;
  fontStyle: string;
  overlaysAutoPick: boolean;
  overlays: string;
  // Video kinds state
  videoKinds: VideoKind[];
}

interface FormActions {
  setTitle: (title: string) => void;
  setVideoKind: (kind: string) => void;
  setVideoLength: (length: number) => void;
  setScript: (script: string) => void;
  setVoiceAutoPick: (auto: boolean) => void;
  setVoice: (voice: string) => void;
  setStyleAutoPick: (auto: boolean) => void;
  setStyle: (style: number) => void;
  setBackgroundMusicAutoPick: (auto: boolean) => void;
  setBackgroundMusic: (music: string) => void;
  setFontStyleAutoPick: (auto: boolean) => void;
  setFontStyle: (font: string) => void;
  setOverlaysAutoPick: (auto: boolean) => void;
  setOverlays: (overlays: string) => void;
  initialize: () => Promise<void>;
}

export const useFormStore = create<FormState & FormActions>((set) => ({
  // Initial state
  title: "",
  videoKind: "",
  videoLength: 0,
  script: "",
  voiceAutoPick: true,
  voice: "",
  styleAutoPick: true,
  style: 0,
  backgroundMusicAutoPick: true,
  backgroundMusic: "",
  fontStyleAutoPick: true,
  fontStyle: "",
  overlaysAutoPick: true,
  overlays: "",
  videoKinds: [],

  // Actions
  setTitle: (title) => set({ title }),
  setVideoKind: (videoKind) => set({ videoKind }),
  setVideoLength: (videoLength) => set({ videoLength }),
  setScript: (script) => set({ script }),
  setVoiceAutoPick: (voiceAutoPick) => set({ voiceAutoPick }),
  setVoice: (voice) => set({ voice }),
  setStyleAutoPick: (styleAutoPick) => set({ styleAutoPick }),
  setStyle: (style) => set({ style }),
  setBackgroundMusicAutoPick: (backgroundMusicAutoPick) =>
    set({ backgroundMusicAutoPick }),
  setBackgroundMusic: (backgroundMusic) => set({ backgroundMusic }),
  setFontStyleAutoPick: (fontStyleAutoPick) => set({ fontStyleAutoPick }),
  setFontStyle: (fontStyle) => set({ fontStyle }),
  setOverlaysAutoPick: (overlaysAutoPick) => set({ overlaysAutoPick }),
  setOverlays: (overlays) => set({ overlays }),
  initialize: async () => {
    try {
      // This is a mock API call - replace with real API call later
      await new Promise((resolve) => setTimeout(resolve, 500));
      const videoKinds = [
        { value: "educational", label: "Educational" },
        { value: "entertainment", label: "Entertainment" },
        { value: "promotional", label: "Promotional" },
        { value: "tutorial", label: "Tutorial" },
        { value: "vlog", label: "Vlog" },
      ];
      set({ videoKinds });
    } catch (error) {
      console.error("Failed to initialize form state", error);
    }
  },
}));

// Helper type for our selector hooks
type SelectorHook<T, U> = () => readonly [T, (value: U) => void];

// Create a helper function for creating selector hooks
function createSelector<T, U>(
  getValue: (state: FormState & FormActions) => T,
  setValue: (state: FormState & FormActions) => (value: U) => void
): SelectorHook<T, U> {
  return () => {
    const value = useFormStore(getValue);
    const setter = useFormStore(setValue);
    return [value, setter];
  };
}

// Field hooks
export const useTitle = createSelector(
  (state) => state.title,
  (state) => state.setTitle
);

export const useVideoKind = createSelector(
  (state) => state.videoKind,
  (state) => state.setVideoKind
);

export function useVideoKinds() {
  return useFormStore((state) => state.videoKinds);
}

export const useVideoLength = createSelector(
  (state) => state.videoLength,
  (state) => state.setVideoLength
);

export const useScript = createSelector(
  (state) => state.script,
  (state) => state.setScript
);

export const useVoiceAutoPick = createSelector(
  (state) => state.voiceAutoPick,
  (state) => state.setVoiceAutoPick
);

export const useVoice = createSelector(
  (state) => state.voice,
  (state) => state.setVoice
);

export const useStyleAutoPick = createSelector(
  (state) => state.styleAutoPick,
  (state) => state.setStyleAutoPick
);

export const useStyle = createSelector(
  (state) => state.style,
  (state) => state.setStyle
);

export const useBackgroundMusicAutoPick = createSelector(
  (state) => state.backgroundMusicAutoPick,
  (state) => state.setBackgroundMusicAutoPick
);

export const useBackgroundMusic = createSelector(
  (state) => state.backgroundMusic,
  (state) => state.setBackgroundMusic
);

export const useFontStyleAutoPick = createSelector(
  (state) => state.fontStyleAutoPick,
  (state) => state.setFontStyleAutoPick
);

export const useFontStyle = createSelector(
  (state) => state.fontStyle,
  (state) => state.setFontStyle
);

export const useOverlaysAutoPick = createSelector(
  (state) => state.overlaysAutoPick,
  (state) => state.setOverlaysAutoPick
);

export const useOverlays = createSelector(
  (state) => state.overlays,
  (state) => state.setOverlays
);

useFormStore.getState().initialize();
