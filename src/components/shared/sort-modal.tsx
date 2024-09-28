import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";
import DropDown from "./drop-down";

const sortData = [
  {
    id: "new",
    view: "Snaçala nowye",
  },
  {
    id: "old",
    view: "Snaçala starye",
  },
];

const SortModal = () => {
  return (
    <div className="relative bg-[url('/images/poems/1.png')] bg-cover bg-no-repeat transition-all w-[284px] drop-shadow-INNER_SHADOW">
      {/* <img
        src="/images/poems/1.png"
        alt=""
        className="absolute object-cover h-full w-full -z-10"
      /> */}

      <div className="flex flex-col gap-6 py-12 px-6">
        <div>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">Поиск</h5>
          <input type="text" placeholder="Подсказка" className="input" />
        </div>

        <div>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">
            Sortirowka
          </h5>

          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default SortModal;
