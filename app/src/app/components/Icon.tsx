import Image from "next/image";
import { MakeClass } from "../utilities/MakeClass";
import { CLASS } from "../constants/classes";

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
        width: width,
        height: "fit-content",
        borderRadius: borderRadius,
      }}
      className={MakeClass(
        "border-4",
        "border-solid",
        "border-neutral-300",
        CLASS.Snappy("colors", "transform"),
        CLASS.HoverBorder("rose-400")
      )}
      src={src}
      alt="Icon"
    />
  );
};
