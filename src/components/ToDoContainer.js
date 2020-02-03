import React from "react";
import ToDoElement from "./ToDoElement";
import {Row, Container, Button} from 'reactstrap'
import Filter from "./Filter";

const ToDoContainer = ({toDos}) =>
    <Container>
        <Filter/>
        <Button style={{width: "100%", marginTop: "2%", marginBottom: "2%"}} color="success">Add</Button>
        <Row>
            {toDos.map(toDo => <ToDoElement key={toDo.id} toDo={toDo}/>)}
        </Row>
    </Container>


export default ToDoContainer
