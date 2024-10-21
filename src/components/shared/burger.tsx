import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import EnterBtn from './enter-btn';

interface Props {
  setActive: (val: boolean) => void;
}

const Burger = ({ setActive }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-100%' }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: '-100%' }}
      transition={{ duration: 0.5, ease: [0.55, 0, 0.1, 1] }}
      className="fixed z-50 top-0 left-0 right-0 w-full bg-SURFACE_CONTAINER h-full">
      <div className="flex flex-col gap-6 py-4 container">
        <div className="flex justify-end">
          <button onClick={() => setActive(false)} className="size-12 cursor-pointer">
            <X />
          </button>
        </div>

        <EnterBtn className="justify-center" />

        <hr className="text-OUTLINE_VAR" />

        <div className="">
          <h3>Menu</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Burger;
