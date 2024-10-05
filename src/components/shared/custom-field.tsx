import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type Props = {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  error: FieldError | undefined;
  area?: boolean;
};

const CustomField = ({
  control,
  name,
  label,
  placeholder,
  error,
  area = false,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2 w-full relative">
          <FormLabel className="font-medium text-16 tracking-4">
            {label}
          </FormLabel>
          <FormControl>
            {!area ? (
              <Input placeholder={placeholder} {...field} />
            ) : (
              <Textarea rows={8} placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage
            className={cn(
              "absolute -bottom-6 left-0 text-red-700"
              // area ? "left-0" : "right-0"
            )}
          >
            {error?.message}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default CustomField;
