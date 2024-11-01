import { z } from 'zod';
import { Form } from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import poetService from '@/services/poet.service';
import { useLoginStore } from '@/store/useLogin';
import CustomField from '../shared/custom-field';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import LoadingDots from '../shared/loading-dots';

const formsSchema = z.object({
  login: z.string().email(),
  password: z.string().min(8),
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

  const loginError = useLoginStore().loginError;
  const setLoginError = useLoginStore().setLoginError;

  const setLoginSuccess = useLoginStore().setLoginSuccess;

  const { isSubmitting, errors } = form.formState;

  const onSubmit = async (data: FormTypes) => {
    const body = {
      email: data.login,
      password: data.password,
    };

    try {
      await poetService.loginUser(body);

      setLoginSuccess(true);
    } catch (e) {
      console.error(e);
      setLoginError('Неверный пароль');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8 relative">
          <h3 className="text-center font-semibold">Woýti</h3>

          <div className="flex flex-col gap-6">
            <CustomField
              control={form.control}
              name={'login'}
              label={'Login'}
              placeholder={'Подсказка'}
              error={errors.login}
            />
            <CustomField
              type="password"
              control={form.control}
              name={'password'}
              label={'Parol'}
              placeholder={'Wwedite swoý parol'}
              error={errors.password}
            />
          </div>

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? <LoadingDots /> : 'Woýti w swoý akkaunt'}
          </Button>

          {loginError && (
            <h5 className="absolute bottom-5 text-ERROR text-[14px] font-medium">{loginError}</h5>
          )}

          <h5 className="text-16 transition-all">
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
