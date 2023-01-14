import {Modal, Radio} from "antd";
import {useModalButton} from "../../../utils/hooks/useModalButton";
import CountryForm from "../CountryForm";
import {useDispatch} from "react-redux";
import {addCountryAction} from "../../../store/actions/countryListActions";

const AddButton = () => {
    const {isOpen, handleOpen, handleClose} = useModalButton()
    const dispatch = useDispatch()
    const handleSubmit = (data) => {
        dispatch(addCountryAction(data))
        handleClose()
    }
    return (
        <>
            <Radio.Button value="large" onClick={handleOpen}>Добавить</Radio.Button>
            <Modal title={'Добавить'} open={isOpen} onCancel={handleClose} footer={null}>
                <CountryForm onSubmit={handleSubmit}/>
            </Modal>
        </>

    )
}

export default AddButton