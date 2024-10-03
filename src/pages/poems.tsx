import PageLayout from '@/components/layout/page-layout';
import PoemsModal from '@/components/shared/poems-modal';
import SortModal from '@/components/shared/sort-modal';

const Poems = () => {
  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-12">
      <div className="flex gap-6">
        <SortModal small />
      </div>
    </PageLayout>
  );
};

export default Poems;
