import fs from "fs/promises";
import path from "path";

export const getNamesAndDataFromExtension = async (extension: `.${string}`, targetDirectory: string[] | string, exclude?: string[]) => {
  return (await fs.readdir(path.join(process.cwd(), ...targetDirectory))).filter((f) => f.endsWith(extension) && !exclude?.includes(f));
}