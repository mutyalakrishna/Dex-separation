import { Modal } from 'antd';
import {CONFIRMATION_TITLE,CONFIRMATION_SUBTITLE,CANCEL,SUBMIT} from '../../constants'
const ModalDialog = (props) => {
    const {ok,cancel,showModal} = props;
    return (<>
    <Modal title={CONFIRMATION_TITLE} open={showModal} onOk={ok} onCancel={cancel} okText={SUBMIT}
        cancelText={CANCEL}>
        <p>{CONFIRMATION_SUBTITLE}</p>
    </Modal>
    </>)
}

export default ModalDialog