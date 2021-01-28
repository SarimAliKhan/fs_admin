import React from 'react';
import { Modal, ModalBody,Label } from 'reactstrap';

const StringPopUp = (props) => {
    return(
        <Modal {...props} size="lg">
            <ModalBody>
                <Label>{"Text Goes here : "}</Label>
            </ModalBody>
        </Modal>
    );
}

export default StringPopUp;