import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomField from "./custom-field";
import { Button } from "../ui/button";
import LoadingDots from "./loading-dots";
import { useContactsStore } from "@/store/useContacts";
import { usePopupStore } from "@/store/usePopup";
import { CloudLightning } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, "Imya obyazatelno"),
  email: z.string().email(),
  message: z.string().min(5, "text requried"),
});

type FormType = z.infer<typeof formSchema>;

const ContactsForm = () => {
  const setMode = usePopupStore().setMode;

  const setSuccess = useContactsStore().setSuccess;

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h4 className="xl:text-20 text-[18px] xl:mb-6 mb-8">
            Maňa hat iberiň
          </h4>
          <div className="flex flex-col xl:gap-10 gap-7 md:gap-10 xl:flex-[0_0_648px]">
            <div className="flex md:flex-row flex-col gap-6">
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
              label="Tema soobşeniýa"
              name="message"
              placeholder="Kuda otprawit otwet?"
              error={form.formState.errors.message}
              area
            />

            <Button
              onClick={() => setMode("tost")}
              type="submit"
              disabled={isSubmitting}
              className="relative w-full"
            >
              {isSubmitting ? <LoadingDots /> : "Otprawit"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ContactsForm;
