import PageLayout from '@/components/layout/page-layout';

const Poems = () => {
  return (
    <PageLayout title="Täze goşgular" className="gap-12">
      <p className="text-center text-ON_SURFACE_VAR px-[100px]">
        Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo
        napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye
        pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.
      </p>

      <div className="flex gap-6">
        <div className="bg-POEM_PATTERN">DASSAD</div>
      </div>
    </PageLayout>
  );
};

export default Poems;
