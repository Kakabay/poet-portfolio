import { cn } from "@/lib/utils";
import DropDown from "./drop-down";
import BgTexture from "./bg-texture";
import { Input } from "../ui/input";

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

const SortModal = ({ small }: { className?: string; small?: boolean }) => {
  return small ? (
    <div className="relative flex-[0_0_284px] shadow-bottom pt-12 pb-20 px-6 w-[284px] h-[336px]">
      <BgTexture className="bg-[url('/images/poems/1-shape.svg')] poems-1-path" />

      <div className="flex flex-col gap-6">
        <div>
          <h5 className="mb-2 text-16">Поиск</h5>
          <Input placeholder="Подсказка" />
        </div>
        <div>
          <h5 className="mb-2 text-16">Sortirowka</h5>
          <DropDown />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative shadow-bottom pt-12 pb-20 px-6">
      <BgTexture className="bg-[url('/images/poems/1-shape.svg')] poems-1-shape" />

      <div className="flex flex-col gap-6">
        <div>
          <h5 className="mb-2 text-16">Поиск</h5>
          <Input placeholder="Подсказка" />
        </div>
        <div>
          <h5 className="mb-2 text-16">Sortirowka</h5>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default SortModal;
