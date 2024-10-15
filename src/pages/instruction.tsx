import PageLayout from "@/components/layout/page-layout";
import BgTexture from "@/components/shared/bg-texture";
import WindowPopup from "@/components/shared/window-popup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, scrollTop } from "@/lib/utils";
import { usePopupStore } from "@/store/usePopup";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {};

const Instruction = ({}: Props) => {
  scrollTop();

  const [active, setActive] = useState(false);
  const setMode = usePopupStore().setMode;

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
      <section className="text-center relative shadow-bottom h-[976px] xl:h-[900px] xl:w-[1200px] px-4 xl:px-0 py-8">
        <BgTexture className='xl:bg-[url("/images/faq/register-shape1.svg")] bg-[url("/images/faq/register-mob-shape.svg")] xl:register-path register-mob-path' />

        <div className="xl:w-[640px] mx-auto flex flex-col gap-8">
          <h2 className="h2 kaushan">Kak zaregistrirowatsýa</h2>

          <div
            className={cn(
              "leading-[150%] transition-opacity",
              active && "opacity-50 pointer-events-none"
            )}
          >
            <div className="mb-4 text-[18px] leading-[110%] xl:leading-[150%] font-medium xl:font-normal xl:text-[24px]">
              1 shag
            </div>
            <h4 className="font-semibold mb-2 text-[20px] xl:text-[24px]">
              Vvedite vash email
            </h4>
            <h5 className="xl:text-[18px] text-[16px] font-medium -tracking-wide leading-[145%] mb-6">
              Ukazhite vash deystvuyushchiy adres elektronnoy pochty. On budet
              ispol'zovat'sya dlya vkhoda na sayt i polucheniya vazhnykh
              uvedomleniy.
            </h5>
            <div className="text-[16px] font-medium leading-[150%] mb-2">
              Vvedite email v pole nizhe i nazhmite «Dalee»
            </div>
            <Input
              disabled={active}
              type="text"
              placeholder="Подсказка"
              className="input w-full mb-4"
            />
            <Button
              disabled={active}
              onClick={() => setActive(true)}
              className="w-full"
            >
              Dalee
            </Button>
          </div>

          <div
            className={cn(
              "leading-[150%] transition-opacity",
              !active && "opacity-50 pointer-events-none"
            )}
          >
            <div className="mb-4 text-[18px] leading-[110%] xl:leading-[150%] font-medium xl:font-normal xl:text-[24px]">
              2 shag
            </div>
            <h4 className="font-semibold mb-2 xl:leading-[150%] leading-[140%] text-[20px] xl:text-[24px]">
              Pridumayte parol'
            </h4>
            <h5 className="xl:text-[18px] text-[16px] font-medium -tracking-wide leading-[145%] mb-6">
              Sozdajte parol' dlya vashego akkaunta. Parol' dolzhen soderzhat'
              ne menee 8 simvolov, vklyuchaya bukvy, tsifry i spetsial'nye
              simvoly.
            </h5>

            <div className="text-[16px] font-medium leading-[150%] mb-4">
              <span>Vvedite parol'</span>
              <Input
                disabled={!active}
                type="text"
                placeholder="Подсказка"
                className="input w-full mt-2 "
              />
            </div>
            <div className="text-[16px] font-medium leading-[150%]">
              <span>
                Powtorite parol' i podtverdite ego, zatem nazhmite «Dalee».
              </span>
              <Input
                disabled={!active}
                type="text"
                placeholder="Подсказка"
                className="input w-full mt-2 mb-4"
              />
              <Button
                onClick={() => {
                  setOpen(true);
                  setMode("tost");
                }}
                disabled={!active}
                className="w-full"
              >
                Dalee
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Instruction;
