import {Modal, Radio} from "antd";
import {useModalButton} from "../../../utils/hooks/useModalButton";
import CountryForm from "../CountryForm";

const ChangeButton = () => {
    const {isOpen, handleOpen, handleClose} = useModalButton()
    return (
        <>
            <Radio.Button value="default" onClick={handleOpen}>Изменить</Radio.Button>
            <Modal title={'Измениь'} open={isOpen} onCancel={handleClose} footer={null}>
                <CountryForm onSubmit={() => {console.log('kek')}}/>
            </Modal>
        </>

    )
}

export default ChangeButton