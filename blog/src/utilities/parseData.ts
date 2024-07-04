import matter from "gray-matter";
import { Post } from "../types/Post";

export const parseData = (data: {
  fileName: string;
  data: string;
}) => {
  const frontMatter = matter("---\n" + data.data.match(/---(.*?)---/s)![1] + "\n---").data as Post;

  if (!frontMatter) throw new Error("No frontmatter found for " + data.fileName)

  return {
    data: frontMatter,
    path: data.fileName.replace(/\.tsx$/, ""),
  };
}