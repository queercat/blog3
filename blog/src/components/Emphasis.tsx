import { THEME } from "../theme";
import { MakeClass } from "../utilities/MakeClass";

export const Emphasis = ({ children }: React.PropsWithChildren) => (
  <div
    className={MakeClass("p-2 rounded-sm", THEME.colors.bgPrimary, "shadow")}
  >
    {children}
  </div>
);
