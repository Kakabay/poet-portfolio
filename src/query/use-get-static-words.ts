import poetService from "@/services/poet.service";
import { useQuery } from "@tanstack/react-query";

export const useGetStatic = (id: number, key: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: [key, id],
    queryFn: () => poetService.getStatic(id),
    select: ({ data }) => data[0]?.word,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
