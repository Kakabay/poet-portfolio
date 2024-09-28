import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import clsx from "clsx";
import { cn, getCover } from "./lib/utils";

function App() {
  const { pathname } = useLocation();

  return (
    <main
      className={clsx("flex flex-col relative h-screen overflow-x-hidden", {})}
    >
      {pathname !== "/" && (
        <div
          className={cn(
            "max-h-[396px] w-full absolute top-0 left-0 pointer-events-none",
            getCover(pathname)?.opacity,
            getCover(pathname)?.mode
          )}
        >
          <img
            src={getCover(pathname)?.img}
            alt=""
            className="w-full h-full object-cover mix-blend-soft-light"
          />
        </div>
      )}
      <div className="w-full  bg-[url('/images/texture.png')] bg-cover bg-blend-multiply bg-opacity-100 h-screen fixed -z-30 pointer-events-none top-0 right-0 bottom-0 left-0">
        {pathname === "/" && (
          <img
            src="/images/home-bg.png"
            className="object-cover object-center mix-blend-soft-light relative z-[50] w-full h-full"
          />
        )}
      </div>

      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;
