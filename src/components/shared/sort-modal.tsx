import { cn } from '@/lib/utils';
import DropDown from './drop-down';
import BgTexture from './bg-texture';

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
    <BgTexture img={''}>
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
    </BgTexture>
  );
};

export default SortModal;
