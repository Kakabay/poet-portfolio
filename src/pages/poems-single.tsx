import PageLayout from '@/components/layout/page-layout';
import PoemSwitch from '@/components/shared/poem-switch';
import SectionLine from '@/components/shared/section-line';
import { usePathStore } from '@/store/usePathname';
import { usePoemsStore } from '@/store/usePoems';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  // scrollTop();

  const setPath = usePathStore().setPath;
  const { id } = useParams();
  const favorites = usePoemsStore().favorites;

  const isFavorite = () => (favorites.some((item) => item.id === Number(id)) ? 'active' : 'none');

  useEffect(() => {
    setPath('poem');

    return () => setPath('');
  }, []);

  return (
    <PageLayout
      title={'Kakamyň sagady'}
      className="xl:gap-12 gap-8 container"
      star={isFavorite()}
      audio>
      <section className="container">
        <div className="flex flex-col gap-4 xl:gap-12 md:gap-6 text-[16px] xl:text-[20px] leading-[140%] text-ON_SURFACE_VAR">
          <p className="md:flex-[0_1_50%]">
            Biz obadaky atam oýmüze 1982-nji ýylyň tomsunda doly göçüpdik. Ol wagtlar men talypdym.
            1983-nji ýylda meniň diplom toýum bilen bile jaý toýuny tutupdyk. Ýöne meniň häzirki
            ýatlamam, Orazberdi kakam bilen Zylyha gelnejemiň meniň kakama “jaýa sowgat” diýip beren
            diwardan asylýan sagady barada. Ol sagat hem owadandy hem oba ýeri üçin geňdi. Biz ol
            sagatlary diňe telewizorda görerdik. Ol sagat eýwana düşýän günden ýalkym alýardy we
            eýwana geň hem ýakymly ýagty saçýardy.
          </p>
          <p className="md:flex-[0_1_50%]">
            Öýe giren myhmanyň ünsüni derrew özüne çekýärdi. Biziň maşgalamyzyň uludan-kiçisine
            bolsa, ol sagadyň aşagynda asylan maýatnigiň yrgyldysy bilen sazlaşykly çykýan “jyk-jyk”
            sesi, her gezek sagat dolanda bolsa, sagat näçe bolan bolsa şonça-da jaň urmagy geň
            galdyrýardy. Soňra bu sesler - sagadyň eýwana berýän ýakymly ýalkymy biziň maşgalamyzyň
            gündelik durmuşynyň bir bölegi bolupdy. Egerde, sagadyň sesi çykmasa, öýde bir zat
            ýetmeýän ýalydy. Ol sagadyň sesini diňläp ulalan çagalaryň özleri indi ene we ata
            boldular. 88 Ylahym, biziň durmuşymyzda bolan şeýle ýakymly ýatlamalar bizi mydama
            halallyga, sadalyga, owadanlyga hem-de ýeneki üstünliklere atarsyn!
          </p>
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
              25-nji aprel, 2020 ýyl, Nairobi, Keniýa.
            </h4>
          </div>
        </div>

        {/* <AudioPlayer /> */}

        <div className="container flex justify-center xl:mt-16 mt-8">
          <div className="border pt-4 px-4 border-OUTLINE w-fit rounded-[4px]">
            <h5 className="text-16 font-semibold">Kakamyň sagady</h5>
            <audio id="player" controls src="/images/sound.mp3" className="bg-transparent"></audio>
          </div>
        </div>

        <SectionLine className="xl:mt-16 xl:mb-12 my-8" />

        <div className="flex gap-4 md:gap-8 xl:gap-0 items-center xl:justify-between">
          <PoemSwitch disable={Number(id) === 1} prev name="Ýaşyl Tugly Türkmenistan " />
          <PoemSwitch disable={Number(id) === 5} name="Ýaşyl Tugly Türkmenistan " />
        </div>
      </section>
    </PageLayout>
  );
};

export default PoemsSingle;
