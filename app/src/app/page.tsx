import { Card } from "./components/Card/Card";
import { ResponsiveContainer } from "./components/ResponsiveContainer/ResponsiveContainer";
import { Typography } from "./components/Typography/Typography";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center bg-neutral-950">
      <ResponsiveContainer attributes={["pt-4"]}>
        <Card wfull>Hello World</Card>
      </ResponsiveContainer>
    </main>
  );
}
