import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

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
  const [sort, setSort] = useState({ id: "new", view: "Snaçala nowye" });

  console.log(sort);

  return (
    <div className="relative min-h-[288px] max-w-[284px] drop-shadow-INNER_SHADOW">
      <img
        src="/images/poems/1.png"
        alt=""
        className="absolute object-cover h-full w-full -z-10"
      />

      <div className="flex flex-col gap-6 py-12 px-6">
        <div>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">Поиск</h5>
          <input type="text" placeholder="Подсказка" className="input" />
        </div>

        <div>
          <h5 className="text-[16px] leading-[150%] mb-2 font-medium">
            Sortirowka
          </h5>
          <Select>
            <SelectTrigger value={sort.id}>{sort.view}</SelectTrigger>
            <SelectContent>
              {sortData
                .filter((item) => item.id !== sort.id)
                .map((item) => (
                  <SelectItem
                    onClick={() => setSort(item)}
                    key={item.id}
                    value={item.id}
                    className="cursor-pointer"
                  >
                    {item.view}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
