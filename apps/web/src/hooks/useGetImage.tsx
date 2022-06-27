import { useQuery } from 'react-query';

const { api } = window;

function useGetImage(thumbHash: string) {
  const { data, isLoading, error, refetch } = useQuery(
    ['get-thumb', thumbHash],
    async () => {
      const data = await api.getThumb(thumbHash);

      return data?.data;
    },
    {
      enabled: !!thumbHash,
      refetchOnMount: true,
    },
  );

  return { data, isLoading, error, realData: data, refetch };
}

export default useGetImage;
