import { cn } from '@/lib/utils';
import { usePoemsStore } from '@/store/usePoems';
import { useState } from 'react';

interface Props {
  className?: string;
}

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

const DropDown = ({ className }: Props) => {
  const [active, setActive] = useState(false);
  const activeSort = usePoemsStore().activeSort;
  const setActiveSort = usePoemsStore().setActiveSort;

  return (
    <div className={className}>
      <div
        onClick={() => setActive(!active)}
        className={cn(
          'p-4 border cursor-pointer border-OUTLINE_VAR hover:border-OUTLINE h-[52px] relative transition-all  rounded-[4px_4px_0_0] flex justify-between items-center text-[14px] font-medium leading-[115%]',
          {
            'bg-PRIM_CONTAINER text-ON_PRIM_CONTAINER border-0': active,
          },
        )}>
        {activeSort.view}
      </div>

      <div className="relative">
        {active && (
          <div className="cursor-pointer absolute top-0 right-0 left-0">
            {sortData
              .filter((item) => item.id !== activeSort.id)
              .map((item, i) => (
                <div
                  onClick={() => {
                    setActiveSort(item);
                    setActive(false);
                  }}
                  key={i}
                  className="input rounded-[0_0_4px_4px] h-[52px] bg-SURFACE_CONTAINER">
                  {item.view}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
