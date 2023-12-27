import "./globals.css";
import type { Metadata } from "next";
import { MakeClass } from "../utilities/MakeClass";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div
          className={MakeClass(
            "flex",
            "justify-center",
            "bg-neutral-900 p-2",
            "gap-4",
            "text-neutral-100"
          )}
        >
          <p>home</p>
          <p> - </p>
          <p>posts</p>
          <p> - </p>
          <p>tools</p>
          <p> - </p>
          <p>scripts</p>
        </div>
        {children}
      </body>
    </html>
  );
}
