import React from "react";
import {Col, Card, CardBody, CardTitle, CardText, Button} from "reactstrap";
import Dialog from "./Dialog";

const ToDoElement = ({toDo, toDo: {id, title, description}}) =>

    <Col sm="6">
        <Card style={{marginTop: "2%"}} outline color="success">
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
                <div style={{display: "inline-block"}}>
                    <Dialog toDo={toDo} headerText={"Edit ToDo"} color={"info"} actionLabel={"save"} dialogButtonLabel={"edit"}/>
                    <Button color="danger">Delete</Button>
                </div>
            </CardBody>
        </Card>
    </Col>


export default ToDoElement
