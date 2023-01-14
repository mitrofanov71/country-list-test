import { Table } from 'antd';

import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {resetSelectedCountry, setSelectedCountry} from "../../../store/actions/countryListActions";

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

const List = () => {
    const dispatch = useDispatch()
    const country = useSelector(state => state.country.list)
    const selectedRow = useSelector(state => state.country.selectedCountry)

    const countryForRender = useMemo(() => {
        return country.map(el => ({...el, key: el.id}))
    }, [country])


    return (
        <div className='list-wrapper'>
            <Table
                className='table'
                dataSource={countryForRender}
                columns={columns}
                rowClassName={(record) => record.id === selectedRow && 'ant-table-row-selected'}
                onRow={(record) => {
                return {
                    onClick: () => {
                        if (selectedRow === record.id) {
                            dispatch(resetSelectedCountry())
                        } else {
                            dispatch(setSelectedCountry(record.id))
                        }
                    },
                };
            }}/>
        </div>
    )
}

export default List