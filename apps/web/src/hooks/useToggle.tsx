import { useState } from 'react';

function useToggle(initialState: boolean): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleSwitch = () => {
    setIsOpen(prev => !prev);
  };
  return [isOpen, toggleSwitch];
}
export default useToggle;
