import { Divider, Radio, Table } from 'antd';

import './index.scss'

const dataSource = [
    {
        key: '1',
        name: 'Россия',
        citizents: 10,
    },
    {
        key: '2',
        name: 'Америка',
        citizents: 20,
    },
];

const columns = [
    {
        title: 'Страна',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Кол-во граждан',
        dataIndex: 'citizents',
        key: 'citizents',
        sorter: (a, b) => a.citizents - b.citizents,
    },
];

const List = () => {
    return (
        <div className='list-wrapper'>
            <Table className='table' dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default List