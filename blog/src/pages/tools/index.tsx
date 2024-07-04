import fs from "fs/promises";
import path from "path";
import { parseMdxPostsFromPath } from "../../utilities/parseMdxPostsFromPath";

export const getStaticProps = async () => {
  const result = await parseMdxPostsFromPath("src/tools");

  return result;
};
