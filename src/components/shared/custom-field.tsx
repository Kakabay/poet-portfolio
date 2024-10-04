import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

type Props = {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  area?: boolean;
};

const CustomField = ({
  control,
  name,
  label,
  placeholder,
  area = false,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2 w-full">
          <FormLabel className="font-medium text-16 tracking-4">
            {label}
          </FormLabel>
          <FormControl>
            {!area && <Input placeholder={placeholder} {...field} />}
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CustomField;
