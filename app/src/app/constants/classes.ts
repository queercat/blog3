import { TailwindColor, ValidTailwindColor } from "../types/Tailwind";
import { MakeClass } from "../utilities/MakeClass";

const Snappy = (...target: ("all" | "colors" | "opacity" | "shadow" | "transform")[]) => target.reduce<string>((acc, cur) => MakeClass(acc, `transition-${cur} duration-[250ms]`), "")
const HoverBorder =  (color: ValidTailwindColor) => MakeClass(Snappy("colors"), `hover:border-${color}`);

const Full = MakeClass("w-full", "h-full");
const Center = MakeClass("flex", "justify-center", "items-center");
const Snirk = MakeClass("hover:rotate-45")

export const CLASS = {
  Snappy,
  HoverBorder,
  Full,
  Center,
  Snirk
};
