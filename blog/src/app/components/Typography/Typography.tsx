import {
  TailwindColor,
  TailwindShade,
  TailwindSize,
} from "@/app/types/Tailwind";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

interface TypographyProps extends PropsWithChildren {
  variant: `${TailwindColor}-${TailwindShade}-${TailwindSize}`;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  ...props
}) => {
  const [color, shade, size] = variant.split("-");
  const className = `text-${color}-${shade} text-${size}`;

  return <p {...props} className={className}></p>;
};
