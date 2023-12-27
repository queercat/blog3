"use client";
import { serialize } from "next-mdx-remote/serialize";

import { promises as fs } from "fs";
import path from "path";
import { useMDXComponents } from "../../mdx-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { THEME } from "../../theme";
import { MakeClass } from "../../utilities/MakeClass";
import MDXContent from "../../components/MDXContent";
import { useMemo } from "react";

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

  // check for frontmatter
  const match = source.match(/---(\s|\S)+---/g);

  if (match) {
    // regex replace doesn't work here for some reason
    let lines = source.split("\n");

    let newLines = [];
    let idx = 0;

    for (const line of lines) {
      if (line.includes("---")) {
        idx++;
      }

      if (idx > 1) {
        newLines.push(line);
      }
    }

    source = newLines.join("\n");
  }

  const result = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  return {
    props: {
      source: result,
    },
  };
};

export default function Page({ source }: { source: MDXRemoteSerializeResult }) {
  let MDXElement = useMemo(() => {
    if (!source) return null;
    return <MDXRemote {...source} components={useMDXComponents()} />;
  }, [source]);

  return (
    <div
      className={MakeClass(
        "full h-full px-4 lg:px-[20%] pt-4",
        THEME.colors.bgPrimary,
        THEME.colors.textPrimary
      )}
    >
      {MDXElement}
    </div>
  );
}
