import React, { useMemo } from 'react';
import { Modal, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useModalButton from '../../../utils/hooks/useModalButton';
import CountryForm from '../CountryForm';
import { changeCountryAction } from '../../../store/actions/countryListAsyncActions';
import { getCountryListSelector, getSelectedCountrySelector } from '../../../store/selectors/countryListSelectors';

function ChangeButton() {
  const {
    isOpen, disabled, handleOpen, handleClose,
  } = useModalButton();
  const selectedRow = useSelector(getSelectedCountrySelector);
  const countryList = useSelector(getCountryListSelector);
  const dispatch = useDispatch();

  const initialValue = useMemo(() => {
    if (selectedRow) {
      return countryList.find((el) => el.id === selectedRow);
    }
    return null;
  }, [selectedRow, countryList]);

  const handleSubmit = (data) => {
    const sendData = {
      id: selectedRow,
      ...data,
    };
    dispatch(changeCountryAction(sendData));
    handleClose();
  };

  return (
    <>
      <Radio.Button value="default" disabled={disabled} onClick={handleOpen}>Изменить</Radio.Button>
      <Modal title="Измениь" open={isOpen} onCancel={handleClose} footer={null}>
        <CountryForm onSubmit={handleSubmit} initialValue={initialValue} />
      </Modal>
    </>

  );
}

export default ChangeButton;
