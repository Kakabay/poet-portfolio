import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  className?: string;
  currentPage: number;
  totalPages: number;
  perPage: number;
  onChangePage: (page: number) => void;
};

const Pagination = ({ className, totalPages, onChangePage, currentPage, perPage }: Props) => {
  const total = Math.ceil(totalPages / perPage);

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (total <= 3) {
      // Если страниц три или меньше, отображаем все
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Если страниц больше трех
      if (currentPage > 3) {
        pages.push(1, '...', currentPage - 1, currentPage);
      } else {
        pages.push(1, 2, 3);
      }
      if (currentPage < total - 2) {
        pages.push('...', total);
      } else if (currentPage <= total - 2) {
        pages.push(total);
      }
    }

    return pages;
  };

  return (
    <div className={cn('flex justify-center items-center gap-2 text-ON_SURFACE_VAR', className)}>
      <button onClick={() => onChangePage(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="cursor-pointer stroke-ON_SURFACE_VAR" size={20} />
      </button>
      <div className="flex items-center gap-1 text-[14px] leading-[140%] font-medium">
        {getPageNumbers().map((item) => (
          <button
            key={item}
            onClick={() => {
              if (typeof item === 'number') onChangePage(item);
            }}
            disabled={typeof item !== 'number'}
            className={cn(
              'size-5 cursor-pointer',
              currentPage === item ? 'text-PRIM' : 'text-ON_SURFACE_VAR',
            )}>
            {item}
          </button>
        ))}
      </div>
      <button onClick={() => onChangePage(currentPage + 1)} disabled={currentPage === total}>
        <ChevronRight className="cursor-pointer stroke-ON_SURFACE_VAR" size={20} />
      </button>
    </div>
  );
};

export default Pagination;
