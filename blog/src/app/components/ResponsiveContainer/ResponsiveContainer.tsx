import React from "react";

interface ResponsiveContainerProps extends React.PropsWithChildren {}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className="flex justify-center w-[95%] lg:w-[80%]">
      {children}
    </div>
  );
};
