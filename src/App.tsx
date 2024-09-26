import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import clsx from "clsx";
import { cn, getCover } from "./lib/utils";

function App() {
  const { pathname } = useLocation();

  return (
    <main
      className={clsx("flex flex-col relative h-screen overflow-x-hidden", {
        "bg-HOME_PATTERN z-10 bg-blend-soft-light h-full bg-center bg-no-repeat bg-cover":
          pathname === "/",
      })}
    >
      <div
        className={cn(
          "max-h-[396px] w-full absolute top-0 left-0 pointer-events-none",
          getCover(pathname)?.opacity
        )}
      >
        <img
          src={getCover(pathname)?.img}
          alt=""
          className="w-full h-full object-cover mix-blend-soft-light"
        />
      </div>

      <div className="w-full h-screen fixed -z-20 pointer-events-none top-0 right-0 bottom-0 left-0 mix-blend-multiply">
        <img
          src="/images/texture.png"
          className=" object-cover object-center w-full h-full"
        />
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
