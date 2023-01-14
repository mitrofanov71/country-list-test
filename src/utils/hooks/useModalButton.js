import { useState } from 'react';
import { useSelector } from 'react-redux';

const useModalButton = () => {
  const selectedRow = useSelector((state) => state.country.selectedCountry);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return {
    isOpen,
    disabled: !selectedRow,
    handleOpen,
    handleClose,
  };
};

export default useModalButton;
