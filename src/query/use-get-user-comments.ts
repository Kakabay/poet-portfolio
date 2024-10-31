import poetService from '@/services/poet.service';
import { useAuthStore } from '@/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';

export const useGetUserComments = () => {
  const token = useAuthStore((state) => state.accessToken);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['userComments'],
    queryFn: () => poetService.getUserComments(),
    enabled: !!token,
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};
