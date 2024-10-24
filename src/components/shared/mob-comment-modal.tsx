import { motion } from 'framer-motion';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { Button } from '../ui/button';
import { usePopupStore } from '@/store/usePopup';
import { cn } from '@/lib/utils';
import BgTexture from './bg-texture';

interface Props {
  setActive: (v: boolean) => void;
}

const MobCommentModal = ({ setActive }: Props) => {
  const [value, setValue] = useState('');
  const setMode = usePopupStore().setMode;

  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed z-[100] top-0 left-0 w-full h-screen py-8  bg-[#EFDEBE] overflow-hidden">
        <img
          src="/images/texture.png"
          className="size-full absolute top-0 left-0 pointer-events-none  object-cover mix-blend-multiply opacity-50"
        />

        <div className="container">
          <button onClick={() => setActive(false)} className="flex items-center gap-1 h-10 mb-8">
            <img src="/images/arrow.svg" />
            <h6 className="text-16 !font-normal text-ON_SURFACE_VAR">Wernutsýa nazad</h6>
          </button>

          <div className="flex flex-col gap-6">
            <h5 className="font-semibold">Ostaw swoý kommentariý</h5>

            <div className="flex flex-col gap-2">
              <div className="text-16 text-left">Kommentariý</div>
              <Textarea
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="p-4"
                rows={14}
                maxLength={500}
                minLength={10}
              />
              <div className="flex justify-between items-center">
                <h5 className="text-error"></h5>
                <div className="text-right text-14 !font-normal justify-end">
                  {value.length}/500
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                value.length > 10 && setOpen(true) && setMode('tost');
              }}>
              Otprawit
            </Button>
          </div>
        </div>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut' }}
          className={cn(
            'fixed top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C]/[16%] w-full h-screen',
          )}>
          <motion.div
            className={cn(
              'absolute py-8 w-[328px] h-[168px] px-4 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom',
            )}>
            <BgTexture className={cn("bg-[url('/images/tost-mob-shape.svg')] tost-mob-path")} />
            <div className="flex flex-col md:gap-4 gap-2 text-center">
              <h5 className="font-semibold md:text-[24px] text-[20px]">
                Waş kommentariý otprawlen
              </h5>
              <h6 className="md:text-16 text-[14px] leading-[145%] -tracking-wide">
                Wy uwidite swoý kommentriý posle moderasii
              </h6>
              <Button
                onClick={() => {
                  setOpen(false);
                  setActive(false);
                }}
                className="text-[14px]">
                Zakryt
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MobCommentModal;
