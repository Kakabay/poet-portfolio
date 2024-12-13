import { useGetPoems } from "@/query/use-get-poems";
import { Poem } from "@/services/types/poems.type";
import { useState } from "react";

interface SortType {
  id: string;
  view: string;
}

interface ReturnProps {
  sort: SortType;
  setSort: (obj: SortType) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  currentPage: number;
  setCurrentPage: (num: number) => void;
  displayedData: Poem[] | undefined;
  filterData: Poem[] | undefined;
}

export const getSortPoems = (
  poems: Poem[] | undefined,
  perPage: number
): ReturnProps => {
  const [sort, setSort] = useState({
    id: "new",
    view: "Snaçala nowye",
  });
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filterData = poems?.filter((item) =>
    item.poem_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const displayedData = filterData?.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return {
    sort,
    setSort,
    searchValue,
    setSearchValue,
    currentPage,
    setCurrentPage,
    displayedData,
    filterData,
  };
};
