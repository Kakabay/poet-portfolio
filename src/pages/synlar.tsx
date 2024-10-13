import PageLayout from "@/components/layout/page-layout";
import Pagination from "@/components/shared/pagination";
import SortModal from "@/components/shared/sort-modal";
import SynlarCard from "@/components/shared/synlar-card";
import Tabs from "@/components/shared/tabs";
import { cn, scrollTop } from "@/lib/utils";
import { ActiveSort } from "@/store/useSynlar";
import { useEffect, useState } from "react";

export const tabs = [
  {
    view: "Wsýo",
    id: "all",
  },
  {
    view: "Synlar",
    id: "comments",
  },
  {
    view: "Ýatlamar",
    id: "moments",
  },
  {
    view: "Gutlaglar",
    id: "congr",
  },
];

const data = [
  {
    categ: "Synlar",
    id: 1,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Ýatlamar",
    id: 2,
    text: "Sozlerin gadymy: çeper ýazgym tölegli ",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Synlar",
    id: 1,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Synlar",
    id: 1,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Ýatlamar",
    id: 2,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Gutlaglar",
    id: 3,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Synlar",
    id: 1,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Ýatlamar",
    id: 2,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
  },
  {
    categ: "Gutlaglar",
    id: 3,
    text: "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi",
    author: "Aýdyn Ataýew",
    print: "AGU neşirýat, kopiraýter",
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

  const filteredData = data.filter((item) =>
    searchValue
      ? item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      : active === 0
      ? item
      : item.id === active
  );

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
              array={tabs}
              setActive={setActive}
              active={active}
              className="absolute xl:top-12 top-6 left-1/2 -translate-x-1/2"
            />
          )}

          <div className="grid grid-cols-1 xl:grid-cols-3 mt-[100px] xl:mt-[140px] gap-6">
            {displayedData.map((item, i) => (
              <SynlarCard key={i} {...item} />
            ))}
          </div>
        </div>
        <Pagination
          className="mt-8"
          currentPage={currentPage}
          totalPages={getSortData().length}
          perPage={perPage}
          onChangePage={handlePageChange}
        />
      </section>
    </PageLayout>
  );
};

export default Synlar;
