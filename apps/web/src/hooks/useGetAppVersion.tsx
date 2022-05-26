import { useQuery } from 'react-query';

const { api } = window;

function useGetAppVersion() {
  const { data: version } = useQuery('get-app-version', async () => {
    const version = await api.getAppVersion();

    return version;
  });

  return {
    version,
  };
}

export default useGetAppVersion;
