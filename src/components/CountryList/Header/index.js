import { Input, Radio } from 'antd';

import './index.scss'

const { Search } = Input;

const ListHeader = () => {
    return (
        <div className='header'>
            <div className='search'>
                <Search  placeholder="input search text" enterButton />
            </div>
            <Radio.Group >
                <Radio.Button value="large">Добавить</Radio.Button>
                <Radio.Button value="default">Изменить</Radio.Button>
                <Radio.Button value="small">Удалить</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default ListHeader