import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCountrySelector } from '../../store/selectors/countryListSelectors';

const useModalButton = () => {
  const selectedRow = useSelector(getSelectedCountrySelector);
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
