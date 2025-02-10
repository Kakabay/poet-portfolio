import { Spin } from "@/components/shared";
import PoemSwitch from "@/components/shared/poem-switch";
import SectionLine from "@/components/shared/section-line";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { useGetPinPoems } from "@/query/use-get-pin-poems";
import { useGetPoems } from "@/query/use-get-poems";
import { useGetPoemsSingle } from "@/query/use-get-poems-single";
import poetService from "@/services/poet.service";
import { usePathStore } from "@/store/usePathname";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PoemsSingle = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPoemsSingle(Number(id || 1));

  useEffect(() => {
    window.scroll({ behavior: "smooth", top: 0 });
  }, [data]);

  const poemId = Number(id);
  const { data: poems } = useGetPoems();
  const { data: pinned, refetch } = useGetPinPoems();

  const info = data || [];

  const setPath = usePathStore((state) => state.setPath);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPath("poem");

    return () => setPath("");
  }, []);

  const currentIndex =
    poems?.findIndex((poem) => poem.id === poemId) || poemId - 1;

  const prevPoemName = poems?.[currentIndex - 1]?.poem_name;
  const nextPoemName = poems?.[currentIndex + 1]?.poem_name;

  const isPinnedBack = pinned?.pinned_poems.some((item) => item.id === poemId);

  const handlePin = async () => {
    try {
      await poetService.postPoem({ poem_id: Number(id) });
      await refetch();
    } catch (error) {
      console.error("Ошибка при закреплении:", error);
    }
  };

  const handleUnpin = async () => {
    try {
      await poetService.unPinPoem({ poem_id: Number(id) });
      await refetch();
    } catch (error) {
      console.error("Ошибка при откреплении:", error);
    }
  };

  const onStar = async () => {
    try {
      setLoading(true);
      const { toast } = await import("@/hooks/use-toast");

      if (isPinnedBack) {
        await handleUnpin();
        toast({
          title: "Открепленно",
          action: (
            <ToastAction onClick={handlePin} altText="Отмена">
              Отмена
            </ToastAction>
          ),
        });
      } else {
        await handlePin();
        toast({
          title: "Закрепленно",
          action: (
            <ToastAction onClick={handleUnpin} altText="Отмена">
              Отмена
            </ToastAction>
          ),
        });
      }
      setLoading(false);
    } catch (error) {
      console.error("Ошибка при изменении закрепления:", error);
      setLoading(false);
    }
  };

  return (
    <main className={cn("pt-8 xl:pt-12 pb-16 xl:pb-[120px] relative z-30")}>
      <div className="container">
        {!isLoading ? (
          <>
            <div className="flex justify-center items-start gap-4">
              <h1 className="h1 kaushan text-center xl:mb-12 mb-6">
                {info[0]?.poem_name}
              </h1>

              <div className="flex gap-1">
                <button
                  disabled={loading}
                  onClick={onStar}
                  className="disabled:opacity-50"
                >
                  <img
                    className="cursor-pointer p-1"
                    src={
                      !isPinnedBack
                        ? "/images/star.svg"
                        : "/images/star-fill.svg"
                    }
                  />
                </button>
                <img src="/images/play.svg" />
              </div>
            </div>

            <div className={cn("flex flex-col xl:gap-12 gap-8")}>
              <section className="container">
                <div className="flex flex-col gap-4 xl:gap-12 md:gap-6 text-[16px] xl:text-[20px] leading-[140%] text-ON_SURFACE_VAR">
                  <p className="md:flex-[0_1_50%]">{info[0]?.about_poems}</p>
                </div>
              </section>

              {info[0]?.about_poems && <SectionLine />}

              <section className="">
                <div className="flex flex-col text-16 gap-4 xl:gap-6 xl:w-[400px] md:w-[372px] !font-normal mx-auto xl:text-[20px]">
                  <div className="flex flex-col gap-4">
                    {info?.[0]?.couplets_poem.map((item, i) => (
                      <p key={i}>{item.textarea1}</p>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <h4 className="text-right xl:w-[140px] text-[14px] leading-[140%] text-ON_SURFACE_VAR xl:font-medium">
                      {info[0]?.place_poem}
                    </h4>
                  </div>
                </div>

                {/* <div className="container flex justify-center xl:mt-16 mt-8" aria-disabled>
                  <div className="border pt-4 px-4 border-OUTLINE w-fit rounded-[4px]">
                    <h5 className="text-16 font-semibold">Kakamyň sagady</h5>
                    <audio
                      id="player"
                      controls
                      src="/images/sound.mp3"
                      className="bg-transparent"
                    />
                  </div>
                </div> */}

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
            </div>
          </>
        ) : (
          <Spin />
        )}
      </div>
    </main>
  );
};

export default PoemsSingle;
