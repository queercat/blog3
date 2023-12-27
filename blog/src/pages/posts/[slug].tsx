import { serialize } from "next-mdx-remote/serialize";

import fs from "fs/promises";
import path from "path";
import { useMDXComponents } from "../../mdx-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { THEME } from "../../theme";
import { MakeClass } from "../../utilities/MakeClass";

export const getStaticPaths = async () => {
  let result = await fs.readdir(path.join(process.cwd(), "src/posts"));

  result = result
    .filter((f) => f.includes(".mdx"))
    .map((f) => f.replace(".mdx", ""));

  return {
    paths: result.map((r) => {
      return {
        params: {
          slug: r,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const fd = await fs.open(
    path.join(process.cwd(), "src/posts", `${context.params.slug}.mdx`),
    "r"
  );

  let source = await fd.readFile("utf-8");
  fd.close();

  // check if contains frontmatter

  const lines = source.split("\n");

  const result = await serialize(source);

  return {
    props: {
      source: result,
    },
  };
};

export default function Page({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div
      className={MakeClass(
        "full h-full px-4 lg:px-[20%] pt-4",
        THEME.colors.bgPrimary,
        THEME.colors.textPrimary
      )}
    >
      <>
        <MDXRemote components={useMDXComponents()} {...source} />
      </>
    </div>
  );
}
