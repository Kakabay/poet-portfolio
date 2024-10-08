import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  array: any[];
  setActive: (i: number) => void;
  active: number;
}

const Tabs = ({ array, active, setActive }: Props) => {
  return (
    <div className="flex text-16 items-center border-b transition-all w-fit mx-auto border-OUTLINE">
      {array.map((item, i) => (
        <h5
          key={i}
          onClick={() => setActive(i)}
          className={cn(
            "px-4 py-2 cursor-pointer relative transition-all "
            // {
            //   "after:absolute after:h-0.5 after:bg-OUTLINE_VAR_HIGH after:w-full after:transition-all after:bottom-0 after:left-0":
            //     active === i,
            // }
          )}
        >
          <div
            className={cn(
              active === i &&
                "absolute transition-all duration-200 bottom-0 left-0 h-0.5 w-full bg-OUTLINE_VAR_HIGH"
            )}
          />
          {item.view}
        </h5>
      ))}
    </div>
  );
};

export default Tabs;
