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
      {/* {pathname !== "/" && (
        <>
          <div className="top-0 bg-[#EFDEBE] left-0 right-0 bottom-0 -z-20 fixed">
            <img
              src="/images/texture.png"
              alt=""
              className="mix-blend-multiply h-full w-full pointer-events-none  opacity-50 object-cover"
            />
          </div>
        </>
      )} */}
      <>
        {pathname !== "/" ? (
          <>
            <div
              className={cn(
                "max-h-[396px] w-full absolute -z-10 top-0  left-0 right-0 bottom-0 pointer-events-none",
                getCover(pathname)?.mode
              )}
            >
              <img
                src={getCover(pathname)?.img}
                alt=""
                className={cn(
                  "w-full h-full object-cover relative -z-20 ",
                  getCover(pathname)?.opacity
                )}
              />
            </div>

            <div className="w-full h-screen absolute -z-20 pointer-events-none top-0 right-0 bottom-0 left-0">
              <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 opacity-25">
                <img
                  src="/images/home-bg.png"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 ">
                <img
                  src="/images/texture.png"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="absolute bg-[#EFDEBE] top-0 left-0 w-full h-screen -z-20" />
            </div>
          </>
        ) : (
          // <div className="w-full h-screen -z-50 fixed pointer-events-none top-0 right-0 bottom-0 left-0">
          //   <div className="absolute top-0 left-0 w-full h-screen z-30 opacity-50">
          //     <img
          //       src="/images/texture.png"
          //       alt=""
          //       className=" w-full h-full "
          //     />
          //   </div>

          //   <div className="absolute top-0 left-0 w-full h-screen z-20 opacity-25">
          //     <img
          //       src="/images/home-bg.png"
          //       alt=""
          //       className=" w-full h-full "
          //     />
          //   </div>

          //   <div className="absolute bg-[#EFDEBE] top-0 left-0 w-full h-screen z-10" />
          // </div>
          <>
            <div className="w-full h-screen fixed bg-[url('/images/ready-home-bg.png')] pointer-events-none top-0 right-0 bottom-0 left-0 bg-cover -z-50"></div>
          </>
        )}
      </>
      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;
