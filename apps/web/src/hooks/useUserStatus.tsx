import { useEffect, useState } from 'react';

function useUserStatus() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('userLoggedIn') || false);

  useEffect(() => {
    storageEventHandler();
    window.addEventListener('storage', storageEventHandler, false);
  }, []);

  function storageEventHandler() {
    setIsUserLoggedIn(localStorage.getItem('userLoggedIn') || false);
  }

  return isUserLoggedIn;
}

export default useUserStatus;
