import PageLayout from "@/components/layout/page-layout";
import MomentsCard from "@/components/shared/moments-card";
import Pagination from "@/components/shared/pagination";

const Moments = () => {
  return (
    <PageLayout
      title={"Pursatlar"}
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
    >
      <div className="relative py-12 px-6">
        <div className="grid grid-cols-3 grid-rows-4 gap-8 mb-8">
          {[...Array(12)].map((_, i) => (
            <MomentsCard
              key={i}
              img={"/images/moments/moments-img.png"}
              title={"Zagolovok"}
            />
          ))}
        </div>

        <Pagination />
      </div>
    </PageLayout>
  );
};

export default Moments;
