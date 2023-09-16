import { MakeClass } from "@/app/utilities/MakeClass";
import React from "react";

interface ResponsiveContainerProps extends React.PropsWithChildren {
  attributes?: string[];
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  attributes,
  ...props
}) => {
  const containerStyle = "flex justify-center w-[95%] lg:w-[80%]";
  const className = MakeClass([containerStyle, ...(attributes ?? [])]);

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};
