import { useState, useEffect, useMemo } from "react";
import { calculateSavings } from "@/lib/calculator";
import type { RecyclingInput, EnvironmentalSavings } from "@/lib/types";

const STORAGE_KEY = "recycling-calculator-inputs";

const initialInputs: RecyclingInput = {
  paperInKg: 0,
  plasticInKg: 0,
  glassInKg: 0,
  aluminumInKg: 0,
};

export function useRecyclingCalculator() {
  const [inputs, setInputs] = useState<RecyclingInput>(initialInputs);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedInputs = JSON.parse(saved);
        // Validate the parsed data
        if (
          typeof parsedInputs === "object" &&
          typeof parsedInputs.paperInKg === "number" &&
          typeof parsedInputs.plasticInKg === "number" &&
          typeof parsedInputs.glassInKg === "number" &&
          typeof parsedInputs.aluminumInKg === "number"
        ) {
          setInputs(parsedInputs);
        }
      }
    } catch (error) {
      console.warn("Failed to load saved inputs from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever inputs change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
      } catch (error) {
        console.warn("Failed to save inputs to localStorage:", error);
      }
    }
  }, [inputs, isLoaded]);

  // Calculate savings using useMemo for performance
  const savings: EnvironmentalSavings = useMemo(() => {
    return calculateSavings(inputs);
  }, [inputs]);

  const updateInput = (field: keyof RecyclingInput, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: Math.max(0, value), // Ensure non-negative values
    }));
  };

  const resetInputs = () => {
    setInputs(initialInputs);
  };

  return {
    inputs,
    savings,
    updateInput,
    resetInputs,
    isLoaded,
  };
}
