import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  text: z.string(),
});

type FormType = z.infer<typeof formSchema>;

const ContactsForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      text: '',
    },
  });

  return <Form {...form}>фы</Form>;
};

export default ContactsForm;
