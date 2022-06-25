import { useQuery } from 'react-query';

const { api } = window;

function useGetImage(thumbHash: string) {
  const { data, isLoading, error, refetch } = useQuery(
    ['get-preview', thumbHash],
    async () => {
      const data = await api.getFilePreview(thumbHash);

      return data?.preview;
    },
    {
      enabled: !!thumbHash,
      refetchOnMount: true,
    },
  );

  return { data, isLoading, error, realData: data, refetch };
}

export default useGetImage;
