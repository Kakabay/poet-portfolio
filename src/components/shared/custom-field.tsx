import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';

type Props = { control: any; name: string; label: string };

const CustomInput = ({ control, name, label }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
