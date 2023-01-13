import { Input, Button } from 'antd';

import './index.scss'



const CountryForm = ({onSubmit}) => {
    return (
        <div className='country-form'>
            <Input placeholder="Название страны" />
            <Input placeholder="Количество жителей" />
            <Button onClick={onSubmit} type="primary">Отправить</Button>
        </div>
    )
}

export default CountryForm