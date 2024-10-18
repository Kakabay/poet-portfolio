import { scrollTop } from "@/lib/utils";

const Home = () => {
  scrollTop();

  return (
    <main className="xl:container flex justify-center">
      <section className="xl:w-[812px] relative w-[380px] h-[600px] xl:h-[691px] my-6">
        <img
          src="/images/home-banner.png"
          alt="surat"
          className="w-full hidden xl:block shadow-bottom h-full object-cover"
        />

        <div className="xl:hidden w-full relative flex justify-center shadow-bottom h-[550px]">
          <img
            src="/images/home/body.png"
            className="absolute top-0 left-0 size-full object-cover"
          />

          <div className="px-10 w-full py-20 flex flex-col relative z-20 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="kaushan text-PRIM text-[18px] leading-[130%]">
                Hormaly,  şygyrýetiň muşdagy! <br /> Meniň Internet sahypama hoş
                geldiňiz!
              </h3>
              <p className="text-[12px] font-medium leading-[130%] -tracking-wide">
                Men Siz bilen göni aragatnaşykda boljakdygyma gaty begenýärin.
                Siziň pikirňizi, maslahatlarňyzy hem-de belliklerňizi öz
                döredijiligimde ulanyp biljekdigme çäksiz buýsanýaryn. Bizden
                daşlaşmaň! Biziň sahypamyza ýazylmagy unutmaň! <br /> Uly hormat
                bilen,
              </p>
              <h4 className="text-right text-[22px] font-bold leadin-[130%]">
                Ezizgeldi Helleňow
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="kaushan text-PRIM text-[18px] leading-[130%]">
                “Saňa onki süňňüm bilen siňsedim”, Diýýän seň öňüňde dyz epip,
                Şygyr! Dury bulak bolup, kalba eňsediň, Ýaşasadym senden bagt
                tapyp, Şygyr!
              </h3>
              <h5 className="text-[12px] font-medium leading-[130%] -tracking-wide">
                Ezizgeldi Helleňow, “Baý göwnüm” kitaby, Aşgabat 2024 ý,
                “Şygyrýet” atly goşgydan, 42-nji sahypa
              </h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
