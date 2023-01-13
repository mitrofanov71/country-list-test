import {Modal, Radio} from "antd";
import {useModalButton} from "../../../utils/hooks/useModalButton";
import CountryForm from "../CountryForm";

const AddButton = () => {
    const {isOpen, handleOpen, handleClose} = useModalButton()
    return (
        <>
            <Radio.Button value="large" onClick={handleOpen}>Добавить</Radio.Button>
            <Modal title={'Добавить'} open={isOpen} onCancel={handleClose} footer={null}>
                <CountryForm onSubmit={() => {console.log('kek')}}/>
            </Modal>
        </>

    )
}

export default AddButton