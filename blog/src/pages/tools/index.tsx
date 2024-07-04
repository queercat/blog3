import fs from "fs/promises";
import path, { parse } from "path";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { CLASS } from "../../classes";
import { THEME } from "../../theme";
import { MakeClass } from "../../utilities/MakeClass";
import { calculateDateDifference } from "../../utilities/calculateDateDifference";
import { Post } from "../../types/Post";
import matter from "gray-matter";
import { getNamesAndDataFromExtension } from "../../utilities/getNamesAndDataFromExtension";
import { mapPathsToData } from "../../utilities/mapPathsToData";
import { resolvePromises } from "../../utilities/resolvePromise";
import { parseData } from "../../utilities/parseData";

export const getStaticProps = async () => {
  const toolsPaths = await getNamesAndDataFromExtension(
    ".tsx",
    ["src", "pages", "tools"],
    ["index.tsx"]
  );

  const toolsData = await mapPathsToData(["src", "pages", "tools"], toolsPaths);

  const tools = (await resolvePromises(toolsData)).map((t) => parseData(t));

  return {
    props: {
      posts: tools,
    },
  };
};

export default function Page(context: {
  posts: {
    data: Post;
    path: string;
  }[];
}) {
  return (
    <div className={MakeClass(THEME.colors.bgPrimary, CLASS.Full)}>
      <NextSeo title="some tools" />
      <div className="grid gap-4 p-4">
        {context.posts.map((p) => {
          return (
            <Link
              className={MakeClass(
                THEME.colors.bgSecondary,
                "p-4",
                "rounded",
                "shadow-lg",
                "grid",
                "no-underline",
                THEME.colors.textPrimary,
                CLASS.Snappy("transition-transform")
              )}
              href={`/tools/${p.path}`}
              key={p.path}
            >
              <div className="flex justify-between">
                <p className="text-xl xl:text-2xl underline decoration-indigo-500 font-bold">
                  {p.data.title}
                </p>
                <div className="flex gap-2">
                  {p.data.tags?.map((t) => {
                    return (
                      <p key={t} className="text-sm">
                        #{t}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between">
                <p>{p.data.date.split("-").join(".")}</p>
                <p>({calculateDateDifference(p.data.date)} days ago)</p>
              </div>
              <p
                className={MakeClass(
                  "bg-indigo-400",
                  "text-black",
                  "rounded",
                  "p-4",
                  "mt-4"
                )}
              >
                {p.data.slug}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
