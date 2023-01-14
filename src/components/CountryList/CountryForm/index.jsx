import { useEffect, useMemo, useState } from 'react';
import { Input, Button, InputNumber } from 'antd';

import './index.scss';

function CountryForm({ onSubmit, initialValue }) {
  const [name, setName] = useState(initialValue.name ?? '');
  const [citizens, setCitizens] = useState(initialValue.citizens ?? '');

  useEffect(() => {
    setName(initialValue.name);
    setCitizens(initialValue.citizens);
  }, [initialValue]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const isSubmitButtonDisabled = useMemo(() => !(name && citizens), [name, citizens]);

  const handleSubmit = () => {
    onSubmit({ name, citizens: Number(citizens) });
  };

  return (
    <div className="country-form">
      <Input placeholder="Название страны" value={name} onChange={handleChangeName} requaired />
      <InputNumber placeholder="Количество жителей" value={citizens} onChange={setCitizens} />
      <Button disabled={isSubmitButtonDisabled} onClick={handleSubmit} type="primary">Отправить</Button>
    </div>
  );
}

export default CountryForm;
