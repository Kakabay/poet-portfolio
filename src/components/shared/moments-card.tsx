import { Link } from 'react-router-dom';
import BgTexture from './bg-texture';
import { cn } from '@/lib/utils';

type Props = {
  img: string;
  title: string;
  textureNone?: boolean;
};

const MomentsCard = ({ title, img, textureNone = false }: Props) => {
  return (
    <Link to={`/moments/1`}>
      <article
        className={cn(
          'flex flex-col gap-4 xl:w-[378px] w-[328px] relative group cursor-pointer',
          !textureNone ? 'shadow-bottom xl:py-8 xl:px-6 p-4 h-[289px]' : 'h-[253px]',
        )}>
        {!textureNone && (
          <BgTexture className="xl:bg-[url('/images/moments/card-shape.svg')] bg-[url('/images/moments/moments-mob-shape.svg')] moments-mob-path xl:moments-card-path" />
        )}
        <img
          src="/images/moments/img.svg"
          alt=""
          className={cn('absolute z-20', !textureNone ? 'top-11 right-9' : 'top-3 right-3')}
        />
        <div className="relative w-full h-[209px] xl:h-[181px] after:size-full after:absolute after:z-10 transition-all group-hover:after:bg-transparent after:bg-[#7A590C]/15  after:transition-all">
          <img src={img} alt="" className="absolute z-10 top-0 left-0 size-full object-cover" />
        </div>
        <h4 className="text-[20px] leading-[140%]">{title}</h4>
      </article>
    </Link>
  );
};

export default MomentsCard;
