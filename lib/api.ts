const VOICE_OPTIONS = [
  {
    value: "voice1",
    label: "American, deep, male",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
  },
  {
    value: "voice2",
    label: "British, soft, female",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav",
  },
  {
    value: "voice3",
    label: "Australian, casual, male",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
  },
  {
    value: "voice4",
    label: "Indian, professional, female",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav",
  },
  {
    value: "voice5",
    label: "American, deep, male",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav",
  },
  {
    value: "voice6",
    label: "British, soft, female",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/Chimes.wav",
  },
  {
    value: "voice7",
    label: "Australian, casual, male",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav",
  },
  {
    value: "voice8",
    label: "Indian, professional, female",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/preamble10.wav",
  },
  {
    value: "voice9",
    label: "American, deep, male",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav",
  },
  {
    value: "voice10",
    label: "British, soft, female",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/spacemusic.wav",
  },
  {
    value: "voice11",
    label: "Australian, casual, male",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
  },
  {
    value: "voice12",
    label: "Indian, professional, female",
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav",
  },
];

// This simulates an API call - later this will be replaced with a real API call
export async function fetchVideoKinds() {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    { value: "educational", label: "Educational" },
    { value: "entertainment", label: "Entertainment" },
    { value: "promotional", label: "Promotional" },
    { value: "tutorial", label: "Tutorial" },
    { value: "vlog", label: "Vlog" },
  ];
}

export async function fetchVoiceOptions() {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return VOICE_OPTIONS;
}
