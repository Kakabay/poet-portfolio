import PageLayout from '@/components/layout/page-layout';
import BgTexture from '@/components/shared/bg-texture';
import MomentsCard from '@/components/shared/moments-card';

import { cn, scrollTop } from '@/lib/utils';
import { usePathStore } from '@/store/usePathname';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const MomentsSingle = () => {
  scrollTop();

  const setPath = usePathStore().setPath;

  useEffect(() => {
    setPath('moment');

    return () => setPath('');
  }, []);

  return (
    <PageLayout
      title={'Pursatlar'}
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy."
      className="gap-8">
      <div className="relative w-full xl:h-[504px] md:h-[436px] md:shadow-bottom py-8 md:px-6">
        <BgTexture className="hidden md:block xl:bg-[url('/images/moments/moments-single-shape.svg')] md:bg-[url('/images/moments/main-med-shape.svg')] xl:moments-single-path md:moments-main-med-path" />

        <Link to="/moments" className="flex items-center gap-1 xl:mb-8 md:mb-6 mb-8">
          <img src="/images/arrow.svg" />
          <h6 className="text-16 !font-normal text-ON_SURFACE_VAR">Wernutsýa nazad</h6>
        </Link>

        <div className="flex md:flex-row flex-col xl:gap-6 gap-8">
          <div className="xl:flex-[0_0_675px] md:flex-[0_0_420px] xl:h-[379px] md:h-[235px] md:bg-[#7A590C]/[16%]">
            <img src="/images/poet.png" alt="surat" className="size-full object-contain" />
          </div>

          <div className="flex flex-col -tracking-wide justify-between">
            <div>
              <h4 className="text-[24px] md:text-[20px] xl:text-[24px] leading-[140%] -tracking-wide font-semibold xl:mb-4 md:mb-2 mb-4">
                Luchshie momenty zhizni
              </h4>
              <p className="xl:text-16 md:text-[14px] md:leading-[145%] text-16 !font-normal md:mb-2 mb-4">
                Na fotoghrafiyi zobrazhen portret poeta. Na perednem plani viden muzhchina s
                vyrazitelnym litcom, vozmozhno, s glyubokimi glazami i mudrym vzyglyadom. Yego poza
                i vyrashcheniye litca mogut peredavat' kakuyu-to ymotsiyu ili nastroyeniye,
                kharakternyye dlya poetov - naprimer, zadumchivost', vdokhnoveniye ili
                melan'kholiye. Vozmozhno, na yego litce mozhno uvidet' sledy zhiznennogo opyta i
                razmyshleniy. Fon na fotoghrafiyi mozhet byt' spokoinym ili simvolichno otrazhat'
                yego tvorcheskuyu naturu.
              </p>
            </div>

            <h6 className="text-ON_SURFACE_VAR text-[14px] font-semibold leading-[140%]">
              01.09.2024
            </h6>
          </div>
        </div>
      </div>

      <img src="/images/divider.svg" className="w-full md:hidden" />

      <div className="relative md:block hidden shadow-bottom xl:h-[317px] py-8 px-6">
        <BgTexture className="md:block hidden xl:bg-[url('/images/moments/moments-single-shape-2.svg')] md:bg-[url('/images/moments/moments-2-med-shape.svg')] xl:moments-single-2-path moments-2-med-path" />

        <Carousel className="md:block hidden">
          <CarouselContent innerClassName="overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <CarouselItem
                className={cn(
                  'xl:basis-[372px] md:basis-[352px] !h-[253px]',
                  6 !== i + 1 && 'xl:mr-[18px] mr-4',
                )}
                key={i}>
                <MomentsCard
                  textureNone
                  img={'/images/moments/moments-img.png'}
                  title={'Zagolovok'}
                  className="md:!w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hover:opacity-100 hidden xl:flex" />
          <CarouselPrevious className="hover:opacity-100 hidden xl:flex" />
        </Carousel>
      </div>

      <div className="md:hidden flex flex-col gap-[44px]">
        <div className="flex xl:hidden flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <MomentsCard
              key={i}
              textureNone
              img={'/images/moments/moments-img.png'}
              title={'Zagolovok'}
              className="!p-0"
            />
          ))}
        </div>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-fit mx-auto">
          Zagruzit bolşe
        </Button>
      </div>
    </PageLayout>
  );
};

export default MomentsSingle;
