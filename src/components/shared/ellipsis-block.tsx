import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import TextRomb from './text-romb';

const data = [
  {
    name: 'Turkmenistan',
  },
  {
    name: 'Sudan (Darfur ülkesi)',
  },
  {
    name: 'Gündogar Ýewropa we Orta Aziya sebitindäki 18 ýurtlar',
  },
  {
    name: 'Ýemen',
  },
  {
    name: 'Keniýa',
  },
  {
    name: 'Malawi',
  },
];

const EllipsisBlock = () => {
  return (
    <>
      <Carousel opts={{ align: 'start' }} className="md:hidden overflow-visible">
        <CarouselContent className="overflow-visible">
          {data.map(({ name }, i) => (
            <CarouselItem className={cn('basis-[296px] overflow-visible', 6 !== i + 1 && 'mr-4')}>
              <TextRomb key={i} text={name} ellips></TextRomb>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="hidden xl:flex flex-col gap-12 relative">
        <img src="/images/about/dash-arrow-big.svg" alt="" className="absolute top-[30.5%]" />
        <img
          src="/images/about/dash-arrow-big.svg"
          alt=""
          className="absolute right-0 top-[32.5%] -rotate-[180deg]"
        />

        <div className="flex gap-6 relative">
          <TextRomb ellips text="Turkmenistan" />
          <img
            src="/images/about/dash-arrow.svg"
            alt=""
            className="absolute left-[27%] -top-[12%] -rotate-[35deg]"
          />
          <TextRomb className="-mt-10" ellips text="Sudan (Darfur ülkesi)" />
          <img
            src="/images/about/dash-arrow.svg"
            alt=""
            className="absolute bottom-4 right-[30%] -rotate-[180deg]"
          />

          <TextRomb ellips text="Gündogar Ýewropa we Orta Aziya sebitindäki 18 ýurtlar" />
          <img
            src="/images/about/dash-arrow.svg"
            alt=""
            className="absolute bottom-4 right-[30%] -rotate-[180deg]"
          />
        </div>

        <div className="flex gap-6 relative">
          <TextRomb ellips text="Malawi" />
          <img
            src="/images/about/dash-arrow.svg"
            alt=""
            className="absolute bottom-[11%] right-[26.5%] -rotate-[210deg]"
          />

          <TextRomb className="mt-10" ellips text="Keniýa" />
          <img
            src="/images/about/dash-arrow.svg"
            alt=""
            className="absolute top-[7%] left-[29.5%]"
          />

          <TextRomb ellips text="Ýemen" />
        </div>
      </div>

      <div className="hidden md:block xl:hidden relative h-[540px]">
        <TextRomb
          ellips
          text="Sudan (Darfur ülkesi)"
          className="absolute top-0 left-1/2 -translate-x-1/2"
        />
        <img
          src="/images/about/ellipsis/arrow-top-left.svg"
          className="absolute top-[30px] left-[52px]"
        />

        <TextRomb ellips text="Turkmenistan" className="absolute left-0 top-[126px]" />
        <TextRomb ellips text="Ýemen" className="absolute right-0 bottom-[126px]" />
        <img
          src="/images/about/ellipsis/arrow-bottom-right.svg"
          className="absolute bottom-[30px] right-[52px]"
        />

        <img
          src="/images/about/ellipsis/arrow-center.svg"
          className="absolute left-[304px] top-1/2 -translate-y-1/2"
        />
        <img
          src="/images/about/ellipsis/arrow-center-right.svg"
          className="absolute right-[304px]  top-1/2 -translate-y-1/2"
        />

        <TextRomb
          ellips
          text="Gündogar Ýewropa we Orta Aziya sebitindäki 18 ýurtlar"
          className="absolute right-0 top-[126px]"
        />
        <img
          src="/images/about/ellipsis/arrow-top-right.svg"
          className="absolute top-[30px] right-[52px]"
        />

        <TextRomb ellips text="Malawi" className="absolute left-0 bottom-[126px]" />
        <img
          src="/images/about/ellipsis/arrow-bottom-left.svg"
          className="absolute bottom-[30px] left-[52px]"
        />

        <TextRomb ellips text="Keniýa" className="absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div>
    </>
  );
};

export default EllipsisBlock;
