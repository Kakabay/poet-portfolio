import { Link } from 'react-router-dom';
import BgTexture from './bg-texture';

const PoemsItem = ({ id, name }: { id: string | undefined; name?: string }) => {
  return (
    <div className="w-[458px] h-[134px] p-6 relative shadow-bottom">
      <BgTexture className="bg-[url('/images/poems/poem-shape.svg')] poem-path" />
      <Link
        to={`/poems/${id}`}
        className="leading-[120%] flex items-start mb-2 h-[58px] overflow-hidden">
        <div className="flex items-center">
          <img src="/images/romb.svg" alt="" className="mr-1" />
          <h4 className="kaushan mr-3">Ýaşyl Tugly Türkmenistan</h4>
          <img src="/images/play.svg" alt="play" />
        </div>
      </Link>

      <div className="leading-[115%] flex items-center gap-2">
        <img src="/images/star.svg" alt="" className="mr-1" />
        <img src="/images/poems/new.svg" alt="" className="mr-1" />

        <span className="font-medium italic text-[14px]">(Aýdym üçin)</span>
      </div>
    </div>
  );
};

export default PoemsItem;
