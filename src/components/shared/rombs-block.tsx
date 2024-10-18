import { useMediaQuery } from "usehooks-ts";
import TextRomb from "./text-romb";
import { cn } from "@/lib/utils";

const RombsBlock = () => {
  const desktop = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="md:hidden xl:flex flex xl:flex-row flex-col xl:gap-6 items-center relative">
        <div className="flex justify-start w-full xl:w-fit">
          <TextRomb text="Çagalyk we mekdep ýyllarym" />
        </div>
        <img
          src={`/images/about/arrow${desktop ? "" : "-right"}.svg`}
          alt=""
          className="absolute xl:top-0 top-10 xl:left-[13.5%] left-[165px]"
        />
        <div className="flex justify-end w-full xl:w-fit -mt-4">
          <TextRomb text="Talyplyk" />
        </div>

        <img
          src={`/images/about/arrow${desktop ? "-bottom" : "-right"}.svg`}
          alt=""
          className="absolute xl:bottom-0 bottom-[340px] xl:left-[34%] left-1/2"
        />
        <div className="flex justify-start w-full xl:w-fit -mt-4">
          <TextRomb text="Lukmançylyk we lukmançylyk ylmyna içgin girişmek" />
        </div>

        <img
          src={`/images/about/arrow${!desktop ? "-left" : "-bottom"}.svg`}
          alt=""
          className={cn(
            "absolute xl:bottom-0 bottom-[185px] xl:right-[15%] right-[150px]"
          )}
        />

        <div className="flex justify-end w-full xl:w-fit -mt-4">
          <TextRomb text="Birleşen milletler Guramasynyň Ilat Gaznasynda işlän döwrüm" />
        </div>

        <img
          src={`/images/about/arrow${!desktop ? "-left" : ""}.svg`}
          alt=""
          className="absolute xl:top-0 top-[210px] xl:right-[35%] right-[147px]"
        />
        <div className="flex justify-start w-full xl:w-fit -mt-4">
          <TextRomb text="Hormatly dynç alyş" />
        </div>
      </div>

      <div className="xl:hidden hidden md:block relative container h-[300px]">
        <img
          src="/images/about/medium-arrow-bottom.svg"
          className="absolute top-4 left-[130px]"
        />
        <TextRomb
          text="Çagalyk we mekdep ýyllarym"
          className="absolute top-0 left-0"
        />

        <TextRomb text="Talyplyk" className="absolute bottom-0 left-[155px]" />
        <img
          src="/images/about/medium-arrow-top.svg"
          className="absolute bottom-4 left-[275px]"
        />

        <TextRomb
          text="Lukmançylyk we lukmançylyk ylmyna içgin girişmek"
          className="absolute top-0 left-1/2 -translate-x-1/2"
        />
        <img
          src="/images/about/medium-arrow-bottom.svg"
          className="absolute top-4 right-[240px]"
        />

        <TextRomb
          text="Birleşen milletler Guramasynyň Ilat Gaznasynda işlän döwrüm"
          className="absolute bottom-0 right-[155px]"
        />
        <img
          src="/images/about/medium-arrow-top.svg"
          className="absolute bottom-4 right-[86px]"
        />

        <TextRomb
          text="Hormatly dynç alyş"
          className="absolute top-0 right-0"
        />
      </div>
    </>
  );
};

export default RombsBlock;
