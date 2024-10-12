import { X } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import BgTexture from './bg-texture';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { usePopupStore } from '@/store/usePopup';

interface Props {
  setActive: (val: boolean) => void;
  setIsSubmitted?: (val: boolean) => void;
  children?: ReactNode;
  className?: string;
}

const WindowPopup = ({ children, setActive, className, setIsSubmitted }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const mode = usePopupStore().mode;
  const setMode = usePopupStore().setMode;

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const close = () => {
    if (setIsSubmitted) {
      setIsSubmitted(false);
    } else {
      setActive(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
      className={cn(
        className,
        'fixed top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C] bg-opacity-[16%] w-full h-screen',
      )}>
      <motion.div
        // initial={{ scale: 0.9 }}
        // animate={{ scale: 1 }}
        // exit={{ scale: 0.9 }}
        ref={ref}
        className={cn(
          'absolute py-[52px] w-[408px] px-6 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom',
          {
            'h-[456px]': mode === 'login',
            'h-[532px]': mode === 'comment',
            'h-[232px]': mode === 'tost',
          },
        )}>
        <BgTexture
          className={cn(
            mode === 'login'
              ? "bg-[url('/images/login-shape.svg')] login-path"
              : mode === 'comment'
              ? "bg-[url('/images/messages/comment-modal-shape.svg')] comment-modal-path"
              : "bg-[url('/images/tost-shape.svg')] tost-path",
          )}
        />
        <X onClick={close} className="absolute top-3 right-3 p-1 cursor-pointer" size={30} />
        {mode === 'tost' && (
          <div className="flex flex-col gap-4 text-center">
            <h5 className="font-semibold">Waş kommentariý otprawlen</h5>
            <h6 className="text-16">Wy uwidite swoý kommentriý posle moderasii</h6>
            <Button onClick={close}>Zakryt</Button>
          </div>
        )}
        {mode === 'comment' && (
          <div className="flex flex-col gap-6 text-center">
            <h5 className="font-semibold">Ostaw swoý kommentariý</h5>

            <div className="flex flex-col gap-2">
              <div className="text-16 text-left">Kommentariý</div>
              <Textarea
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="p-4"
                rows={11}
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
                value.length > 10 && setMode('tost');
              }}>
              Otprawit
            </Button>
          </div>
        )}
        {children}
      </motion.div>
    </motion.div>
  );
};

export default WindowPopup;
