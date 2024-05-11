import { DatePicker as ReactDatePicker } from "react-date-picker";

export const DatePicker = ({
  ...props
}: React.ComponentPropsWithRef<typeof ReactDatePicker>) => (
  <ReactDatePicker {...props} />
);
