import poetService from '@/services/poet.service';
import { useQuery } from '@tanstack/react-query';

export const useGetPinPoems = () => {
  const { data, isLoading, isError, isSuccess, isRefetching, refetch } = useQuery({
    queryKey: ['pinPoems'],
    queryFn: () => poetService.getPinPoems(),
    select: (data) => data,
  });
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    isRefetching,
    refetch,
  };
};
