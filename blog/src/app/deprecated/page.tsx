import fs from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { parse } from "yaml";
import { MakeClass } from "../../utilities/MakeClass";
import { THEME } from "../../theme";
import { CLASS } from "../../classes";
import Link from "next/link";

export default async function Page() {
  let result = await fs.readdir(path.join(process.cwd(), "src/posts"));

  // filter to mdx only
  result = result.filter((f) => f.includes(".mdx"));

  result = await Promise.all(
    result.map((f) => {
      return fs.readFile(path.join(process.cwd(), "src/posts", f), "utf-8");
    })
  );

  const posts = result.map((p) => {
    const match = p.match(/---[\s\S]*---/g);

    if (!match) throw new Error("No frontmatter found");

    const frontmatter = parse(match[0].replace(/---/g, ""));

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      slug: frontmatter.slug ?? "",
    };
  });

  const calculateDateDifference = (date: string) => {
    const now = new Date();
    const then = new Date(date);

    const diff = now.getTime() - then.getTime();

    const days = diff / (1000 * 60 * 60 * 24);

    return Math.round(days);
  };

  return (
    <div className={MakeClass(THEME.colors.bgPrimary, CLASS.Full)}>
      <div className="flex flex-col gap-4 p-4">
        {posts.map((p) => {
          return (
            <Link
              className={MakeClass(
                THEME.colors.bgSecondary,
                "p-4",
                "rounded",
                "shadow-lg",
                THEME.colors.textPrimary,
                CLASS.Snappy("transition-transform"),
                "hover:scale-[101%]"
              )}
              href={`/posts/${p.slug}`}
            >
              <h1 className="text-2xl">{p.title}</h1>
              <div className="flex justify-between">
                <p>{p.date}</p>
                <p>{calculateDateDifference(p.date)} days ago</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
