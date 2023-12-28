import { Icon } from "../components/Icon";
import { CLASS } from "../constants/classes";
import { THEME } from "../constants/theme";
import { MakeClass } from "../utilities/MakeClass";

export default function Page() {
  const mainClass = MakeClass(
    CLASS.Full,
    CLASS.Center,
    "p-4",
    "bg-neutral-800"
  );

  return (
    <main className={mainClass}>
      <div
        className={MakeClass(
          CLASS.Full,
          CLASS.Snappy("transition-colors"),
          MakeClass("border-4", "border-solid", THEME.colors.borderPrimary),
          "flex flex-col items-center gap-4",
          "p-4",
          `${THEME.colors.bgSecondary}`,
          "rounded-lg",
          "drop-shadow-lg"
        )}
      >
        <Icon width="200px" borderRadius="9999px" src="/images/pfp.jpeg" />
        <p className="text-2xl font-bold">hi, im</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 h-full"></div>
      </div>
    </main>
  );
}
