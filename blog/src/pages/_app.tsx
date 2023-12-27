import "./globals.css";
import { MakeClass } from "../utilities/MakeClass";
import Link from "next/link";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-full">
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
        <p> - </p>
        <Link href={"/tools"}>tools</Link>
        <p> - </p>
        <Link href={"/scripts"}>scripts</Link>
      </div>
      {Component && <Component {...pageProps} />}
    </div>
  );
}
