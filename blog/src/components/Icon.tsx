import Image from "next/image";
import { MakeClass } from "../utilities/MakeClass";
import { CLASS } from "../constants/classes";
import { THEME } from "../constants/theme";

interface IconProps {
  src: string;
  borderRadius?: string;
  width?: string;
}

export const Icon: React.FC<IconProps> = ({
  src,
  borderRadius,
  width,
}: IconProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      style={{
        width: `clamp(50px, ${width}, 200px)`,
        height: "fit-content",
        borderRadius: borderRadius,
      }}
      className={MakeClass(
        "border-4",
        "border-solid",
        THEME.colors.borderPrimary,
        CLASS.Snappy("transition-[colors,transform]"),
        CLASS.Snirk,
        "shadow-lg"
      )}
      src={src}
      alt="Icon"
    />
  );
};
