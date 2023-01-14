import {Modal, Radio} from "antd";
import {useModalButton} from "../../../utils/hooks/useModalButton";
import CountryForm from "../CountryForm";
import {changeCountryAction} from "../../../store/actions/countryListActions";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";


const ChangeButton = () => {
    const {isOpen, disabled, handleOpen, handleClose} = useModalButton()
    const selectedRow = useSelector(state => state.country.selectedCountry)
    const countryList = useSelector(state => state.country.list)
    const dispatch = useDispatch()

    const initialValue = useMemo(() => {
        if (selectedRow) {
            return countryList.find(el => el.id === selectedRow)
        }
    }, [selectedRow, countryList])

    const handleSubmit = (data) => {
        const sendData = {
            id: selectedRow,
            ...data
        }
        dispatch(changeCountryAction(sendData))
        handleClose()
    }

    return (
        <>
            <Radio.Button value="default" disabled={disabled} onClick={handleOpen}>Изменить</Radio.Button>
            <Modal title={'Измениь'} open={isOpen} onCancel={handleClose} footer={null}>
                <CountryForm onSubmit={handleSubmit} initialValue={initialValue}/>
            </Modal>
        </>

    )
}

export default ChangeButton