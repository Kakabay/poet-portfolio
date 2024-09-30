import { cn } from '@/lib/utils';
import DropDown from './drop-down';

const sortData = [
  {
    id: 'new',
    view: 'Snaçala nowye',
  },
  {
    id: 'old',
    view: 'Snaçala starye',
  },
];

const SortModal = ({ className, small }: { className?: string; small?: boolean }) => {
  return (
    <div
      className={cn(
        'relative bg-cover bg-no-repeat transition-all drop-shadow-INNER_SHADOW',
        className,
      )}>
      {/* <img
        src={small ? '/images/poems/1.png' : '/images/comments/sort-bg.png'}
        className="absolute -z-10 h-full w-full obje"
        alt=""
      />
      <img
        src={small ? '/images/poems/1.png' : '/images/comments/sort-bg.png'}
        className="absolute -z-10 h-full w-full obje"
        alt=""
      /> */}
      <div
        className={cn(
          "bg-repeat absolute -z-10 h-full w-full bg-[url('/images/poems/1.png')] overflow-auto ",
        )}>
        <img
          src={small ? '/images/poems/1.png' : '/images/comments/sort-bg.png'}
          className="absolute -z-10 h-full w-full "
          alt=""
        />
      </div>

      <div className={cn('flex gap-6 py-12 px-6', small ? 'flex-col' : '')}>
        <div className={cn(!small && 'flex-[0_0_80%]')}>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">Поиск</h5>
          <input type="text" placeholder="Подсказка" className={cn('input', !small && 'w-full')} />
        </div>

        <div className={cn(!small && 'flex-[0_0_20%]')}>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">Sortirowka</h5>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default SortModal;
