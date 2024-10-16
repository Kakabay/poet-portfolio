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
      <div className="flex md:flex-row flex-col md:items-center gap-4 md:gap-6">
        <div className="md:flex-[0_1_79%]">
          <h5 className="mb-2 text-16 !text-ON_SURFACE">Поиск</h5>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength={50}
            placeholder="Подсказка"
            className="search h-[52px] !placeholder:text-ON_SURFACE_VAR !text-ON_SURFACE_VAR"
          />
        </div>
        <div className="md:flex-[0_0_240px]">
          <h5 className="mb-2 text-16">Sortirowka</h5>
          <DropDown sort={sort} setSort={setSort} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SortModal;
