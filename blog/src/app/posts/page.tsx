import fs from "fs/promises";
import path from "path";

export default async function Page() {
  let result = await fs.readdir(path.join(process.cwd(), "src/app/posts"));

  // filter to directories only
  result = result.filter((f) => !f.includes("."));

  /* BEGIN: ed8c6549bwf9
  result = await Promise.all(
    result.map((f) => {
      return fs.readFile(
        path.join(process.cwd(), "src/app/posts", f, "page.mdx"),
        "utf-8"
      );
    })
  );
  END: ed8c6549bwf9 */

  return <div>{result.join(" ")}</div>;
}
