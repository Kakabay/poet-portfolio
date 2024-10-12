import PageLayout from '@/components/layout/page-layout';
import AudioPlayer from '@/components/shared/audio-player';
import PoemSwitch from '@/components/shared/poem-switch';
import SectionLine from '@/components/shared/section-line';
import { scrollTop } from '@/lib/utils';
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
    <PageLayout title={'Kakamyň sagady'} className="gap-12" star={isFavorite()} audio>
      <section>
        <div className="flex gap-12 text-[20px] leading-[140%] text-ON_SURFACE_VAR">
          <p className="flex-[0_0_50%]">
            Biz obadaky atam oýmüze 1982-nji ýylyň tomsunda doly göçüpdik. Ol wagtlar men talypdym.
            1983-nji ýylda meniň diplom toýum bilen bile jaý toýuny tutupdyk. Ýöne meniň häzirki
            ýatlamam, Orazberdi kakam bilen Zylyha gelnejemiň meniň kakama “jaýa sowgat” diýip beren
            diwardan asylýan sagady barada. Ol sagat hem owadandy hem oba ýeri üçin geňdi. Biz ol
            sagatlary diňe telewizorda görerdik. Ol sagat eýwana düşýän günden ýalkym alýardy we
            eýwana geň hem ýakymly ýagty saçýardy.
          </p>
          <p className="flex-[0_0_50%]">
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

      <section>
        <div className="flex flex-col gap-6 w-[400px] mx-auto text-[20px] mb-4">
          {poem.map(({ text }, i) => (
            <p key={i}>{text}</p>
          ))}
          <div className="flex justify-end">
            <h4 className="text-right w-[140px] text-[14px] leading-[140%] text-ON_SURFACE_VAR font-medium">
              25-nji aprel, 2020 ýyl, Nairobi, Keniýa.
            </h4>
          </div>
        </div>

        <AudioPlayer />

        <SectionLine className="mt-16 mb-12" />

        <div className="flex justify-between">
          <PoemSwitch disable={Number(id) === 1} prev name="Ýaşyl Tugly Türkmenistan " />
          <PoemSwitch disable={Number(id) === 5} name="Ýaşyl Tugly Türkmenistan " />
        </div>
      </section>
    </PageLayout>
  );
};

export default PoemsSingle;
