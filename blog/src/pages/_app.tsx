import "./globals.css";
import { MakeClass } from "../utilities/MakeClass";
import Link from "next/link";
import { AppProps } from "next/app";
import { THEME } from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={MakeClass("flex flex-col h-full", THEME.colors.textPrimary)}
    >
      <div
        className={MakeClass(
          "flex",
          "justify-center",
          "bg-neutral-900 p-4",
          "gap-4",
          "text-neutral-100",
          "text-lg font-bold lg:text-2xl"
        )}
      >
        <Link href={"/"}>home</Link>
        <p> - </p>
        <Link href={"/posts"}>posts</Link>
        {/* <p> - </p>
        <Link href={"/tools"}>tools</Link>
        <p> - </p>
        <Link href={"/scripts"}>scripts</Link> */}
      </div>
      {Component && <Component {...pageProps} />}
      <div
        className={MakeClass(
          "flex",
          "justify-center",
          "p-4",
          "gap-4",
          THEME.colors.bgSecondary,
          "text-lg",
          "text-neutral-400"
        )}
      >
        <p>all views are my own</p>
        <p>-</p>
        <Link href={"https://github.com/queercat"}>github</Link>
      </div>
    </div>
  );
}
