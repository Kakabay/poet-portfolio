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
  search: string;
  setSearch: (str: string) => void;
}

const SortModal = ({ setSearch, search }: Props) => {
  return (
    <div className="relative shadow-bottom">
      <div className="flex items-center gap-6">
        <div className="flex-[0_1_928px]">
          <h5 className="mb-2 text-16 !text-ON_SURFACE">Поиск</h5>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength={50}
            placeholder="Подсказка"
            className="search h-[52px] !placeholder:text-ON_SURFACE_VAR !text-ON_SURFACE_VAR"
          />
        </div>
        <div className="flex-[0_1_240px]">
          <h5 className="mb-2 text-16">Sortirowka</h5>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default SortModal;
