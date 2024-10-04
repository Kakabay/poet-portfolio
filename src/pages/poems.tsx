import PageLayout from "@/components/layout/page-layout";
import BgTexture from "@/components/shared/bg-texture";
import PoemsItem from "@/components/shared/poems-item";
import PoemsModal from "@/components/shared/poems-modal";
import SortModal from "@/components/shared/sort-modal";

const Poems = () => {
  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-12"
    >
      <div className="flex gap-6">
        <SortModal small />

        <div className="relative shadow-bottom h-[800px] flex-[0_0_892px] px-6 py-12">
          <BgTexture className="bg-[url('/images/poems/2-shape.svg')] poems-2-path" />

          <div className="grid grid-cols-2 grid-rows-10 gap-y-4 gap-x-6">
            <PoemsItem id={undefined} />
            <PoemsItem id={undefined} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Poems;
