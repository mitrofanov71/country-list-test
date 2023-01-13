import {Radio} from "antd";
import AddButton from "./AddButton";
import ChangeButton from "./ChangeButton";
import RemoveButton from "./RemoveButton";

const ButtonsGroup = () => {
    return (
        <>
            <Radio.Group >
                <AddButton/>
                <ChangeButton/>
                <RemoveButton/>
            </Radio.Group>
        </>

    )
}

export default ButtonsGroup