import { cn } from '@/lib/utils';

interface Props {
  prev?: boolean;
  name: string;
}

const PoemSwitch = ({ name, prev = false }: Props) => {
  return (
    <div className={cn('flex flex-col gap-2 cursor-pointer', prev ? 'text-right' : 'text-left')}>
      <span className="text-PRIM leading-[140%] font-medium text-[14px]">
        {prev ? 'Predyduşeýe proizwedeniýe' : 'Sleduşeýe proizwedeniýe'}
      </span>
      <img src={'/images/poems/poem-arrow.svg'} className={cn(!prev && '-rotate-[180deg]')} />
      <div className="flex flex-col gap-2">
        <h4 className="kaushan leading-[115%]">{prev ? name : name}</h4>
        <div className={cn('flex gap-2', prev && 'justify-center')}>
          <img src="/images/star.svg" />
          <h5 className="text-[14px] fon-medium italic">(Aýdym üçin)</h5>
        </div>
      </div>
    </div>
  );
};

export default PoemSwitch;
