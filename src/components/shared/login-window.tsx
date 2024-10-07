import CustomField from "./custom-field";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useLoginStore } from "@/store/useLogin";

const formsSchema = z.object({
  login: z.string(),
  password: z.string(),
});

type FormTypes = z.infer<typeof formsSchema>;

const LoginWindow = () => {
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

  // useEffect(() => {
  //   document.body.classList.add("overflow-hidden");

  //   return () => document.body.classList.remove("overflow-hidden");
  // }, []);

  const setActive = useLoginStore().setActive;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <h3 className="text-center font-semibold">Woýti</h3>

          <div className="flex flex-col gap-4">
            <CustomField
              control={form.control}
              name={"login"}
              label={"Login"}
              placeholder={"Подсказка"}
              error={form.formState.errors.login}
            />
            <CustomField
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
  );
};

export default LoginWindow;
