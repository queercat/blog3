import { CLASS } from "../classes";
import { THEME } from "../theme";
import { MakeClass } from "../utilities/MakeClass";

export const Emphasis = ({ children }: React.PropsWithChildren) => (
  <div
    className={MakeClass(
      "p-2 rounded-sm",
      THEME.colors.bgPrimary,
      "shadow",
      CLASS.Snappy("transition-transform"),
      "hover:scale-105"
    )}
  >
    {children}
  </div>
);
