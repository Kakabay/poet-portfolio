import PageLayout from '@/components/layout/page-layout';
import BgTexture from '@/components/shared/bg-texture';
import RegisterForm from '@/components/forms/register-form';
import { scrollTop } from '@/lib/utils';

const Register = () => {
  scrollTop();

  return (
    <PageLayout
      title="Muşdaklar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <section className="text-center relative shadow-bottom h-[1412px] xl:h-[1340px] md:h-[1306px] xl:w-[1200px] px-4 xl:px-0 py-8">
        <BgTexture className='xl:bg-[url("/images/faq/register-shape1.svg")] md:bg-[url("/images/faq/register-med-shape.svg")] bg-[url("/images/faq/register-mob-shape.svg")] xl:register-path md:register-med-path register-mob-path' />

        <RegisterForm />
      </section>
    </PageLayout>
  );
};

export default Register;
