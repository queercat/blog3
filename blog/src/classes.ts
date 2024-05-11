import { TailwindColor, ValidTailwindColor } from "./types/Tailwind";
import { MakeClass } from "./utilities/MakeClass";

const Snappy = (target: string) => MakeClass(`${target} duration-[250ms]`)
const HoverBorder =  (color: `hover:border-${ValidTailwindColor}`) => MakeClass(Snappy("transition-colors"), color);

const Full = MakeClass("w-full", "flex-1");
const Center = MakeClass("flex", "justify-center", "items-center");
const Snirk = MakeClass("hover:rotate-[25deg]")

export const CLASS = {
  Snappy,
  HoverBorder,
  Full,
  Center,
  Snirk
};
