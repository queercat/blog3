import matter from "gray-matter";
import { Post } from "../types/Post";

export const parseMappedPostData = async (mappedData: { fileName: string, data: string }[]) => {
  return mappedData.map((t) => {
    return {
      data: matter(t.data).data as Post,
      path: t.fileName.replace(/\.tsx$/, ""),
    };
  });
}