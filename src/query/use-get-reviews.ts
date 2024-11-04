import poetService from '@/services/poet.service';
import { useQuery } from '@tanstack/react-query';

export const useGerReviews = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => poetService.getReviews(),
    select: (data) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
