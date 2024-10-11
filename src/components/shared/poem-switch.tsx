import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props {
  prev?: boolean;
  name: string;
  disable: boolean;
}

const PoemSwitch = ({ name, disable = false, prev = false }: Props) => {
  return (
    <Link to="">
      <button
        disabled={disable}
        className={cn(
          "flex flex-col disabled:opacity-50 disabled:cursor-default gap-2 cursor-pointer",
          prev ? "text-right items-end" : "text-left"
        )}
      >
        <span className="text-PRIM leading-[140%] font-medium text-[14px]">
          {prev ? "Predyduşeýe proizwedeniýe" : "Sleduşeýe proizwedeniýe"}
        </span>
        <img
          src={"/images/poems/poem-arrow.svg"}
          className={cn(!prev && "-rotate-[180deg]")}
        />
        <div className="flex flex-col gap-2">
          <h4 className="kaushan leading-[115%]">{prev ? name : name}</h4>
          <div className={cn("flex gap-2", prev && "justify-end")}>
            <img src="/images/star.svg" />
            <h5 className="text-[14px] fon-medium italic">(Aýdym üçin)</h5>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default PoemSwitch;
