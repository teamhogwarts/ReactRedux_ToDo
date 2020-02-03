import React from "react";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";

const FormGroupElement = ({onChangeHandler, label, id, value, name}) => {
    return (
        <FormGroup row>
            <Label for={id} sm={2}>{label}</Label>
            <Col sm={10}>
                <Input type="text" name={name} id={id} placeholder={label} onChange={onChangeHandler} value={value}/>
            </Col>
        </FormGroup>
    )
};

export default FormGroupElement
