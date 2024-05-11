import { Scatter } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { MakeClass } from "../utilities/MakeClass";

export const ScatterChart = ({
  ...props
}: React.ComponentPropsWithRef<typeof Scatter>) => {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  return (
    <div
      className={MakeClass(
        "p-2 lg:p-4",
        "bg-neutral-200",
        "rounded-sm",
        "shadow-lg",
        "my-2 lg:my-4"
      )}
    >
      <Scatter {...props} />
    </div>
  );
};
