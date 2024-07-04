import { Icon } from "./components/Icon";
import { CLASS } from "./constants/classes";
import { THEME } from "./constants/theme";
import { MakeClass } from "./utilities/MakeClass";

export default function Home() {
  const mainClass = MakeClass(
    CLASS.Full,
    CLASS.Center,
    "p-4",
    "bg-neutral-800"
  );

  return (
    <>
      <main className={mainClass}>
        <div
          className={MakeClass(
            CLASS.Full,
            CLASS.Snappy("colors"),
            MakeClass(
              "border-4",
              "border-solid",
              `border-${THEME.colors.bgPrimary}`
            ),
            CLASS.HoverBorder("rose-400"),
            "flex justify-center",
            "p-4",
            `bg-${THEME.colors.bgSecondary}`,
            "drop-shadow-lg"
          )}
        >
          <Icon width="200px" borderRadius="9999px" src="/images/pfp.jpeg" />
        </div>
      </main>
      <main className={MakeClass(mainClass, "bg-neutral-900")} />
    </>
  );
}
