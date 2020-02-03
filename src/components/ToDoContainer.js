import React, {useEffect, useState} from "react";
import ToDoElement from "./ToDoElement";
import {Row, Container} from 'reactstrap'
import Filter from "./Filter";
import Dialog from "./Dialog";
import doFetch from "../util/fetchUtil";

const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const ToDoContainer = ({initialToDos, serverUrl}) => {

    const [toDos, setToDos] = useState([]);
    const [copyOfTodos, setCopyOfTodos] = useState([]);

    const readAll = () => {
        doFetch({url: serverUrl, dataHandler: setToDos, errorText: "read todo's failed"});
        setCopyOfTodos([...toDos]);
    };

    useEffect(readAll, []);

    const add = (toDo) => {

        const dataHandler = savedTodo => setToDos([...toDos, savedTodo]);

        doFetch({
            url: serverUrl,
            requestObject: {method: "POST", ...headers, body: JSON.stringify(toDo)},
            dataHandler,
            errorText: "add todo failed"
        });
    };

    const _delete = (id) => {
        const dataHandler = (ghj) => setToDos(toDos.filter(toDo => toDo.id !== id));
        doFetch({
            url: `${serverUrl}/${id}`,
            requestObject: {method: "DELETE"},
            dataHandler,
            errorText: "delete todo failed"
        });
    };

    const update = (toUpdateToDo) => {
        const dataHandler = updatedToDo => setToDos(toDos.map(toDo => toDo.id === updatedToDo.id ? updatedToDo : toDo));
        doFetch({
            url: `${serverUrl}/${toUpdateToDo.id}`,
            requestObject: {method: "PUT", ...headers, body: JSON.stringify(toUpdateToDo)},
            dataHandler,
            errorText: "update todo failed"
        });
    };

    const filter = event => {
        const data = [...copyOfTodos];
        const filterTerm = event.target.value;
        if (filterTerm === '') {
            setToDos(data);
        }
        setToDos(data.filter(toDo => toDo.title.includes(filterTerm) || toDo.description.includes(filterTerm)));
    };

    return (<Container>
        <Filter filterFn={filter}/>
        <Dialog actionFn={add} toDo={{title: '', description: ''}}
                buttonStyle={{width: "100%", marginTop: "2%", marginBottom: "2%"}}
                headerText={"Add a new ToDo"} color={"success"} dialogButtonLabel={"add"} actionLabel={"create"}/>
        <Row>
            {toDos.map(toDo => <ToDoElement updateFn={update} deleteFn={_delete} key={toDo.id} toDo={toDo}/>)}
        </Row>
    </Container>)

};


export default ToDoContainer
