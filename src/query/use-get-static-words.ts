import poetService from '@/services/poet.service';
import { useQuery } from '@tanstack/react-query';

export const useGetStatic = (id: number) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['staticWords', id],
    queryFn: () => poetService.getStatic(id),
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
