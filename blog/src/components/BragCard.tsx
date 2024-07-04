import { CLASS } from "../classes";
import { THEME } from "../theme";
import { MakeClass } from "../utilities/MakeClass";

export const BragCard = ({ children }: React.PropsWithChildren) => (
  <div
    className={MakeClass(
      CLASS.Full,
      THEME.colors.bgPrimary,
      "shadow-lg",
      "rounded",
      "p-2 lg:p-4"
    )}
  >
    {children}
  </div>
);
