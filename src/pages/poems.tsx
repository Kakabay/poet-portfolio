import PageLayout from "@/components/layout/page-layout";
import Pagination from "@/components/shared/pagination";
import PoemsItem from "@/components/shared/poems-item";
import SortModal from "@/components/shared/sort-modal";
import { cn, scrollTop } from "@/lib/utils";
import { usePoemsStore } from "@/store/usePoems";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Ýaşyl Tugly Türkmenistan",
  },
  {
    id: 2,
    name: "Gel, kalbym, Gel, gürleşeli!",
  },
  {
    id: 3,
    name: "Ýürek bilen sorag-jogap",
  },
  {
    id: 4,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 5,
    name: "Ýaşyl Tugly Türkmenistan",
  },
  {
    id: 6,
    name: "Gel, kalbym, Gel, gürleşeli!",
  },
  {
    id: 7,
    name: "Ýürek bilen sorag-jogap",
  },
  {
    id: 8,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 9,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 10,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 11,
    name: "Ýaşyl Tugly Türkmenistan",
  },
  {
    id: 12,
    name: "Gel, kalbym, Gel, gürleşeli!",
  },
  {
    id: 13,
    name: "Ýürek bilen sorag-jogap",
  },
  {
    id: 14,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 15,
    name: "Ýaşyl Tugly Türkmenistan",
  },
  {
    id: 16,
    name: "Gel, kalbym, Gel, gürleşeli!",
  },
  {
    id: 17,
    name: "Ýürek bilen sorag-jogap",
  },
  {
    id: 18,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 19,
    name: "Ýaşyl Tugly Türkmenistan",
  },
  {
    id: 20,
    name: "Gel, kalbym, Gel, gürleşeli!",
  },
  {
    id: 21,
    name: "Ýürek bilen sorag-jogap",
  },
  {
    id: 22,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 23,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 24,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 25,
    name: "Ýaşyl Tugly Türkmenistan",
  },
  {
    id: 26,
    name: "Gel, kalbym, Gel, gürleşeli!",
  },
  {
    id: 28,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 29,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 30,
    name: "Gyşdan soňra bahar gelýär!",
  },
  {
    id: 27,
    name: "Ýürek bilen sorag-jogap",
  },
];

const Poems = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  scrollTop(currentPage);

  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState({
    id: "new",
    view: "Snaçala nowye",
  });

  const perPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const displayedData = filterData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const sortData = [...displayedData].reverse();

  const favorites = usePoemsStore().favorites;

  const getSortData = () => (sort.id === "old" ? sortData : displayedData);

  return (
    <PageLayout
      title="Täze goşgular"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="xl:gap-[64px] gap-8"
    >
      <SortModal
        search={searchValue}
        setSearch={setSearchValue}
        sort={sort}
        setSort={setSort}
      />

      <div className="flex flex-col gap-8 relative">
        {searchValue.length > 0 && filterData && (
          <div
            className={cn(
              "w-full mx-auto text-[18px] xl:text-[24px] text-center pb-4 h-[50px]",
              filterData.length !== 0 && "border-b border-OUTLINE"
            )}
          >
            {filterData.length > 0
              ? `Po «${searchValue}» zaprosy naýdeno:`
              : "Niçego ne naýdeno!"}
          </div>
        )}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 gap-6 xl:w-[948px] mx-auto">
          {getSortData().map((item, i) => (
            <PoemsItem
              key={i}
              active={favorites.some((obj) => obj.id === item.id)}
              {...item}
            />
          ))}
        </div>

        {filterData.length > 0 && (
          <Pagination
            perPage={perPage}
            currentPage={currentPage}
            totalPages={filterData.length}
            onChangePage={handlePageChange}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Poems;
