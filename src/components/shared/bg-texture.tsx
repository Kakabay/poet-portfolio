import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  img: string;
  children: ReactNode;
  className?: string;
};

const BgTexture = ({ img, children, className }: Props) => {
  return (
    <div
      className={cn(
        "bg-[url('/images/poems/1.svg')] z-10 drop-shadow-INNER_SHADOW relative bg-no-repeat",
        className,
      )}>
      <img
        src={'/images/texture.png'}
        alt=""
        className="absolute top-0 left-0 z-20 p-1 w-full h-full pointer-events-none right-0 bottom-0 mix-blend-multiply opacity-50"
      />
      {children}
    </div>
  );
};

export default BgTexture;
