import { useState, useEffect } from 'react';

function useMessageTimer(time: number) {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    setShowMessage(false);
  }, []);

  const handleMessageReset = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), time);
  };

  return {
    showMessage,
    handleMessage: () => handleMessageReset(),
  };
}

export default useMessageTimer;
