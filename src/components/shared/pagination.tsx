import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = { className?: string };

const Pagination = ({ className }: Props) => {
  return (
    <div className={cn('flex justify-center items-center gap-2 text-ON_SURFACE_VAR', className)}>
      <ChevronLeft className="cursor-pointer stroke-ON_SURFACE_VAR" size={20} />
      <div className="flex items-center gap-1 text-[14px] leading-[140%] font-medium">
        <div className="size-5 cursor-pointer">1</div>
        <div className="size-5 cursor-pointer">2</div>
        <div className="size-5 cursor-pointer">3</div>
        <div className="size-5 cursor-pointer">...</div>
        <div className="size-5 cursor-pointer">10</div>
      </div>
      <ChevronRight className="cursor-pointer stroke-ON_SURFACE_VAR" size={20} />
    </div>
  );
};

export default Pagination;
