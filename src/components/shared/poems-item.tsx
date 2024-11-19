import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/useAuthStore';
import { BgTexture } from './bg-texture';
import { usePinPoemsStore } from '@/store/use-pin-poems';
import { ToastAction } from '../ui/toast';

export interface PoemType {
  id: number;
  poem_name: string;
}

interface Props extends PoemType {
  link: string;

  active?: boolean;
  onFavoriteChange?: (id: number, isPinned: boolean) => void;
}

const PoemsItem = ({ id, poem_name, link }: Props) => {
  const token = useAuthStore((state) => state.accessToken);

  const setPinPoems = usePinPoemsStore((state) => state.setPinPoems);
  const pinPoems = usePinPoemsStore((state) => state.pinPoems);

  const isPinned = pinPoems.some((item) => item.id === id);

  const onStar = async (obj: PoemType) => {
    try {
      const { toast } = await import('@/hooks/use-toast');
      setPinPoems(obj);

      toast({
        title: isPinned ? 'Открепленно' : 'Закрепленно',
        action: (
          <ToastAction
            onClick={() => {
              setPinPoems(obj);
            }}
            altText="Отмена">
            Try again
          </ToastAction>
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div className="xl:w-[458px] md:w-[372px] xl:h-[134px] h-[118px] w-[328px] p-4 xl:p-6 relative shadow-bottom cursor-pointer">
      <BgTexture className="xl:bg-[url('/images/poems/poem-shape.svg')] md:bg-[url('/images/poems/poem-med-shape.svg')] bg-[url('/images/poems/poem-mob-shape.svg')] poem-mob-path md:poems-med-path xl:poem-path" />

      <Link to={link} className="leading-[120%] flex items-start mb-2 h-[58px] overflow-hidden">
        <div className="flex items-center w-full">
          <img src="/images/romb.svg" className="mr-1" />
          <div className="flex justify-between w-full">
            <h4 className="kaushan mr-3">{poem_name}</h4>
            <img src="/images/play.svg" alt="play" />
          </div>
        </div>
      </Link>

      <div className="leading-[115%] h-5 flex items-center gap-2">
        {token && (
          <button onClick={() => onStar({ id, poem_name })} className="w-5 disabled:opacity-50">
            <img
              src={isPinned ? '/images/star-fill.svg' : '/images/star.svg'}
              className="mr-1 size-5"
            />
          </button>
        )}
        <img src="/images/poems/new.svg" alt="" className="mr-1" />

        <span className="font-medium italic text-[14px]">(Aýdym üçin)</span>
      </div>
    </motion.div>
  );
};

export default PoemsItem;
