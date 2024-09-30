import PageLayout from '@/components/layout/page-layout';
import BookCard from '@/components/shared/book-card';

const Books = () => {
  return (
    <PageLayout
      title="Kitaplar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <div className="flex flex-col gap-6 mx-auto">
        <BookCard
          name={'Yzzat'}
          text={
            'Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.'
          }
          link={''}
        />
        <BookCard
          name={'Yzzat'}
          text={
            'Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.'
          }
          link={''}
        />
        <BookCard
          name={'Yzzat'}
          text={
            'Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.'
          }
          link={''}
        />
        <BookCard
          name={'Yzzat'}
          text={
            'Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.'
          }
          link={''}
        />
      </div>
    </PageLayout>
  );
};

export default Books;
