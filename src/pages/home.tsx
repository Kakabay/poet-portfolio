import { scrollTop } from "@/lib/utils";

const Home = () => {
  scrollTop();

  return (
    <main className="container flex justify-center">
      <div className="xl:max-w-[812px] relative w-full h-[496px] xl:max-h-[691px] shadow-bottom my-6">
        <img
          src="/images/home-banner.png"
          alt="surat"
          className="w-full hidden xl:block shadow-bottom h-full object-cover"
        />

        <img
          src="/images/home/top.png"
          className="absolute w-full top-0 left-0"
          alt=""
        />

        <img
          src="/images/home/body.png"
          className="absolute w-[312px] top-0 left-1/2 -translate-x-1/2 size-ful l"
        />

        <div className="size-full shadow-bottom"></div>

        <img
          src="/images/home/top.png"
          className="absolute bottom-0 left-0 right-0 w-full"
          alt=""
        />
      </div>
    </main>
  );
};

export default Home;
