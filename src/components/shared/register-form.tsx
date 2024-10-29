import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePopupStore } from "@/store/usePopup";
import CustomField from "./custom-field";
import poetService from "@/services/poet.service";

const signUpSchema = z
  .object({
    first_name: z.string().min(2, "Пароль должен быть не менее 2 символов"),
    email: z.string().email("Неверный формат email"),
    password: z
      .string()
      .min(8, "Пароль должен быть не менее 8 символов")
      .regex(/[A-Za-z]/, "Пароль должен содержать буквы")
      .regex(/\d/, "Пароль должен содержать цифры"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Пароли не совпадают",
    path: ["password_confirmation"],
  });

type FormType = z.infer<typeof signUpSchema>;

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const setMode = usePopupStore().setMode;

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = (data: FormType) => {
    const body = {
      first_name: data.first_name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };

    try {
      poetService.postUser(body);
      console.log(data);
      alert(data);
      // form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  console.log(sessionStorage.getItem("accessToken"));

  const handleEmailNextStep = async () => {
    const isEmailValid = await form.trigger("email");

    if (isEmailValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleNameValid = async () => {
    const isNameValid = await form.trigger("first_name");

    if (isNameValid) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-[640px] mx-auto flex flex-col xl:gap-6 md:gap-6 gap-8"
      >
        <h2 className="h2 kaushan">Kak zaregistrirowatsýa</h2>

        <div
          className={cn(
            "leading-[150%] transition-opacity",
            step !== 1 && "opacity-50 pointer-events-none"
          )}
        >
          <div className="mb-4 text-[18px] leading-[110%] md:leading-[150%] font-medium md:font-normal md:text-[24px]">
            1 shag
          </div>

          <h4 className="font-semibold mb-2 leading-[150%] text-[20px] md:text-[24px]">
            Vvedite vash email
          </h4>

          <h5 className="md:text-[18px] text-[16px] font-medium -tracking-wide leading-[145%] mb-6">
            Ukazhite vash deystvuyushchiy adres elektronnoy pochty. On budet
            ispol'zovat'sya dlya vkhoda na sayt i polucheniya vazhnykh
            uvedomleniy.
          </h5>

          <CustomField
            disabled={step !== 1}
            label="Vvedite email v pole nizhe i nazhmite «Dalee»"
            control={form.control}
            placeholder="Подсказка"
            type="text"
            error={form.formState.errors.email}
            name="email"
            className="mb-8"
          />

          <Button
            disabled={step !== 1}
            type="button"
            onClick={handleEmailNextStep}
            className="w-full"
          >
            Dalee
          </Button>
        </div>

        <div
          className={cn(
            "leading-[150%] transition-opacity",
            step !== 2 && "opacity-50 pointer-events-none"
          )}
        >
          <div className="mb-4 text-[18px] leading-[110%] md:leading-[150%] font-medium md:font-normal md:text-[24px]">
            2 shag
          </div>

          <h4 className="font-semibold mb-2 leading-[150%] text-[20px] md:text-[24px]">
            Vvedite vash email
          </h4>

          <h5 className="md:text-[18px] text-[16px] font-medium -tracking-wide leading-[145%] mb-6">
            Ukazhite vash deystvuyushchiy adres elektronnoy pochty. On budet
            ispol'zovat'sya dlya vkhoda na sayt i polucheniya vazhnykh
            uvedomleniy.
          </h5>

          <CustomField
            disabled={step !== 2}
            label="Pridumayte username"
            control={form.control}
            placeholder="Подсказка"
            type="text"
            error={form.formState.errors.first_name}
            name="first_name"
            className="mb-8"
          />

          <Button
            disabled={step !== 2}
            type="button"
            onClick={handleNameValid}
            className="w-full"
          >
            Dalee
          </Button>
        </div>

        <div
          className={cn(
            "leading-[150%] transition-opacity",
            step !== 3 && "opacity-50 pointer-events-none"
          )}
        >
          <div className="mb-4 text-[18px] leading-[110%] md:leading-[150%] font-medium md:font-normal md:text-[24px]">
            2 shag
          </div>

          <h4 className="font-semibold mb-2 md:leading-[150%] leading-[140%] text-[20px] md:text-[24px]">
            Pridumayte parol'
          </h4>

          <h5 className="md:text-[18px] text-[16px] font-medium -tracking-wide leading-[145%] mb-6">
            Sozdajte parol' dlya vashego akkaunta. Parol' dolzhen soderzhat' ne
            menee 8 simvolov, vklyuchaya bukvy, tsifry i spetsial'nye simvoly.
          </h5>

          <div className="text-[16px] font-medium leading-[150%] mb-4">
            <CustomField
              disabled={step !== 3}
              className="w-full mt-2 mb-8"
              label="Vvedite parol'"
              control={form.control}
              placeholder="Подсказка"
              type="text"
              error={form.formState.errors.password}
              name="password"
            />
          </div>

          <div className="text-[16px] font-medium leading-[150%]">
            <CustomField
              disabled={step !== 3}
              className=" w-full mt-2 mb-8"
              label="Powtorite parol' i podtverdite ego, zatem nazhmite «Dalee»."
              control={form.control}
              placeholder="Подсказка"
              type="text"
              error={form.formState.errors.password_confirmation}
              name="password_confirmation"
            />

            <Button
              type="submit"
              onClick={() => {
                setMode("tost");
              }}
              disabled={step !== 3}
              className="w-full"
            >
              Dalee
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
