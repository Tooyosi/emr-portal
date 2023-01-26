import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const CustomModal: React.FC<any> = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} className={`modal-dialog-centered custom-modal ${props.classProp}`} {...props}>
            <ModalBody>
                <div className="text-right">
                    <button type="button" className="close-btn" onClick={props.toggle} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {props.children}
            </ModalBody>
        </Modal>
    );
};


export default CustomModal;