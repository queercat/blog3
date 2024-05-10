import type { MDXComponents } from "mdx/types";
import { THEME } from "./theme";
import { MakeClass } from "./utilities/MakeClass";
import { ScatterChart } from "./components/ScatterChart";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h1: (props: any) => <p {...props} className="text-2xl" />,
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
    ScatterChart: (props: React.ComponentPropsWithRef<typeof ScatterChart>) => (
      <ScatterChart {...props} />
    ),
  };
}
