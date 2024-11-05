import PageLayout from "@/components/layout/page-layout";
import { BookCard } from "@/components/shared";
import { scrollTop } from "@/lib/utils";
import { useGetBooks } from "@/query/use-get-books";

const booksData = [
  {
    id: 1,
    link: "",
    name: "Yzzat",
    text: "Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.",
  },
  {
    id: 2,
    link: "",
    name: "Yzzat",
    text: "Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.",
  },
  {
    id: 3,
    link: "",
    name: "Yzzat",
    text: "Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.",
  },
  {
    id: 4,
    link: "",
    name: "Yzzat",
    text: "Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.",
  },
  {
    id: 5,
    link: "",
    name: "Yzzat",
    text: "Hawa, bu hakykatdanam, şeýle. Meşhur çaga lukmany, lukmançylyk ylymlarynyň doktory, zehinli, özboluşly şahyr Ezizgeldi Helleňowy halypalyga ýetişen şahyr diýip atlandyrsak, öte geçdigimiz bolmaz. Çünki, şeýle diýmäge bize onuň soňky ýyllarda ýazan goşgulary esas döredýär.",
  },
];

const Books = () => {
  scrollTop();

  const { data: books } = useGetBooks();

  return (
    <PageLayout
      title="Kitaplar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
    >
      <div className="flex flex-col gap-6 mx-auto">
        {books &&
          books.map((item, i) => (
            <BookCard path={item.image?.path || ""} key={i} {...item} />
          ))}
      </div>
    </PageLayout>
  );
};

export default Books;
