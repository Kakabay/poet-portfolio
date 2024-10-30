import { z } from 'zod';
import { Form } from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import poetService from '@/services/poet.service';
import { useLoginStore } from '@/store/useLogin';
import CustomField from '../shared/custom-field';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';

const formsSchema = z.object({
  login: z.string().email(),
  password: z.string(),
});

type FormTypes = z.infer<typeof formsSchema>;

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formsSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const setLoginActive = useLoginStore().setActive;

  const token = useAuthStore().accessToken;

  const onSubmit = async (data: FormTypes) => {
    const body = {
      email: data.login,
      password: data.password,
    };

    try {
      poetService.loginUser(body);

      if (token) {
        setLoginActive(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <h3 className="text-center font-semibold">Woýti</h3>

          <div className="flex flex-col gap-6">
            <CustomField
              control={form.control}
              name={'login'}
              label={'Login'}
              placeholder={'Подсказка'}
              error={form.formState.errors.login}
            />
            <CustomField
              type="password"
              control={form.control}
              name={'password'}
              label={'Parol'}
              placeholder={'Wwedite swoý parol'}
              error={form.formState.errors.password}
            />
          </div>

          <Button type="submit">Woýti w swoý akkaunt</Button>

          <h5 className="text-16">
            Esli net akkaunta,
            <Link
              onClick={() => setLoginActive(false)}
              className="text-TERTIARY tracking-normal hover:underline-offset-4 transition-all hover:underline"
              to="/instruction">
              zaregistriruýsýa.
            </Link>
          </h5>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
