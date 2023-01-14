import React from 'react';
import { Radio } from 'antd';
import AddButton from './AddButton';
import ChangeButton from './ChangeButton';
import RemoveButton from './RemoveButton';

function ButtonsGroup() {
  return (
    <Radio.Group>
      <AddButton />
      <ChangeButton />
      <RemoveButton />
    </Radio.Group>

  );
}

export default ButtonsGroup;
