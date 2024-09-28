import PageLayout from '@/components/layout/page-layout';
import SortModal from '@/components/shared/sort-modal';

const Comments = () => {
  return (
    <PageLayout
      title="Synlar, ýatlamar, gutlaglar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <SortModal className="w-full" />
    </PageLayout>
  );
};

export default Comments;
