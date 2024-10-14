import { Link } from "react-router-dom";
import BgTexture from "./bg-texture";
import { usePoemsStore } from "@/store/usePoems";
import { ToastAction } from "../ui/toast";
import { useToast } from "@/hooks/use-toast";

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

  const { toast } = useToast();

  return (
    <div className="xl:w-[458px] xl:h-[134px] h-[118px] w-[328px] p-4 xl:p-6 relative shadow-bottom cursor-pointer">
      <BgTexture className="xl:bg-[url('/images/poems/poem-shape.svg')] bg-[url('/images/poems/poem-mob-shape.svg')] poem-mob-path xl:poem-path" />
      <Link
        to={`/poems/${id}`}
        className="leading-[120%] flex items-start mb-2 h-[58px] overflow-hidden"
      >
        <div className="flex items-center">
          <img src="/images/romb.svg" alt="" className="mr-1" />
          <h4 className="kaushan mr-3">{name}</h4>
          <img src="/images/play.svg" alt="play" />
        </div>
      </Link>

      <div className="leading-[115%] h-5 flex items-center gap-2">
        <button
          onClick={() => {
            const isFavorite = favorites.some((item) => item.id === id);

            if (!isFavorite) {
              toast({
                title: "Wy dobawili stih",
                action: (
                  <ToastAction
                    onClick={() => {
                      setFavorites({ id, name });
                    }}
                    altText="Goto schedule to undo"
                  >
                    Otmenit
                  </ToastAction>
                ),
                duration: 3000,
              });
            }
          }}
        >
          <img
            src={active ? "/images/star-fill.svg" : "/images/star.svg"}
            onClick={() => setFavorites({ id, name })}
            className="mr-1 size-5"
          />
        </button>
        <img src="/images/poems/new.svg" alt="" className="mr-1" />

        <span className="font-medium italic text-[14px]">(Aýdym üçin)</span>
      </div>
    </div>
  );
};

export default PoemsItem;
