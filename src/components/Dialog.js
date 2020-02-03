import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap'

const Dialog = ({dialogButtonLabel, color, actionLabel, buttonStyle}) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button style={buttonStyle} color={color} onClick={toggle}>{dialogButtonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>{actionLabel}</Button>{' '}
                    <Button color="secondary" onClick={toggle}>cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Dialog
