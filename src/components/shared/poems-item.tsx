import { Link } from "react-router-dom";
import { usePoemsStore } from "@/store/usePoems";
import { ToastAction } from "../ui/toast";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";
import { BgTexture } from "./bg-texture";
import poetService from "@/services/poet.service";

interface Props {
  id: number | string;
  poem_name: string;
  active?: boolean;
}

export interface PoemType {
  id: number | string;
  poem_name: string;
}

const PoemsItem = ({ id, poem_name, active = false }: Props) => {
  const token = useAuthStore().accessToken;
  const setFavorites = usePoemsStore().setFavorites;

  const onFavorite = async () => {
    try {
      const { toast } = await import("@/hooks/use-toast");
      await poetService.postPoem({ poem_id: Number(id) });

      toast({
        title: "Wy dobawili stih",
        action: (
          <ToastAction
            onClick={async () => {
              try {
                await poetService.unPinPoem({ poem_id: Number(id) });
                setFavorites({ id, poem_name });
              } catch (error) {
                console.log(error);
              }
            }}
            altText="message"
          >
            Otmenit
          </ToastAction>
        ),
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div className="xl:w-[458px] md:w-[372px] xl:h-[134px] h-[118px] w-[328px] p-4 xl:p-6 relative shadow-bottom cursor-pointer">
      <BgTexture className="xl:bg-[url('/images/poems/poem-shape.svg')] md:bg-[url('/images/poems/poem-med-shape.svg')] bg-[url('/images/poems/poem-mob-shape.svg')] poem-mob-path md:poems-med-path xl:poem-path" />
      <Link
        to={`/poems/${id}`}
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
          <button onClick={onFavorite} className="w-5">
            <img
              src={active ? "/images/star-fill.svg" : "/images/star.svg"}
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
