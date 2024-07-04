import { MakeClass } from "../../utilities/MakeClass";
import { THEME } from "../../theme";
import { CLASS } from "../../classes";

import Link from "next/link";
import { NextSeo } from "next-seo";
import { parseMdxPostsFromPath } from "../../utilities/parseMdxPostsFromPath";
import { Post } from "../../types/Post";

export const getStaticProps = async () => {
  const posts = await parseMdxPostsFromPath("src/posts");

  return posts;
};

const calculateDateDifference = (date: string) => {
  const now = new Date();
  const then = new Date(date);

  const diff = now.getTime() - then.getTime();

  const days = diff / (1000 * 60 * 60 * 24);

  return Math.round(days);
};

export default function Page(
  context: Awaited<ReturnType<typeof getStaticProps>>
) {
  return (
    <div className={MakeClass(THEME.colors.bgPrimary, CLASS.Full)}>
      <NextSeo title="some posts" />
      <div className="flex flex-col gap-4 p-4">
        {context.props.posts?.map((p) => {
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
                  {p.tags?.map((t: string) => {
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
