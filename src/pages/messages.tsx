import PageLayout from "@/components/layout/page-layout";
import CommentCard from "@/components/shared/comment-card";
import Pagination from "@/components/shared/pagination";
import { Button } from "@/components/ui/button";

const Messages = () => {
  return (
    <PageLayout
      title="Teswirler"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-12"
    >
      <div className="">
        <div className="mx-auto w-[892px] flex flex-col gap-6">
          {[...Array(8)].map((_, i) => (
            <CommentCard
              key={i}
              name={"radzhapov"}
              date={"10.09.2024 ý."}
              text={
                "Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli. Blagodaryu tebya za tvoyu nepovtorimuyu poeziyu, kotoraya napolnyayet zhizn. Poet, tvoye tvorchestvo - istinnoye volshebstvo, kotoroye perenosyat menya v mir krasoty i glubiny chuvstv. Tvoyi stikhi slovno kapli rosy na lepestkakh tsvetov, probuzhdayushchiye vo mne novyye emotsii i mysli."
              }
            />
          ))}
        </div>
        <Pagination className="mt-8 mb-16" />
        <div className="flex justify-center">
          <Button className="px-6">Ostawit swoý kommentariý</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Messages;
