import React from 'react';
import { Input } from 'antd';
import ButtonsGroup from '../ButtonsGroup';

import './index.scss';

const { Search } = Input;

function ListHeader() {
  return (
    <div className="header">
      <div className="search">
        <Search placeholder="input search text" enterButton />
      </div>
      <ButtonsGroup />
    </div>
  );
}

export default ListHeader;
