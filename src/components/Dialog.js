import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, Form} from 'reactstrap'
import FormGroupElement from "./FormGroupElement";

const Dialog = ({toDo, dialogButtonLabel, color, actionLabel, buttonStyle, headerText, actionFn}) => {

    const [toDoState, setToDo] = useState(toDo);
    const [modal, setModal] = useState(false);

    const change = event => setToDo({...toDoState, [event.target.name]: event.target.value});

    const onAction = (toDo, actionFn) => {
        (actionFn || (x => x)) (toDo)
        close()
    }

    const close = () => setModal(false);
    const open = () => setModal(true);

    return (
        <>
            <Button style={buttonStyle} color={color} onClick={open}>{dialogButtonLabel}</Button>
            <Modal isOpen={modal} toggle={close}>
                <ModalHeader toggle={close}>{headerText}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroupElement name={"title"} onChangeHandler={change} id={"toDoTitle"}
                                          value={toDoState.title} label={"Title"}/>
                        <FormGroupElement name={"description"} onChangeHandler={change} id={"toDoDescription"}
                                          value={toDoState.description} label={"Description"}/>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => onAction(toDoState, actionFn)}>{actionLabel}</Button>{' '}
                    <Button color="secondary" onClick={close}>cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Dialog
