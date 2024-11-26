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
  ] as const;
}
