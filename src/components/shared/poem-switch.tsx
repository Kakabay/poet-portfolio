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
          "flex flex-col disabled:opacity-50 disabled:cursor-default md:gap-2 gap-1 cursor-pointer",
          prev ? "text-right items-end" : "text-left"
        )}
      >
        <span className="text-PRIM leading-[130%] md:leading-[140%] font-normal -tracking-wider md:font-medium text-[12px] md:text-[14px]">
          {prev ? "Predyduşeýe proizwedeniýe" : "Sleduşeýe proizwedeniýe"}
        </span>
        <img
          src={"/images/poems/poem-arrow.svg"}
          className={cn(!prev && "-rotate-[180deg]")}
        />
        <div className="flex flex-col md:gap-2">
          <h4 className="kaushan text-[16px] leading-none md:text-[24px] md:leading-[115%]">
            {prev ? name : name}
          </h4>
          <div className={cn("flex items-center gap-2", prev && "justify-end")}>
            <img src="/images/star.svg" className="md:size-6 size-4" />
            <h5 className="md:text-[14px] text-[12px] fon-medium italic">
              (Aýdym üçin)
            </h5>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default PoemSwitch;
