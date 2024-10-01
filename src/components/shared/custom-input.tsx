import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';

type Props = { control: any; name: string };

const CustomInput = ({ control, name }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel></FormLabel>
          <FormControl>
            <Input />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
