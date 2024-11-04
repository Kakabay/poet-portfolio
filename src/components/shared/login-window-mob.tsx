import CustomField from "./custom-field";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useLoginStore } from "@/store/useLogin";
import { motion } from "framer-motion";
import poetService from "@/services/poet.service";
import { BackBtn } from "./back-btn";

const formsSchema = z.object({
  login: z.string().email(),
  password: z.string(),
});

type FormTypes = z.infer<typeof formsSchema>;

const LoginWindowMob = () => {
  const setMobActive = useLoginStore().setMobActive;

  const form = useForm({
    resolver: zodResolver(formsSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (data: FormTypes) => {
    const body = {
      email: data.login,
      password: data.password,
    };

    try {
      poetService.loginUser(body);
      setMobActive(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed block md:hidden z-[150] top-0 left-0 w-full h-screen py-8 bg-[#EFDEBE] overflow-hidden"
    >
      <img
        src="/images/texture047.png"
        className="size-full absolute top-0 left-0 pointer-events-none object-cover mix-blend-multiply opacity-50"
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 container">
            <BackBtn setActive={() => setMobActive(false)} />

            <h3 className="text-center font-semibold">Woýti</h3>

            <div className="flex flex-col gap-6">
              <CustomField
                control={form.control}
                name={"login"}
                label={"Login"}
                placeholder={"Подсказка"}
                error={form.formState.errors.login}
              />
              <CustomField
                type="password"
                control={form.control}
                name={"password"}
                label={"Parol"}
                placeholder={"Wwedite swoý parol"}
                error={form.formState.errors.password}
              />
            </div>

            <Button type="submit">Woýti w swoý akkaunt</Button>

            <h5 className="text-16">
              Esli net akkaunta,
              <Link
                onClick={() => setMobActive(false)}
                className="text-TERTIARY tracking-normal hover:underline-offset-4 transition-all hover:underline"
                to="/instruction"
              >
                zaregistriruýsýa.
              </Link>
            </h5>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default LoginWindowMob;
