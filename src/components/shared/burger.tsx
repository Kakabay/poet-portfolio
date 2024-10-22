import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import EnterBtn from './enter-btn';
import { navData, socials } from '../layout/header';
import { Link } from 'react-router-dom';
import { usePopupStore } from '@/store/usePopup';
import { useLoginStore } from '@/store/useLogin';

interface Props {
  setBurger: (val: boolean) => void;
}

const Burger = ({ setBurger }: Props) => {
  const setMode = usePopupStore().setMode;
  const setActive = useLoginStore().setActive;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-100%' }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: '-100%' }}
      transition={{ duration: 0.5, ease: [0.55, 0, 0.1, 1] }}
      className="fixed z-50 top-0 left-0 overflow-y-auto md:hidden right-0 w-full bg-SURFACE_CONTAINER h-full">
      <div className="flex flex-col gap-6 py-4 container">
        <div className="flex justify-end">
          <button
            onClick={() => setBurger(false)}
            className="size-12 flex justify-center items-center cursor-pointer">
            <X />
          </button>
        </div>

        <EnterBtn className="" setActive={setActive} setMode={setMode} />

        <hr className="text-OUTLINE_VAR" />

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
    </motion.div>
  );
};

export default Burger;
