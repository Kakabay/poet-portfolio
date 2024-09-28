import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  className?: string;
}

const DropDown = ({ className }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div className={className}>
      <div
        onClick={() => setActive(!active)}
        className={cn(
          "p-4 border cursor-pointer transition-all border-OUTLINE_VAR rounded-[4px] flex justify-between items-center text-[14px] font-medium leading-[115%]",
          {
            "bg-PRIM_CONTAINER text-ON_PRIM_CONTAINER": active,
          }
        )}
      >
        Snaçala nowye
      </div>

      {active && <div>asddasdsa</div>}
    </div>
  );
};

export default DropDown;
