import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {};

const Pagination = ({}: Props) => {
  return (
    <div className="flex items-center gap-2 text-ON_SURFACE_VAR">
      <ChevronLeft className="cursor-pointer stroke-ON_SURFACE_VAR" size={20} />
      <div className="flex items-center gap-1 text-[14px] leading-[140%] font-medium">
        <div className="size-5 cursor-pointer">1</div>
      </div>
      <ChevronRight
        className="cursor-pointer stroke-ON_SURFACE_VAR"
        size={20}
      />
    </div>
  );
};

export default Pagination;
