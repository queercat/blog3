import { useRouter } from "next/router";
import { MakeClass } from "../../utilities/MakeClass";
import { THEME } from "../../theme";
import { CLASS } from "../../classes";

import path from "path";
import { parse } from "yaml";
import fs from "fs/promises";
import Link from "next/link";

export const getStaticProps = async () => {
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
      tags: frontmatter.tags ?? "",
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const calculateDateDifference = (date: string) => {
  const now = new Date();
  const then = new Date(date);

  const diff = now.getTime() - then.getTime();

  const days = diff / (1000 * 60 * 60 * 24);

  return Math.round(days);
};

export default function Page(context: { posts: any[] }) {
  return (
    <div className={MakeClass(THEME.colors.bgPrimary, CLASS.Full)}>
      <div className="flex flex-col gap-4 p-4">
        {context.posts?.map((p) => {
          return (
            <Link
              className={MakeClass(
                THEME.colors.bgSecondary,
                "p-4",
                "rounded",
                "shadow-lg",
                THEME.colors.textPrimary,
                CLASS.Snappy("transition-transform")
              )}
              href={`/posts/${p.slug}`}
              key={p.slug}
            >
              <div className="flex justify-between">
                <p className="text-2xl">{p.title}</p>
                <div className="flex gap-2">
                  {p.tags?.map((t) => {
                    return (
                      <p key={p} className="text-sm">
                        #{t}
                      </p>
                    );
                  })}
                </div>
              </div>
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
