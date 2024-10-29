import { X } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import BgTexture from './bg-texture';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { usePopupStore } from '@/store/usePopup';
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts';

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
  const desktop = useMediaQuery('(min-width: 768px)');

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

  const handleClick = () => setActive(false);

  useOnClickOutside(ref, handleClick);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
      className={cn(
        className,
        'fixed top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C]/[16%] w-full h-screen',
      )}>
      <motion.div
        ref={ref}
        className={cn(
          'absolute md:py-[52px] py-8 w-[328px] md:w-[408px] md:px-6 px-4 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom',
          {
            'h-[456px]': mode === 'login',
            'h-[532px]': mode === 'comment',
            'md:h-[232px] h-[168px]': mode === 'tost',
          },
        )}>
        <BgTexture
          className={cn(
            mode === 'login'
              ? "bg-[url('/images/login-shape.svg')] login-path"
              : mode === 'comment'
              ? "bg-[url('/images/messages/comment-modal-shape.svg')] comment-modal-path"
              : "md:bg-[url('/images/tost-shape.svg')] bg-[url('/images/tost-mob-shape.svg')] md:tost-path tost-mob-path",
          )}
        />
        <X
          onClick={close}
          className="absolute md:block hidden top-3 right-3 p-1 cursor-pointer"
          size={30}
        />
        {mode === 'tost' && (
          <div className="flex flex-col md:gap-4 gap-2 text-center">
            <h5 className="font-semibold md:text-[24px] text-[20px]">Waş kommentariý otprawlen</h5>
            <h6 className="md:text-16 text-[14px] leading-[145%] -tracking-wide">
              Wy uwidite swoý kommentriý posle moderasii
            </h6>
            <Button onClick={close} className="text-[10px] md:text-[14px]">
              Zakryt
            </Button>
          </div>
        )}
        {desktop && mode === 'comment' && (
          <div className="flex md:bg-none bg-[url('/images/texture047.png')] bg-cover md:size-auto h-screen flex-col gap-6 text-center">
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
