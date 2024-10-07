import PageLayout from "@/components/layout/page-layout";
import SortModal from "@/components/shared/sort-modal";
import SynlarCard from "@/components/shared/synlar-card";
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
          <div className="flex text-16 items-center border-b transition-all w-fit mx-auto border-OUTLINE">
            {tabs.map((item, i) => (
              <h5
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "px-4 py-2 cursor-pointer relative transition-all "
                  // {
                  //   "after:absolute after:h-0.5 after:bg-OUTLINE_VAR_HIGH after:w-full after:transition-all after:bottom-0 after:left-0":
                  //     active === i,
                  // }
                )}
              >
                <div
                  className={cn(
                    active === i &&
                      "absolute transition-all duration-200 bottom-0 left-0 h-0.5 w-full bg-OUTLINE_VAR_HIGH"
                  )}
                />
                {item.view}
              </h5>
            ))}
          </div>

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
    </PageLayout>
  );
};

export default Synlar;
