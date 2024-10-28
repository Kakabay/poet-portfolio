import PageLayout from "@/components/layout/page-layout";
import BgTexture from "@/components/shared/bg-texture";
import RegisterForm from "@/components/shared/register-form";
import WindowPopup from "@/components/shared/window-popup";
import { scrollTop } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Instruction = () => {
  scrollTop();

  const [open, setOpen] = useState(false);

  return (
    <PageLayout
      title="Muşdaklar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
    >
      <AnimatePresence>
        {open && <WindowPopup setActive={setOpen} />}
      </AnimatePresence>

      <section className="text-center relative shadow-bottom h-[976px] xl:h-[900px] md:h-[884px] xl:w-[1200px] px-4 xl:px-0 py-8">
        <BgTexture className='xl:bg-[url("/images/faq/register-shape1.svg")] md:bg-[url("/images/faq/register-med-shape.svg")] bg-[url("/images/faq/register-mob-shape.svg")] xl:register-path md:register-med-path register-mob-path' />

        <RegisterForm />
      </section>
    </PageLayout>
  );
};

export default Instruction;
