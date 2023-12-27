import { ValidTailwindColor } from "../types/Tailwind";

export const THEME = {
  colors: {
    bgPrimary: "neutral-800",
    bgSecondary: "neutral-900",
  } satisfies Record<string, ValidTailwindColor>,
} as const