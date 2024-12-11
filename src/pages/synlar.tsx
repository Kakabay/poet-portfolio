import PageLayout from "@/components/layout/page-layout";
import Pagination from "@/components/shared/pagination";
import SortModal from "@/components/shared/sort-modal";
import SynlarCard from "@/components/shared/synlar-card";
import Tabs from "@/components/shared/tabs";
import { cn, scrollTop } from "@/lib/utils";
import { useGetReviews } from "@/query/use-get-reviews";
import { useGetUserNotifications } from "@/query/use-get-user-notifications";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const tabs = [
  {
    name: "Wsýo",
    id: 0,
  },
  {
    name: "Synlar",
    id: 1,
  },
  {
    name: "Ýatlamar",
    id: 2,
  },
  {
    name: "Gutlaglar",
    id: 3,
  },
];

const Synlar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  scrollTop(currentPage);

  const [active, setActive] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const perPage = 3;
  const [sort, setSort] = useState({
    id: "new",
    view: "Snaçala nowye",
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [active]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data: reviews } = useGetReviews();

  const { data } = useGetUserNotifications();
  console.log(data);

  const filteredData =
    (reviews &&
      reviews.filter(
        (item) =>
          (active === 0 && item) ||
          (active === 1 && item.reviews_category_id === 1) ||
          (active === 2 && item.reviews_category_id === 2) ||
          (active === 3 && item.reviews_category_id === 3)
      )) ??
    [];

  console.log(filteredData);

  const sortData = [...filteredData].reverse();

  const getSortData = () => (sort.id === "new" ? filteredData : sortData);

  const displayedData = getSortData().slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <PageLayout
      title="Synlar, ýatlamar, gutlaglar"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
    >
      <SortModal
        search={searchValue}
        setSearch={setSearchValue}
        sort={sort}
        setSort={setSort}
      />
      <section>
        <div className="relative flex flex-col justify-center transition-all">
          {searchValue ? (
            <div
              className={cn(
                "absolute w-full left-1/2 -translate-x-1/2 xl:top-12 top-6 text-center pb-4 h-[50px]",
                filteredData.length > 0 && "border-b border-OUTLINE"
              )}
            >
              {filteredData.length > 0
                ? `Po «${searchValue}» zaprosy naýdeno:`
                : "Niçego ne naýdeno!"}
            </div>
          ) : (
            <Tabs
              renderName={(item) => item.name}
              array={tabs}
              setActive={setActive}
              active={active}
              className="absolute xl:top-12 top-6 left-1/2 -translate-x-1/2"
            />
          )}

          <div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 mt-[100px] xl:mt-[140px] gap-6">
            <AnimatePresence>
              {displayedData.map((item, i) => (
                <SynlarCard categ={"Synlar"} key={i} {...item} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {displayedData.length > 0 &&
          displayedData.length < getSortData().length && (
            <Pagination
              className="mt-8"
              currentPage={currentPage}
              totalPages={getSortData().length}
              perPage={perPage}
              onChangePage={handlePageChange}
            />
          )}
      </section>
    </PageLayout>
  );
};

export default Synlar;
