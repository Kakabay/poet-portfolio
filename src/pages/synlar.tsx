import PageLayout from "@/components/layout/page-layout";
import Pagination from "@/components/shared/pagination";
import SortModal from "@/components/shared/sort-modal";
import SynlarCard from "@/components/shared/synlar-card";
import Tabs from "@/components/shared/tabs";
import { cn } from "@/lib/utils";
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
    id: "all",
  },
  {
    view: "Gutlaglar",
    id: "congr",
  },
];

const Synlar = () => {
  const [active, setActive] = useState(0);

  return (
    <PageLayout
      title="Synlar, ýatlamar, gutlaglar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
    >
      <SortModal />
      <section>
        <div className="flex flex-col gap-10 justify-center transition-all">
          <Tabs array={tabs} setActive={setActive} active={active} />

          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <SynlarCard
                key={i}
                categ={"Synlar"}
                text={
                  "Sozlerin gadymy: çeper ýazgym tölegli poeziýanyň ýaýramaly goýberimi"
                }
                author={"Aýdyn Ataýew"}
                print={"AGU neşirýat, kopiraýter"}
              />
            ))}
          </div>
        </div>
      </section>

      <Pagination />
    </PageLayout>
  );
};

export default Synlar;
