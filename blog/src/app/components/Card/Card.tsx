import { MakeClass } from "@/app/utilities/MakeClass";
import { Full, Hover } from "@/app/utilities/snippets";
import React from "react";

export interface CardProps extends React.PropsWithChildren {
  full?: boolean;
  wfull?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover,
  full,
  wfull,
  ...props
}) => {
  const cardStyle =
    "rounded border-2 md:border-4 border-slate-500 shadow-xl p-2 md:p-8 text-white flex flex-col gap-4";

  const attributes = [cardStyle];
  console.log(attributes);

  if (hover) attributes.push(Hover);
  if (full) attributes.push(Full);
  if (wfull) attributes.push("w-full");

  let className = MakeClass(attributes);

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};
