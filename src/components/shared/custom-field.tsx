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
        <FormItem className="flex flex-col w-full relative">
          <FormLabel className="font-medium text-16 tracking-4">
            {label}
          </FormLabel>
          <FormControl>
            {!area ? (
              <Input
                placeholder={placeholder}
                {...field}
                className={error?.message && "border-[#BA1A1A]"}
              />
            ) : (
              <Textarea
                rows={10}
                placeholder={placeholder}
                {...field}
                className={error?.message && "border-[#BA1A1A]"}
              />
            )}
          </FormControl>
          <FormMessage
            className={cn(
              "absolute -bottom-5 left-0 text-[12px] font-medium leading-[130%] text-[#BA1A1A]"
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
