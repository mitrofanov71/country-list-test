import { Layout, Modal, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import List from './List';
import ListHeader from './Header';
import { clearError, fetchCountry } from '../../store/actions/countryListActions';

function CountryList() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.country.error);
  const loading = useSelector((state) => state.country.loading);

  useEffect(() => {
    dispatch(fetchCountry());
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
