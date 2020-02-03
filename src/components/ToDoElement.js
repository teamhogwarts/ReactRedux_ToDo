import React from "react";
import {Col, Card, CardBody, CardTitle, CardText, Button} from "reactstrap";

const ToDoElement = ({toDo: {id, title, description}}) =>

    <Col sm="6">
        <Card style={{marginTop: "2%"}} outline color="success">
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
                <Button>Edit</Button>
                <Button color="danger">Delete</Button>
            </CardBody>
        </Card>
    </Col>


export default ToDoElement
