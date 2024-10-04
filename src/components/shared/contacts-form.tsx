import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomField from "./custom-field";
import { Button } from "../ui/button";

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
      name: "",
      email: "",
      text: "",
    },
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 flex-[0_0_648px]"
      >
        <h4 className="text-20">Maňa hat iberiň</h4>

        <div className="flex gap-6">
          <CustomField
            control={form.control}
            label="Waşe imýa"
            name="name"
            placeholder="Kak was zowut?"
          />
          <CustomField
            control={form.control}
            label="Waş email"
            name="email"
            placeholder="Kuda otprawit otwet?"
          />
        </div>
        <CustomField
          control={form.control}
          label="Waş email"
          name="email"
          placeholder="Kuda otprawit otwet?"
          area
        />

        <Button type="submit">Otprawit</Button>
      </form>
    </Form>
  );
};

export default ContactsForm;
