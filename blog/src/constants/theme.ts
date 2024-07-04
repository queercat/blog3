import { ValidTailwindColor } from "../types/Tailwind";

export const THEME = {
  colors: {
    bgPrimary: "bg-neutral-800",
    bgSecondary: "bg-neutral-900",
    bgTertiary: "bg-neutral-950",
    borderPrimary: "border-neutral-600",
    borderSecondary: "border-neutral-800",
  } satisfies Record<string, `${string}-${ValidTailwindColor}`>,
} as const