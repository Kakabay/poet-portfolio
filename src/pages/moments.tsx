import PageLayout from '@/components/layout/page-layout';
import BgTexture from '@/components/shared/bg-texture';
import MomentsCard from '@/components/shared/moments-card';

const Moments = () => {
  return (
    <PageLayout
      title={'Pursatlar'}
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <div className="relative shadow-bottom py-12 px-6">
        <BgTexture className="bg-[url('/images/moments/1-shape.svg')] moments-1-path" />

        <div className="grid grid-cols-3 grid-rows-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <MomentsCard key={i} img={'/images/moments/moments-img.png'} title={'Zagolovok'} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Moments;
