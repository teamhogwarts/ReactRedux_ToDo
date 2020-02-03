import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, FormGroup, Form, Label, Col, Input} from 'reactstrap'
import FormGroupElement from "./FormGroupElement";

const Dialog = ({toDo, dialogButtonLabel, color, actionLabel, buttonStyle, headerText}) => {

    const [toDoState, setToDo] = useState(toDo);

    const change = event => setToDo({...toDoState, [event.target.name]: event.target.value})

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button style={buttonStyle} color={color} onClick={toggle}>{dialogButtonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>{headerText}</ModalHeader>
                <ModalBody>
                    <Form>
                       <FormGroupElement name={"title"} onChangeHandler={change} id={"toDoTitle"} value={toDoState.title} label={"Title"}/>
                       <FormGroupElement name={"description"} onChangeHandler={change} id={"toDoDescription"} value={toDoState.description} label={"Description"}/>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>{actionLabel}</Button>{' '}
                    <Button color="secondary" onClick={toggle}>cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Dialog
