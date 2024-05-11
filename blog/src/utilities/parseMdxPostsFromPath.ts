import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { Post } from "../types/Post";

export const parseMdxPostsFromPath = async (targetPath: string) => {
  const fileNames = (
    await fs.readdir(path.join(process.cwd(), targetPath))
  ).filter((f) => f.endsWith(".mdx"));

  const result = await Promise.all(
    fileNames.map((f) => {
      return fs.readFile(path.join(process.cwd(), targetPath, f), "utf-8");
    })
  );

  const posts: Post[] = result.map((p) => {
    const frontmatter = matter(p).data;

    return {
      title: frontmatter.title as string,
      date: frontmatter.date as string,
      slug: frontmatter.slug ?? ("" as string),
      tags: (frontmatter.tags.split(",") ?? [""]) as string[],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
