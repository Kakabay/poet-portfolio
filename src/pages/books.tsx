import PageLayout from "@/components/layout/page-layout";
import BookCard from "@/components/shared/book-card";

const Books = () => {
  return (
    <PageLayout
      title="Kitaplar"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
    >
      <div className="">
        <BookCard
          name={"Yzzat"}
          text={
            "Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär."
          }
          link={""}
        />
      </div>
    </PageLayout>
  );
};

export default Books;
