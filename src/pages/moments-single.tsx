import PageLayout from "@/components/layout/page-layout";
import BgTexture from "@/components/shared/bg-texture";
import MomentsCard from "@/components/shared/moments-card";

import { cn, scrollTop } from "@/lib/utils";
import { usePathStore } from "@/store/usePathname";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const MomentsSingle = () => {
  scrollTop();

  const setPath = usePathStore().setPath;

  useEffect(() => {
    setPath("moment");

    return () => setPath("");
  }, []);

  return (
    <PageLayout title={"Pursatlar"} className="gap-8">
      <div className="relative w-full xl:h-[504px] shadow-bottom py-8 px-6">
        <BgTexture className="hidden xl:block bg-[url('/images/moments/moments-single-shape.svg')] moments-single-path" />

        <Link to="/moments" className="flex items-center gap-1 mb-8">
          <img src="/images/arrow.svg" />
          <h6 className="text-16 !font-normal text-ON_SURFACE_VAR">
            Wernutsýa nazad
          </h6>
        </Link>

        <div className="flex md:flex-row flex-col xl:gap-6 gap-8">
          <div className="xl:flex-[0_0_675px] xl:h-[379px] xl:bg-[#7A590C]/[16%]">
            <img
              src="/images/poet.png"
              alt="surat"
              className="size-full object-contain"
            />
          </div>

          <div className="flex flex-col -tracking-wide justify-between">
            <div>
              <h4 className="text-[24px] -tracking-wide font-semibold mb-4">
                Luchshie momenty zhizni
              </h4>
              <p className="text-16 !font-normal xl:mb-2 mb-4">
                Na fotoghrafiyi zobrazhen portret poeta. Na perednem plani viden
                muzhchina s vyrazitelnym litcom, vozmozhno, s glyubokimi glazami
                i mudrym vzyglyadom. Yego poza i vyrashcheniye litca mogut
                peredavat' kakuyu-to ymotsiyu ili nastroyeniye, kharakternyye
                dlya poetov - naprimer, zadumchivost', vdokhnoveniye ili
                melan'kholiye. Vozmozhno, na yego litce mozhno uvidet' sledy
                zhiznennogo opyta i razmyshleniy. Fon na fotoghrafiyi mozhet
                byt' spokoinym ili simvolichno otrazhat' yego tvorcheskuyu
                naturu.
              </p>
            </div>

            <h6 className="text-ON_SURFACE_VAR text-[14px] font-semibold leading-[140%]">
              01.09.2024
            </h6>
          </div>
        </div>
      </div>

      <img src="/images/divider.svg" className="w-full md:hidden" />

      <div className="relative xl:block hidden shadow-bottom xl:h-[317px] py-8 px-6">
        <BgTexture className="xl:block hidden bg-[url('/images/moments/moments-single-shape-2.svg')] moments-single-2-path" />

        <Carousel className="md:block hidden">
          <CarouselContent innerClassName="overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <CarouselItem
                className={cn(
                  "basis-[372px] !h-[253px]",
                  6 !== i + 1 && "mr-[18px]"
                )}
                key={i}
              >
                <MomentsCard
                  textureNone
                  img={"/images/moments/moments-img.png"}
                  title={"Zagolovok"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hover:opacity-100" />
          <CarouselPrevious className="hover:opacity-100" />
        </Carousel>
      </div>

      <div className="xl:hidden flex flex-col gap-[44px]">
        <div className="flex xl:hidden flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <MomentsCard
              key={i}
              textureNone
              img={"/images/moments/moments-img.png"}
              title={"Zagolovok"}
              className="!p-0"
            />
          ))}
        </div>
        <Button className="w-fit mx-auto">Zagruzit bolşe</Button>
      </div>
    </PageLayout>
  );
};

export default MomentsSingle;
