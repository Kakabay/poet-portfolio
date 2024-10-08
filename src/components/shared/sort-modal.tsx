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

interface Props {
  className?: string;
  small?: boolean;
}

const SortModal = ({ small, className }: Props) => {
  return small ? (
    <div className="relative shadow-bottom flex-[0_0_284px] h-[256px] px-6 py-8 ">
      <BgTexture className="bg-[url('/images/poems/1-shape.svg')] poems-1-path" />

      <div className="flex flex-col gap-6 size-full">
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
      <div className="flex items-center gap-6">
        <div className="flex-[0_0_888px]">
          <h5 className="mb-2 text-16 !text-ON_SURFACE">Поиск</h5>
          <Input
            placeholder="Подсказка"
            className="search h-[52px] !placeholder:text-ON_SURFACE_VAR !text-ON_SURFACE_VAR"
          />
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
