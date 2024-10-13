import DropDown from "./drop-down";
import { Input } from "../ui/input";
import { ActiveSort } from "@/store/useSynlar";

interface Props {
  search: string;
  setSearch: (str: string) => void;
  sort: ActiveSort;
  setSort: (val: ActiveSort) => void;
  className?: string;
}

const SortModal = ({ setSearch, search, sort, setSort }: Props) => {
  return (
    <div className="relative">
      <div className="flex xl:flex-row flex-col xl:items-center gap-4 xl:gap-6">
        <div className="xl:flex-[0_1_928px]">
          <h5 className="mb-2 text-16 !text-ON_SURFACE">Поиск</h5>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength={50}
            placeholder="Подсказка"
            className="search h-[52px] !placeholder:text-ON_SURFACE_VAR !text-ON_SURFACE_VAR"
          />
        </div>
        <div className="xl:flex-[0_1_240px]">
          <h5 className="mb-2 text-16">Sortirowka</h5>
          <DropDown sort={sort} setSort={setSort} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SortModal;
