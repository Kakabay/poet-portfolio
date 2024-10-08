import PageLayout from "@/components/layout/page-layout";
import Pagination from "@/components/shared/pagination";
import PoemsItem from "@/components/shared/poems-item";
import SortModal from "@/components/shared/sort-modal";

const data = [
  {
    name: "Ýaşyl Tugly Türkmenistan",
  },
  {
    name: "Gel, kalbym, Gel, gürleşeli!",
  },
  {
    name: "Ýürek bilen sorag-jogap",
  },
  {
    name: "Gyşdan soňra bahar gelýär!",
  },
];

const Poems = () => {
  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-12"
    >
      <SortModal />

      <div className="">
        <div className="mb-8 grid grid-cols-2 gap-8 w-[948px] mx-auto">
          {data.map((item, i) => (
            <PoemsItem key={i} id={"1"} {...item} />
          ))}
        </div>

        <Pagination />
      </div>
    </PageLayout>
  );
};

export default Poems;
