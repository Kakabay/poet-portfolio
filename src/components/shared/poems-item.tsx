import { Link } from "react-router-dom";
import { ToastAction } from "../ui/toast";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";
import { BgTexture } from "./bg-texture";
import poetService from "@/services/poet.service";
import { useGetPinPoems } from "@/query/use-get-pin-poems";
import { useState } from "react";

interface Props {
  id: number;
  poem_name: string;
  link: string;

  active?: boolean;
  onFavoriteChange?: (id: number, isPinned: boolean) => void;
}
export interface PoemType {
  id: number;
  poem_name: string;
}

const PoemsItem = ({
  id,
  poem_name,
  active = false,
  onFavoriteChange,
  link,
}: Props) => {
  const token = useAuthStore().accessToken;
  const [isPinned, setIsPinned] = useState(active);
  const [loading, setLoading] = useState(false);

  const { data: pinPoems } = useGetPinPoems();

  const pinned = pinPoems?.pinned_poems || [];

  console.log(pinned);

  const onFavorite = async () => {
    try {
      setLoading(true);
      const { toast } = await import("@/hooks/use-toast");

      const originalState = isPinned;

      toast({
        title: isPinned
          ? "Стих удален из избранного"
          : "Стих добавлен в избранное",
        action: (
          <ToastAction
            onClick={async () => {
              try {
                if (originalState) {
                  await poetService.postPoem({ poem_id: id });
                } else {
                  await poetService.unPinPoem({ poem_id: id });
                }
                setIsPinned(originalState);
                onFavoriteChange?.(id, originalState);
              } catch (error) {
                console.log(error);
              }
            }}
            altText="Отменить"
          >
            Отменить
          </ToastAction>
        ),
        duration: 3000,
      });

      if (isPinned) {
        await poetService.unPinPoem({ poem_id: id });
      } else {
        await poetService.postPoem({ poem_id: id });
      }

      setIsPinned(!isPinned);
      onFavoriteChange?.(id, !isPinned);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div className="xl:w-[458px] md:w-[372px] xl:h-[134px] h-[118px] w-[328px] p-4 xl:p-6 relative shadow-bottom cursor-pointer">
      <BgTexture className="xl:bg-[url('/images/poems/poem-shape.svg')] md:bg-[url('/images/poems/poem-med-shape.svg')] bg-[url('/images/poems/poem-mob-shape.svg')] poem-mob-path md:poems-med-path xl:poem-path" />

      <Link
        to={link}
        className="leading-[120%] flex items-start mb-2 h-[58px] overflow-hidden"
      >
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
          <button
            disabled={loading}
            onClick={onFavorite}
            className="w-5 disabled:opacity-50"
          >
            <img
              src={isPinned ? "/images/star-fill.svg" : "/images/star.svg"}
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
