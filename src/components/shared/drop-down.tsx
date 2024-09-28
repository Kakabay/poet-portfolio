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
          'p-4 border cursor-pointer transition-all border-OUTLINE_VAR rounded-[4px_4px_0_0] flex justify-between items-center text-[14px] font-medium leading-[115%]',
          {
            'bg-PRIM_CONTAINER text-ON_PRIM_CONTAINER': active,
          },
        )}>
        {activeSort.view}
      </div>

      {active && (
        <div className="cursor-pointer">
          {sortData
            .filter((item) => item.id !== activeSort.id)
            .map((item, i) => (
              <div
                onClick={() => {
                  setActiveSort(item);
                  setActive(false);
                }}
                key={i}
                className="border border-OUTLINE_VAR cursor-pointer text-[14px] leading-[145%] p-4 rounded-[0_0_4px_4px]">
                {item.view}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
