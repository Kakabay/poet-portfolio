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
          <Input placeholder="Подсказка" className="search" />
        </div>
        <div>
          <h5 className="mb-2 text-16">Sortirowka</h5>
          <DropDown />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative shadow-bottom p-6">
      <BgTexture className="bg-[url('/images/comments/filter-shape.svg')] comments-filter-path" />

      <div className="flex items-center gap-6">
        <div className="flex-[0_0_888px]">
          <h5 className="mb-2 text-16">Поиск</h5>
          <Input placeholder="Подсказка" className="search h-[52px]" />
        </div>
        <div className="flex-[0_0_240px]">
          <h5 className="mb-2 text-16">Sortirowka</h5>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default SortModal;
