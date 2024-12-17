import { navData, socials } from '../layout/header';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Sheet, SheetContent } from '../ui/sheet';

interface Props {
  className?: string;
  burger: boolean;
  setBurger: (val: boolean) => void;
}

const MedBurger = ({ setBurger, burger }: Props) => {
  return (
    <Sheet open={burger} onOpenChange={() => setBurger(!burger)}>
      <SheetContent className="bg-SURFACE_CONTAINER overflow-y-auto hidden md:block">
        <div className="flex flex-col gap-6 py-4 p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setBurger(false)}
              className="size-12 flex justify-center items-center cursor-pointer">
              <X />
            </button>
          </div>

          <div className="kaushan flex flex-col gap-6">
            <h3 className="text-[32px]">Menu</h3>

            <nav className="flex flex-col gap-4 text-[18px]">
              {navData.map((item, i) => (
                <Link
                  to={item.link}
                  key={i}
                  onClick={() => setBurger(false)}
                  className="flex gap-2.5">
                  <img src="/images/romb.svg" alt="" />
                  {item.view}
                </Link>
              ))}
            </nav>
          </div>

          <hr className="text-OUTLINE_VAR" />

          <h3 className="text-[32px] kaushan">Sosial medialar</h3>

          <div className="flex flex-col gap-4">
            {socials.map((item, i) => (
              <Link to={item.link} key={i} className="flex items-center gap-2 text-16">
                <div className="">{item.icon}</div>
                <div className="">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ ease: 'easeInOut' }}
    //   className={cn(
    //     className,
    //     'fixed top-0 left-0 right-0 bottom-0 hidden md:block z-[100] overflow-hidden bg-[#7A590C]/[16%] w-full h-screen',
    //   )}>
    //   <motion.div
    //     ref={ref}
    //     initial={{ opacity: 0, translateX: '100%' }}
    //     animate={{ opacity: 1, translateX: 0 }}
    //     exit={{ opacity: 0, translateX: '100%' }}
    //     transition={{ duration: 0.5, ease: [0.55, 0, 0.1, 1] }}
    //     className="fixed z-50 top-0 overflow-y-auto right-0 w-[360px] bg-SURFACE_CONTAINER h-screen">
    //     <div className="flex flex-col gap-6 py-4 p-4">
    //       <div className="flex justify-end">
    //         <button
    //           onClick={() => setBurger(false)}
    //           className="size-12 flex justify-center items-center cursor-pointer">
    //           <X />
    //         </button>
    //       </div>

    //       <div className="kaushan flex flex-col gap-6">
    //         <h3 className="text-[32px]">Menu</h3>

    //         <nav className="flex flex-col gap-4 text-[18px]">
    //           {navData.map((item, i) => (
    //             <Link
    //               to={item.link}
    //               key={i}
    //               onClick={() => setBurger(false)}
    //               className="flex gap-2.5">
    //               <img src="/images/romb.svg" alt="" />
    //               {item.view}
    //             </Link>
    //           ))}
    //         </nav>
    //       </div>

    //       <hr className="text-OUTLINE_VAR" />

    //       <h3 className="text-[32px] kaushan">Sosial medialar</h3>

    //       <div className="flex flex-col gap-4">
    //         {socials.map((item, i) => (
    //           <Link to={item.link} key={i} className="flex items-center gap-2 text-16">
    //             <div className="">{item.icon}</div>
    //             <div className="">{item.name}</div>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </motion.div>
    // </motion.div>
  );
};

export default MedBurger;
