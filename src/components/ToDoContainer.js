import React, {useEffect, useState} from "react";
import ToDoElement from "./ToDoElement";
import {Row, Container} from 'reactstrap'
import Filter from "./Filter";
import Dialog from "./Dialog";
import doFetch from "../util/fetchUtil";

const headers = { headers: { 'Content-Type': 'application/json; charset=utf-8' } };

const ToDoContainer = ({initialToDos, serverUrl}) => {

    const [toDos, setToDos] = useState([]);

    const readAll = () => {
        doFetch({url: serverUrl, dataHandler: setToDos, errorText: "read todo's failed"});
    };

    useEffect(readAll, []);

    const add = (toDo) => {

        const dataHandler = savedTodo => setToDos([...toDos, savedTodo]);

        doFetch({url: serverUrl, requestObject: {method: "POST", ...headers, body: JSON.stringify(toDo)}, dataHandler, errorText: "add todo failed"});
    };

    const _delete = (id) => {
        const dataHandler = (ghj) => setToDos(toDos.filter(toDo => toDo.id !== id));
        doFetch({url: `${serverUrl}/${id}`, requestObject: {method: "DELETE"}, dataHandler, errorText: "delete todo failed"});
    };

    const update = (toUpdateToDo) => {
       const dataHandler = updatedToDo => setToDos(toDos.map(toDo => toDo.id === updatedToDo.id ? updatedToDo : toDo));
        doFetch({url: `${serverUrl}/${toUpdateToDo.id}`, requestObject: {method: "PUT", ...headers, body: JSON.stringify(toUpdateToDo)}, dataHandler, errorText: "update todo failed"});
    };

    return (<Container>
        <Filter/>
        <Dialog actionFn={add} toDo={{title: '', description: ''}} buttonStyle={{width: "100%", marginTop: "2%", marginBottom: "2%"}}
                headerText={"Add a new ToDo"} color={"success"} dialogButtonLabel={"add"} actionLabel={"create"}/>
        <Row>
            {toDos.map(toDo => <ToDoElement updateFn={update} deleteFn={_delete} key={toDo.id} toDo={toDo}/>)}
        </Row>
    </Container>)

};


export default ToDoContainer
