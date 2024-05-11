import fs from "fs/promises";
import path from "path";

export const mapPathsToData = async (basePath: string[] | string, paths: string[]) => {
  const mappedData = paths.map(async (p) => {
    const data = await fs.readFile(path.join(...basePath, p), "utf-8");
    return {
      fileName: p,
      data,
    };
  });

  return mappedData;
}