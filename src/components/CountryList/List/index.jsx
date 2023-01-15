import React, { useMemo } from 'react';
import { Table } from 'antd';

import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedCountry, setSelectedCountry } from '../../../store/actions/countryListActionCreators';
import { getCountryListSelector, getSelectedCountrySelector } from '../../../store/selectors/countryListSelectors';

const columns = [
  {
    title: 'Страна',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Кол-во граждан',
    dataIndex: 'citizens',
    key: 'citizens',
    sorter: (a, b) => a.citizens - b.citizens,
  },
];

function List() {
  const dispatch = useDispatch();
  const country = useSelector(getCountryListSelector);
  const selectedRow = useSelector(getSelectedCountrySelector);

  const countryForRender = useMemo(() => country.map((el) => ({ ...el, key: el.id })), [country]);

  return (
    <div className="list-wrapper">
      <Table
        className="table"
        dataSource={countryForRender}
        columns={columns}
        rowClassName={(record) => record.id === selectedRow && 'ant-table-row-selected'}
        onRow={(record) => ({
          onClick: () => {
            if (selectedRow === record.id) {
              dispatch(resetSelectedCountry());
            } else {
              dispatch(setSelectedCountry(record.id));
            }
          },
        })}
      />
    </div>
  );
}

export default List;
