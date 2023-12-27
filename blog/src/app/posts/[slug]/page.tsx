import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import fs from "fs/promises";
import path from "path";
import { MakeClass } from "../../../utilities/MakeClass";
import { THEME } from "../../../theme";

export default async function Page(context: any) {
  let fd: fs.FileHandle;

  try {
    fd = await fs.open(
      path.join(process.cwd(), "src/posts", `${context.params.slug}.mdx`),
      "r"
    );
  } catch (e) {
    return notFound();
  }

  const result = await fd.readFile("utf-8");
  fd.close();

  return (
    <div
      className={MakeClass(
        "full h-full px-4 lg:px-[20%] pt-4",
        THEME.colors.bgPrimary,
        THEME.colors.textPrimary
      )}
    >
      <>
        <MDXRemote
          components={{
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
          }}
          source={result}
          options={{
            parseFrontmatter: true,
          }}
        />
      </>
    </div>
  );
}
