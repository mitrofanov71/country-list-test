import React, { useEffect } from 'react';
import { Layout, Modal, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import ListHeader from './Header';
import { fetchCountry } from '../../store/actions/countryListAsyncActions';
import { clearError, fetchCountrySuccess } from '../../store/actions/countryListActionCreators';
import { getErrorSelector, getLoadingSelector } from '../../store/selectors/countryListSelectors';
import data from '../../mock/country-list.json';

const DEBUG = false;

function CountryList() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(getErrorSelector);
  const loading = useSelector(getLoadingSelector);

  useEffect(() => {
    if (DEBUG) {
      dispatch(fetchCountrySuccess(data));
    } else {
      dispatch(fetchCountry());
    }
  }, [dispatch]);

  const handleCloseModal = () => dispatch(clearError());

  return (
    <Layout style={{ minHeight: '100vh', padding: 10 }}>
      <Spin spinning={loading}>
        <ListHeader />
        <List />
        <Modal onCancel={handleCloseModal} onOk={handleCloseModal} open={!!errorMessage}>
          {errorMessage}
        </Modal>
      </Spin>

    </Layout>
  );
}

export default CountryList;
