import { MakeClass } from "./MakeClass"

export const SnappyTransform = MakeClass(["transition-transform", "duration-[250ms]"]);
export const Hover = MakeClass([SnappyTransform, "hover:border-rose-400", "hover:scale-[101%]"]);
export const Full = MakeClass(["w-full", "h-full"]);