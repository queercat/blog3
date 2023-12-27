export type TailwindColor = "neutral" | "gray" | "neutral" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "indigo" | "purple" | "pink" | "rose";
export type TailwindShade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950";
export type TailwindSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";

export type ValidTailwindColor = `${TailwindColor}-${TailwindShade}`;