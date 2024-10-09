import PageLayout from "@/components/layout/page-layout";
import Pagination from "@/components/shared/pagination";
import SortModal from "@/components/shared/sort-modal";
import SynlarCard from "@/components/shared/synlar-card";
import Tabs from "@/components/shared/tabs";
import { useState } from "react";

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
  const [active, setActive] = useState(0);

  const [searchValue, setSearchValue] = useState("");

  return (
    <PageLayout
      title="Synlar, ýatlamar, gutlaglar"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
    >
      <SortModal search={searchValue} setSearch={setSearchValue} />

      <section>
        <div className="relative flex flex-col justify-center transition-all">
          {searchValue ? (
            <div className="absolute w-full left-1/2 -translate-x-1/2 top-12 text-center pb-4 h-[50px] border-b border-OUTLINE">
              Po «{searchValue}» zaprosy naýdeno:
            </div>
          ) : (
            <Tabs
              array={tabs}
              setActive={setActive}
              active={active}
              className="absolute top-12 left-1/2 -translate-x-1/2"
            />
          )}

          <div className="grid grid-cols-3 grid-rows-3 mt-[140px] gap-6">
            {data
              .filter((item) => (active === 0 ? item : item.id === active))
              .map((item, i) => (
                <SynlarCard key={i} {...item} />
              ))}
          </div>
        </div>
      </section>

      <Pagination />
    </PageLayout>
  );
};

export default Synlar;
