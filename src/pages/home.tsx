import { scrollTop } from '@/lib/utils';

const Home = () => {
  scrollTop();

  return (
    <main className="container flex justify-center">
      <section className="xl:max-w-[812px] relative w-full xl:max-h-[691px] my-6">
        <img
          src="/images/home-banner.png"
          alt="surat"
          className="w-full hidden xl:block shadow-bottom h-full object-cover"
        />

        <div className="xl:hidden w-[312px] mx-auto relative flex justify-center shadow-bottom h-[496px]">
          <img
            src="/images/home/body.png"
            className="absolute top-0 left-0 size-full object-cover"
          />

          <div className="p-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4"></div>
            <div className="flex flex-col gap-4"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
