import { GetServerSidePropsContext } from "next";
import { notFound } from "next/navigation";

import { MDXRemote } from "next-mdx-remote/rsc";

import fs from "fs/promises";
import path from "path";

export default async function Page(context: GetServerSidePropsContext) {
  let fd: fs.FileHandle = undefined;

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
    <MDXRemote
      source={result}
      options={{
        parseFrontmatter: true,
      }}
    />
  );
}
