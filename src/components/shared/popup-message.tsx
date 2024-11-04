import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';
import { Button } from '../ui/button';
import { BgTexture } from './bg-texture';

interface Props {
  className?: string;
  setActive: (value: boolean) => void;
  title: string;
  text: string;
}

const PopupMessage = ({ className, setActive, title, text }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setActive(false));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 bottom-0 z-[100] overflow-hidden bg-[#7A590C]/[16%] w-full h-screen',
        className,
      )}>
      <div
        ref={ref}
        className={cn(
          'absolute md:py-[52px] py-8 w-[328px] md:h-[232px] h-[168px] md:w-[408px] md:px-6 px-4 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 shadow-bottom',
        )}>
        <BgTexture className="md:bg-[url('/images/tost-shape.svg')] bg-[url('/images/tost-mob-shape.svg')] md:tost-path tost-mob-path" />
        <div className="flex flex-col md:gap-4 gap-2 text-center">
          <h5 className="font-semibold md:text-[24px] text-[20px]">{title}</h5>
          <h6 className="md:text-16 text-[14px] leading-[145%] h-6 -tracking-wide">{text}</h6>

          <Button
            type="button"
            onClick={() => {
              setActive(false);
            }}
            className="text-[10px] md:text-[14px]">
            Zakryt
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopupMessage;
