import { Link } from 'react-router-dom';
import BgTexture from './bg-texture';
import { usePoemsStore } from '@/store/usePoems';

interface Props {
  id: number;
  name: string;
  active?: boolean;
}

export interface PoemType {
  id: number;
  name: string;
}

const PoemsItem = ({ id, name, active = false }: Props) => {
  const favorites = usePoemsStore().favorites;
  const setFavorites = usePoemsStore().setFavorites;

  return (
    <div className="w-[458px] h-[134px] p-6 relative shadow-bottom cursor-pointer">
      <BgTexture className="bg-[url('/images/poems/poem-shape.svg')] poem-path" />
      <Link
        to={`/poems/${id}`}
        className="leading-[120%] flex items-start mb-2 h-[58px] overflow-hidden">
        <div className="flex items-center">
          <img src="/images/romb.svg" alt="" className="mr-1" />
          <h4 className="kaushan mr-3">{name}</h4>
          <img src="/images/play.svg" alt="play" />
        </div>
      </Link>

      <div className="leading-[115%] flex items-center gap-2">
        <img
          src={active ? '/images/star-fill.svg' : '/images/star.svg'}
          onClick={() => setFavorites({ id, name })}
          className="mr-1 size-5"
        />
        <img src="/images/poems/new.svg" alt="" className="mr-1" />

        <span className="font-medium italic text-[14px]">(Aýdym üçin)</span>
      </div>
    </div>
  );
};

export default PoemsItem;
