import React from "react";
import ToDoElement from "./ToDoElement";
import {Row, Container} from 'reactstrap'
import Filter from "./Filter";
import Dialog from "./Dialog";

const ToDoContainer = ({toDos}) =>
    <Container>
        <Filter/>
        <Dialog toDo={{title:'', description:''}} buttonStyle={{width: "100%", marginTop: "2%", marginBottom: "2%"}} headerText={"Add a new ToDo"} color={"success"} dialogButtonLabel={"add"} actionLabel={"create"}/>
        <Row>
            {toDos.map(toDo => <ToDoElement key={toDo.id} toDo={toDo}/>)}
        </Row>
    </Container>


export default ToDoContainer
