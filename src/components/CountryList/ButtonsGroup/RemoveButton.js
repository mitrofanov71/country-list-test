import {Modal, Radio} from "antd";
import {useModalButton} from "../../../utils/hooks/useModalButton";

const RemoveButton = () => {
    const {isOpen, handleOpen, handleClose} = useModalButton()
    return (
        <>
            <Radio.Button value="small" onClick={handleOpen}>Удалить</Radio.Button>
            <Modal
                title={'Вы уверенны что хотите удалить страну?'}
                open={isOpen}
                onCancel={handleClose}
                okText='Да'
                okType='danger'
                cancelText='Нет'/>
        </>

    )
}

export default RemoveButton