import { THEME } from "../theme";
import { MakeClass } from "../utilities/MakeClass";

export const PostWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className={MakeClass(
        THEME.colors.bgPrimary,
        "flex-1",
        "px-[5%]",
        "py-4",
        "xl:px-[20%]"
      )}
    >
      {children}
    </div>
  );
};
