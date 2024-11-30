"use client";

import { useForm } from "@tanstack/react-form";
import { type ReactNode, createContext, useContext } from "react";

interface FormData {
  title: string;
  script: string;
  videoKind: string;
  videoLength: number;
  voice: string;
  style: number | null;
  backgroundMusic: string;
  fontStyle: number | null;
  overlay: number | null;
}

const FormContext = createContext<ReturnType<typeof useForm<FormData>> | null>(
  null
);

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const form = useForm<FormData>({
    defaultValues: {
      title: "",
      script: "",
      videoKind: "",
      videoLength: 60,
      voice: "",
      style: null,
      backgroundMusic: "",
      fontStyle: null,
      overlay: null,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
    },
  });

  return (
    <FormContext.Provider value={form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
