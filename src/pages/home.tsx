import { scrollTop } from "@/lib/utils";

const Home = () => {
  scrollTop();

  return (
    <main className="container flex justify-center">
      <div className="max-w-[812px] max-h-[691px] my-6">
        <img
          src="/images/home-banner.png"
          alt="surat"
          className="w-full shadow-bottom h-full object-cover"
        />
      </div>
    </main>
  );
};

export default Home;
