import PageLayout from "@/components/layout/page-layout";
import BorderImg from "@/components/shared/border-img";
import InfoBlock from "@/components/shared/info-block";
import SectionLine from "@/components/shared/section-line";
import TextRomb from "@/components/shared/text-romb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn, scrollTop } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

const data = [
  {
    name: "Turkmenistan",
  },
  {
    name: "Sudan (Darfur ülkesi)",
  },
  {
    name: "Gündogar Ýewropa we Orta Aziya sebitindäki 18 ýurtlar",
  },
  {
    name: "Ýemen",
  },
  {
    name: "Keniýa",
  },
  {
    name: "Malawi",
  },
];

const About = () => {
  // scrollTop();
  const desktop = useMediaQuery("(min-width: 1280px)");

  return (
    <PageLayout
      text="Men bu Internet sahypany özüniň hem mähriban ýanýoldaşymyň 65 ýyl ýubileýine bagyşlaýaryn.
        Men öz durmuş ýolum täze sepgidine aralaşýan sebäbi men hormatly dynç alşa çykýaryn."
      title="Özüm hakda kelam agyz"
      className="xl:gap-12 gap-8 pb-[30px] container"
    >
      <BorderImg
        className="max-w-[616px] max-h-[340px] mx-auto"
        img="/images/about/suprugi.png"
      />

      <SectionLine />

      <section className="flex flex-col gap-6 xl:gap-12">
        <h2 className="h2 kaushan xl:text-center pr-4">
          Ynha meniň geçen durmuş ýolum:
        </h2>

        <div className="flex xl:flex-row flex-col xl:gap-6 items-center relative">
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
      </section>

      <SectionLine />

      <InfoBlock
        title="Çagalyk we mekdep ýyllarym"
        text="Men 1960-njy ýylyň 7-nji martynda Mary welaýatynyň, Mary etrabynyň “Ýeňiş” daýhan  birleşiginde, häzirki Akmyrat Hümmedow adyndaky geňeşlikde daýhan maşgalasynda dünýä indim. 1977-nji ýylda şol geňeşlikdäki 17-nji orta mekdebi Taryp haty bilen tamamladym. Mekdepde okan döwrümde, okuwdan daşary sport, köpçülik işlerine işeňňir gatnaşdym. Çärelerde dürli şahyrlaryň goşgularyny höwes bilen okamagy başarýanam bolsa, kalbymda çaga lukmany bolmak höwesi gün-günden artýardy. Mekdepde ýazan düzmelerimiň 75 göterimine golaýyny diňe şol mowzuga bagyşlap ýazypdym."
        rombs
      />

      <InfoBlock
        title="Talyplyk ýyllarym"
        arr={[
          "Kalpda joşýan şol höwes meni gününe goýmaýardy. Mekdebi tamamlan badyma, Aşgabada gaýtdym. Häzirki Myrat Garryýew adyndaky Türkmen döwlet lukmançylyk uniwersitetine (öňki Halklaryň Dostlugy ordenli Türkmen döwlet lukmançylyk institutyna) çaga lukmany ugrundan okuwa girdim. Instituty 1983-nji ýylda tapawutlanan diplom bilen tamamladym. Institutyň Alymlar geňeşi meni institutda kliniki ordinaturada alyp galmaly diýen netije çykardy. Şeýdibem, men özümiň gazanan bilimimi, hünärimi näsag çagalara ýokary hilli hyzmat etmane gönükdirdim. Meniň başarnygymy görüp, meni mugallymlarym talyplara ders bermäge hem-de kafedranyň ylmy-barlag işine gatnaşmaga giňden goldaw berdiler.",
          "Indi men diňe bir näsagy bejermän, eýsem keselleriň döreýşini öwrenip, olaryň köpçülikleýin öňüni almagyň ýoluny tapmaga erjellik bilen ýapyşýardym.",
        ]}
        rombs
      />

      <InfoBlock
        title="Lukmançylyk we lukmançylyk ylmyna içgin girişen döwrüm"
        text="Şeýdibem men doga wirus ýokuşmalary boýunça ylmy işler alyp bardym. 1983-1988-nji ýyllarda öňki SSSR-iň Lukmançylyk ylymlary akademiýasynyň ýanyndaky Pediýatriýa institutynda (Moskwa şäheri) aspiranturada okadym hem-de “lukmançylyk ylymlarynyň kandidaty” diýen ylmy derejäni aldym. 1988-1991-nji ýyllarda,  Eneler we Çagalar baradaky ylmy-kliniki merkezde kiçi, soňra uly ylmy işgär wezipelerinde işledim, özümiň ylmy işimi dowam etdim hem-de gapdalyndan talyplara neonatalogiýa dersinden tälim berdim. 1991-1993-nji ýylarda öňki SSSR-iň Lukmançylyk ylymlary akademiýasynyň ýanyndaky pediýatriýa institutynda (Moskwa şäheri) doktorlyk dissertasiyasynyň üstünde işledim. 1993-nji ýylda “Lukmançylyk ylymlarynyň doktory” diýen ylmy derejäni aldym. 1993-1997 ýyllarda, Eneler we çagalar baradaky ylmy-kliniki merkezde baş ylmy işgär, bölüm müdiri, merkeziň direktorynyň ylmy işler baradaky orunbasary wezipelerinde işledim."
        img="/images/about/doctor.png"
        imgClassName="md:w-[286px] size-full md:h-[420px]"
        rombs
      />

      <InfoBlock
        img="/images/about/portret.png"
        imgClassName="md:w-[286px] md:h-[309px] size-full"
        title="Birleşen Milletler Guramasynyň Ilat Gaznasynda işlän döwrüm"
        text="1997-nji ýylda Türkmenistanyň Saglygy goraýyş we derman senagaty ministrliginiň ugratmasy bilen Türkmenistandaky Birleşen Milletler Guramasynyň (BMG) Ilat Gaznasynyň “Nesil saglygy” tassyklamasynda uly hünärmen wezipesinde işläp başladym. 1998-nji ýylda Maksatnamanyň Utgaşdyryjysy (National Programme Officer) we 2003-nji ýyldan başlap bolsa Ilat Gaznasynyň Türkmenistandaky Ýerine ýetiriji  wekili (Assistant Representative) wezipelerinde işledim. Şol döwürlerde BMG-niň Ilat Gaznasy Türkmenistanyň Saglygy goraýyş we derman senagaty ministrligi bilen “Saglyk” döwlet maksatnamasynyň çäginde birnäçe taslamalary durmuşa geçirmek bilen, ene ölüm-ýitiminiň azaldylmagyna, maşgalanyň nesil saglygyny goramak baradaky gullugy döretmäge ýardam berýärdi."
        arr={[
          "2007-nji ýyldan bäri men BMG-niň Ilat Gaznasynyň halkara işgäri. 2007-2010-njy ýyllar aralygynda, Sudan döwletiniň Darfur ülkesinde dowamly raýatlyk uruşdan ejir çekýän ilata ynsanperwerlik kömegini bermäge gatnaşdym. Men Ilat Gaznasynyň şol ýurtdaky edarasynyň Ynsanperwerlik işlerini utgaşdyryjysy wezipesinde işledim.",
          "2010 - 2015-nji ýyllarda Ilat Gaznasynyň Gündogar Yewropa we Orta Aziýa sebiti boýunça geňeşçisi (Gazagystanyň Almata şäheri) bolup işledim. ",
          "2015-nji ýylyň fewral aýynda Ilat Gaznasynyň Ýemendaki Wekiliniň Orunbasary bolup işläp başladym. 2015-ji ýýylyň 26-njy martynda başlanan bombalaşykly uruş wagty ejir çeken ilata Ilat Gaznasynyň ynsanperwerlik kömegini bermek baradaky maksatnamasyna ýolbaşçylyk edip, 2016-2017- nji ýýyllar arasynda, onuň daşyndan Ilat Gaznasynyň Ýemendäki Wekiliň işini alyp baryjy bolup işledim.",
          "2018-nji ýylyň aprel aýyndan tä 2022-nji ýylyň oktýabr aýyna  çenli, men Ilat Gaznasynyň Keniýadaky Wekiliniň orunbasary bolup işledim we 47 million ilatly ýurda niýetlenen maksatnama ýolbaşçylyk etdim.",
          "2022-nji ýylyň oktýabr aýynyň ortasyndan tä zähmet rugsadyna çykýançam, Ilat Gaznasynyň Malawidäki Wekiliniň orunbasary bolup işledim we 17 million ilatly ýurda niýetlenen maksatnama ýolbaşçylyk etdim.",
          "2025-nji ýylyň mart aýynyň ahyrynda men hormatly dynç alşa çykdym.",
        ]}
      />

      <SectionLine />

      <section className="flex flex-col overflow-visible">
        <h2 className="h2 kaushan xl:mb-20 mb-6 text-center">
          Ynha meniň geçen durmuş ýolum:
        </h2>

        <Carousel
          opts={{ align: "start" }}
          className="xl:hidden overflow-visible"
        >
          <CarouselContent className="overflow-visible">
            {data.map(({ name }, i) => (
              <CarouselItem
                className={cn(
                  "basis-[296px] overflow-visible",
                  6 !== i + 1 && "mr-4"
                )}
              >
                <TextRomb key={name} text={name} ellips></TextRomb>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden xl:flex flex-col gap-12 relative">
          <img
            src="/images/about/dash-arrow-big.svg"
            alt=""
            className="absolute top-[30.5%]"
          />
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

            <TextRomb
              ellips
              text="Gündogar Ýewropa we Orta Aziya sebitindäki 18 ýurtlar"
            />
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
      </section>

      <SectionLine />

      <section className="flex flex-col xl:gap-6 gap-2 text-[16px] leading-[150%] xl:text-[24px] xl:leading-[135%]">
        <div className="flex flex-col xl:gap-6 gap-2">
          <p>
            Meniň 90-dan gowrak ylmy makalalarym we 3 sany ylmy kitabym dürli
            ýüllarda çap edildi.
          </p>
          <p>
            Meniň mähriban käbäm - Dürli Hümmet gyzy goşgyny ýatdan düzýärdi we
            ony şirin labzy bilen aýdýardy. Şol sebäpli ejem janyň ýany, ol
            nirede bolsa bolaýsyn, köp adamlydy. “Menem ejem ýaly goşgy ýazyp
            bilermikäm” diýip kän pikir edýärdim. Meniň döredijiligimiň şol
            çeşmeden gaýdýandygy ikuçsyzdyr.
          </p>
          <p>
            Meniň halypam Türkmenistanyň Halk ýazyjysy Gowşut Şamyýew. Biz
            obadaşam bolsak, men Gowşut kakamyň goşgularyny ürç edip okaýanam
            bolsa, biziň ýakyn gatnaşyklarmyz 1990-njy ýyllarda Parahat
            şäherçesine göçüp gelenimizden soň başlanypdy.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p>
            Meniň goşgulary Türkmenistanyň gazet-žurnallarynda yzygiderli çap
            edilýär.
          </p>
          <p>
            Meniň Türkmen telewideniýesinde alyp baran “Körpejeleriň saglygy”
            gepleşigim ilat arasynda, esasanam, ýaş eneleriň arasynda uly
            gyzyklanma tapypdy. Şol sebäpli, telegörüjileriň islegini nazarda
            alyp, men “Körpejeleriň saglygy – Ýaş eneler üçin sözlük” atly kitap
            ýazdym hem ilata hödürledim.
          </p>
          <p>
            Mähribanym Enejan ikimiziň dört çagamyz hem-de 10 agtygmyz bar.{" "}
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
