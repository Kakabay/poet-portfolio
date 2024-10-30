import poetService from "@/services/poet-post.service";
import { useQuery } from "@tanstack/react-query";

interface Props {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
}

const usePostUser = (formData: Props) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["postUser"],
    queryFn: () => poetService.postUser(formData),
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default usePostUser;
