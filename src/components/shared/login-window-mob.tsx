import CustomField from "./custom-field";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useLoginStore } from "@/store/useLogin";
import BackBtn from "./back-btn";
import { motion } from "framer-motion";

const formsSchema = z.object({
  login: z.string().email(),
  password: z.string(),
});

type FormTypes = z.infer<typeof formsSchema>;

const LoginWindowMob = () => {
  const form = useForm({
    resolver: zodResolver(formsSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (data: FormTypes) => {
    console.log(data);
  };

  const setActive = useLoginStore().setActive;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed block z-[150] top-0 left-0 w-full h-screen py-8 bg-[#EFDEBE] overflow-hidden"
    >
      <img
        src="/images/texture.png"
        className="size-full absolute top-0 left-0 pointer-events-none object-cover mix-blend-multiply opacity-50"
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 container">
            <BackBtn setActive={() => setActive(false)} />

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

            <Button>Woýti w swoý akkaunt</Button>

            <h5 className="text-16">
              Esli net akkaunta,
              <Link
                onClick={() => setActive(false)}
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
