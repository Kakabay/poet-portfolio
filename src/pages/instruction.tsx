import PageLayout from '@/components/layout/page-layout';
import BgTexture from '@/components/shared/bg-texture';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {};

const Instruction = ({}: Props) => {
  return (
    <PageLayout
      title="Muşdaklar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <section className="text-center relative shadow-bottom">
        <BgTexture className='bg-[url("/images/faq/register-shape1.svg")] register-path' />
        <div className="w-[640px] mx-auto flex flex-col gap-12 pt-12 pb-14">
          <h2 className="h2 kaushan">Kak zaregistrirowatsýa</h2>
          <div className="leading-[150%] mb-2">
            <div className="mb-4">1 shag</div>
            <h4 className="font-semibold mb-2">Vvedite vash email</h4>
            <h5 className="text-[18px] leading-[145%] mb-6">
              Ukazhite vash deystvuyushchiy adres elektronnoy pochty. On budet ispol'zovat'sya dlya
              vkhoda na sayt i polucheniya vazhnykh uvedomleniy.
            </h5>
            <div className="text-[16px] font-medium leading-[150%] mb-2">
              Vvedite email v pole nizhe i nazhmite «Dalee»
            </div>
            <Input type="text" placeholder="Подсказка" className="input w-full mb-4" />
            <Button className="w-full">Dalee</Button>
          </div>

          <div className="leading-[150%] opacity-50">
            <div className="mb-4">2 shag</div>
            <h4 className="font-semibold mb-2">Pridumayte parol'</h4>
            <h5 className="text-[18px] leading-[145%] mb-6">
              Sozdajte parol' dlya vashego akkaunta. Parol' dolzhen soderzhat' ne menee 8 simvolov,
              vklyuchaya bukvy, tsifry i spetsial'nye simvoly.
            </h5>
            <div className="text-[16px] font-medium leading-[150%] mb-4">
              <span>Vvedite parol'</span>
              <Input type="text" placeholder="Подсказка" className="input w-full mt-2 mb-4" />
            </div>
            <div className="text-[16px] font-medium leading-[150%]">
              <span>Powtorite parol' i podtverdite ego, zatem nazhmite «Dalee».</span>
              <Input type="text" placeholder="Подсказка" className="input w-full mt-2 mb-4" />
              <Button className="w-full">Dalee</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Instruction;
