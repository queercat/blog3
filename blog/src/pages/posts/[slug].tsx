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
import { parse } from "yaml";
import { NextSeo } from "next-seo";
import matter from "gray-matter";

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
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const fd = await fs.open(
    path.join(process.cwd(), "src/posts", `${context.params.slug}.mdx`),
    "r"
  );

  let source = await fs.readFile(fd, "utf-8");

  const frontmatter = matter(source).data;

  const result = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    parseFrontmatter: true,
    scope: {
      THEME,
    },
  });

  return {
    props: {
      source: result,
      frontmatter: JSON.stringify(frontmatter),
    },
  };
};

export default function Page({
  source,
  frontmatter,
}: {
  source: MDXRemoteSerializeResult;
  frontmatter: string;
}) {
  // hacky thing to handle undefined source.
  let MDXElement = useMemo(() => {
    if (!source) return null;
    return <MDXRemote {...source} components={useMDXComponents()} />;
  }, [source]);
  return (
    <div
      className={MakeClass(
        "px-4 lg:px-[20%] pt-4",
        "flex-grow",
        THEME.colors.bgPrimary,
        THEME.colors.textPrimary
      )}
    >
      <NextSeo
        title={JSON.parse(frontmatter).title}
        description={JSON.parse(frontmatter).description}
      />
      {MDXElement}
    </div>
  );
}
