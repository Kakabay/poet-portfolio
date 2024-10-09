import PageLayout from "@/components/layout/page-layout";
import Pagination from "@/components/shared/pagination";
import PoemsItem from "@/components/shared/poems-item";
import SortModal from "@/components/shared/sort-modal";
import { useState } from "react";

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
  const [searchValue, setSearchValue] = useState("");
  const [notFound, setNotFound] = useState(false);

  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-[64px]"
    >
      <SortModal search={searchValue} setSearch={setSearchValue} />

      <div className="flex flex-col gap-8 relative">
        {searchValue && (
          <div className="w-full mx-auto  text-center pb-4 h-[50px] border-b border-OUTLINE">
            Po «{searchValue}» zaprosy naýdeno:
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 w-[948px] mx-auto">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, i) => (
              <PoemsItem key={i} id={"1"} {...item} />
            ))}
        </div>

        <Pagination />
      </div>
    </PageLayout>
  );
};

export default Poems;
