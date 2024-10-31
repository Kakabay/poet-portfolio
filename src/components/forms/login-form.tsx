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
import { delay, motion } from 'framer-motion';

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

  const loginError = useLoginStore().loginError;
  const setLoginError = useLoginStore().setLoginError;

  console.log(loginError);

  const onSubmit = async (data: FormTypes) => {
    const body = {
      email: data.login,
      password: data.password,
    };

    try {
      poetService.loginUser(body);

      setLoginError('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 relative">
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

          <Button type="submit">
            {form.formState.isLoading ? <LoadingDots /> : 'Woýti w swoý akkaunt'}
          </Button>

          <div className="">
            <motion.h3
              initial={{ height: 0 }}
              animate={loginError ? { height: 20 } : {}}
              transition={{ delay: 0.2, duration: 0.1 }}
              className="text-ERROR text-[14px] font-medium leading-[130%]">
              {loginError}
            </motion.h3>

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
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
