import React from 'react';
import { Modal, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useModalButton from '../../../utils/hooks/useModalButton';
import { removeCountryAction } from '../../../store/actions/countryListActions';

function RemoveButton() {
  const {
    isOpen, disabled, handleOpen, handleClose,
  } = useModalButton();
  const selectedRow = useSelector((state) => state.country.selectedCountry);
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (selectedRow) {
      dispatch(removeCountryAction(selectedRow));
      handleClose();
    }
  };

  return (
    <>
      <Radio.Button value="small" disabled={disabled} onClick={handleOpen}>Удалить</Radio.Button>
      <Modal
        title="Вы уверенны что хотите удалить страну?"
        open={isOpen}
        onCancel={handleClose}
        onOk={handleRemove}
        okText="Да"
        okType="danger"
        cancelText="Нет"
      />
    </>

  );
}

export default RemoveButton;
