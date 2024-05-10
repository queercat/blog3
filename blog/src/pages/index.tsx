import { NextSeo } from "next-seo";
import { BragCard } from "../components/BragCard";
import { Emphasis } from "../components/Emphasis";
import { Icon } from "../components/Icon";
import { CLASS } from "../constants/classes";
import { THEME } from "../constants/theme";
import { MakeClass } from "../utilities/MakeClass";

export default function Page() {
  const mainClass = MakeClass(
    CLASS.Full,
    CLASS.Center,
    "p-1 lg:p-4",
    "bg-neutral-800"
  );

  return (
    <main className={mainClass}>
      <NextSeo title="a blog" />
      <div
        className={MakeClass(
          CLASS.Full,
          CLASS.Snappy("transition-colors"),
          MakeClass(
            "border-2 lg:border-4",
            "border-solid",
            THEME.colors.borderPrimary
          ),
          "flex flex-col items-center justify-center gap-4",
          "p-2 lg:p-4",
          `${THEME.colors.bgSecondary}`,
          "rounded-lg",
          "drop-shadow-lg"
        )}
      >
        <Icon width="15vw" borderRadius="9999px" src="/images/pfp.jpeg" />
        <span className="flex gap-2 items-center">
          <p className="text-2xl">hi, im</p>
          <Emphasis>
            <p className="text-2xl">may</p>
          </Emphasis>
        </span>
        <span className="flex gap-2 items-center">
          <p className="text-xl">a</p>
          <Emphasis>
            <p className="text-xl">developer</p>
          </Emphasis>
          <Emphasis>
            <p className="text-xl">designer</p>
          </Emphasis>
          <p className="text-xl">and</p>
          <Emphasis>
            <p className="text-xl">artist</p>
          </Emphasis>
        </span>
        <p className="text-lg">welcome to my website :3c</p>
      </div>
    </main>
  );
}
