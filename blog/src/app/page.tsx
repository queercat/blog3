import { ResponsiveContainer } from "./components/ResponsiveContainer/ResponsiveContainer";
import { Typography } from "./components/Typography/Typography";

export default function Home() {
  return (
    <main className="h-full flex justify-center bg-neutral-950">
      <ResponsiveContainer>
        <Typography variant="blue-600-4xl">Hello World</Typography>
      </ResponsiveContainer>
    </main>
  );
}
