/* These compoenents are used in MDX files to render custom components. */

import { MDXComponents } from "mdx/types";
import { THEME } from "../theme";
import { Icon } from "../components/Icon";
import { MakeClass } from "../utilities/MakeClass";

export const COMPONENTS: MDXComponents = {
  h1: (props: any) => <h1 {...props} className="text-2xl" />,
  hr: (props: any) => <hr {...props} className="pb-4 mt-2" />,
  Example: (props: any) => {
    return (
      <div
        className={MakeClass(
          "flex flex-col gap-4",
          "p-4",
          "my-4",
          THEME.colors.bgSecondary,
          "rounded",
          "shadow-lg",
          "monospace"
        )}
      >
        {props.children}
      </div>
    );
  },
  Icon: (props: any) => <Icon {...props} borderRadius="9999px" />,
};
