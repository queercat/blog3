import { MakeClass } from "../../utilities/MakeClass";
import { THEME } from "../../theme";
import { CLASS } from "../../classes";

import Link from "next/link";
import { NextSeo } from "next-seo";
import { parseMdxPostsFromPath } from "../../utilities/parseMdxPostsFromPath";
import { Post } from "../../types/Post";
import { calculateDateDifference } from "../../utilities/calculateDateDifference";

export const getStaticProps = async () => {
  const posts = await parseMdxPostsFromPath("src/posts");

  return posts;
};

export default function Page(context: { posts: Post[] }) {
  return (
    <div className={MakeClass(THEME.colors.bgPrimary, CLASS.Full)}>
      <NextSeo title="some posts" />
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
                      <p key={t} className="text-sm">
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
