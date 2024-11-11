import PageLayout from "@/components/layout/page-layout";
import PoemSwitch from "@/components/shared/poem-switch";
import SectionLine from "@/components/shared/section-line";
import { useGetPinPoems } from "@/query/use-get-pin-poems";
import { useGetPoems } from "@/query/use-get-poems";
import { useGetPoemsSingle } from "@/query/use-get-poems-single";
import poetService from "@/services/poet.service";
import { usePathStore } from "@/store/usePathname";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const poem = [
  {
    text: `Giň eýwanyň diwaryndan asylan, 
    Gabat garşysynda eýwan gapylaň. 
    Iler göze, hol ýokarda dakylan, 
    Kakamyň sagady, 
    Ýaňly sagady.`,
  },
  {
    text: `Ulyň-kiçiň gözi mydam ondady, 
    “Jyk, jyk” sesi gulagmyzda, aňdady. 
    Wagty “aýdýan” ol ajaýyp jaňdady, 
    Kakamyň sagady, 
    Jaňly sagady.`,
  },
  {
    text: `Biziň kalba hemişelik dolupdy, 
    Ýol görkezýän ýol beledi bolupdy. 
    Sadalygy ýüreklere salypdy, 
    Kakamyň sagady, 
    Zaňly sagady.`,
  },
  {
    text: `Dolansadym ýene şol ajap döwre, 
    Many paýlan, mazmun beren bu ömre.
    Ajaýyp arzuwlar gelsin bu köňle, 
    Kakamyň sagady, 
    Şanly sagatdy`,
  },
];

const PoemsSingle = () => {
  const { id } = useParams();
  const poemId = Number(id);
  const { data: poems } = useGetPoems();

  const { data } = useGetPoemsSingle(Number(id || 1));
  const info = data || [];

  const setPath = usePathStore((state) => state.setPath);

  const { data: pinItems } = useGetPinPoems();

  const isPinned = pinItems?.pinned_poems.some((item) => item.id === poemId);

  useEffect(() => {
    setPath("poem");

    return () => setPath("");
  }, []);

  console.log(isPinned);

  const onStar = async () => {
    try {
      if (!isPinned) {
        await poetService.postPoem({ poem_id: poemId });
      } else {
        await poetService.unPinPoem({ poem_id: poemId });
      }
    } catch (error) {
      alert(error);
    }
  };

  const currentIndex =
    poems?.findIndex((poem) => poem.id === poemId) || poemId - 1;
  const prevPoemName = poems?.[currentIndex - 1]?.poem_name;
  const nextPoemName = poems?.[currentIndex + 1]?.poem_name;

  console.log(nextPoemName);

  return (
    <PageLayout
      onStar={onStar}
      title={info[0]?.poem_name}
      className="xl:gap-12 gap-8 container"
      star={isPinned ? "active" : "none"}
      audio
    >
      <section className="container">
        <div className="flex flex-col gap-4 xl:gap-12 md:gap-6 text-[16px] xl:text-[20px] leading-[140%] text-ON_SURFACE_VAR">
          {info[0]?.couplets_poem.map(({ textarea1 }, i) => (
            <p key={i} className="md:flex-[0_1_50%]">
              {textarea1}
            </p>
          ))}
        </div>
      </section>

      <SectionLine />

      <section className="container">
        <div className="flex flex-col text-16 gap-4 xl:gap-6 xl:w-[400px] md:w-[372px] !font-normal mx-auto xl:text-[20px]">
          {poem.map(({ text }, i) => (
            <p key={i}>{text}</p>
          ))}
          <div className="flex justify-end">
            <h4 className="text-right xl:w-[140px] text-[14px] leading-[140%] text-ON_SURFACE_VAR xl:font-medium">
              {info[0]?.place_poem}
            </h4>
          </div>
        </div>

        <div className="container flex justify-center xl:mt-16 mt-8">
          <div className="border pt-4 px-4 border-OUTLINE w-fit rounded-[4px]">
            <h5 className="text-16 font-semibold">Kakamyň sagady</h5>
            <audio
              id="player"
              controls
              src="/images/sound.mp3"
              className="bg-transparent"
            />
          </div>
        </div>

        <SectionLine className="xl:mt-16 xl:mb-12 my-8" />

        <div className="flex gap-4 md:gap-8 xl:gap-0 items-center xl:justify-between">
          <PoemSwitch
            link={`/poems/${poemId - 1}`}
            disable={poemId === 1}
            prev
            name={prevPoemName || poems?.[0]?.poem_name || ""}
          />
          <PoemSwitch
            link={`/poems/${poemId + 1}`}
            disable={poemId === poems?.length}
            name={nextPoemName || poems?.[5]?.poem_name || ""}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default PoemsSingle;
