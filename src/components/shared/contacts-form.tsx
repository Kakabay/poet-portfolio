import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomField from './custom-field';
import { Button } from '../ui/button';
import LoadingDots from './loading-dots';
import { useContactsStore } from '@/store/useContacts';

const formSchema = z.object({
  name: z.string().min(3, 'Imya obyazatelno'),
  email: z.string().email(),
  message: z.string().min(5, 'text requried'),
});

type FormType = z.infer<typeof formSchema>;

const ContactsForm = () => {
  const setSuccess = useContactsStore().setSuccess;

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;
  const onSubmit = async (data: FormType) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
    setSuccess(true);

    // form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-10 flex-[0_0_648px]">
          <h4 className="text-20">Maňa hat iberiň</h4>

          <div className="flex gap-6">
            <CustomField
              control={form.control}
              label="Waşe imýa"
              name="name"
              placeholder="Kak was zowut?"
              error={form.formState.errors.name}
            />
            <CustomField
              control={form.control}
              label="Waş email"
              name="email"
              placeholder="Kuda otprawit otwet?"
              error={form.formState.errors.email}
            />
          </div>
          <CustomField
            control={form.control}
            label="Waş email"
            name="message"
            placeholder="Kuda otprawit otwet?"
            error={form.formState.errors.message}
            area
          />

          <Button type="submit" disabled={isSubmitting} className="relative">
            {isSubmitting ? <LoadingDots /> : 'Otprawit'}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactsForm;
