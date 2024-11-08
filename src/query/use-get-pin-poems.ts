import poetService from '@/services/poet.service';
import { PinnedPoems } from '@/services/types/pin-poems.type';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useGetPinPoems = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['pinPoems'],
    queryFn: () => poetService.getPinPoems(),
    select: (data) => data,
    // Обход ошибки, добавляя тип к опциям
  } as UseQueryOptions<PinnedPoems, Error>);

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
