import React, {useEffect, useState} from "react";
import ToDoElement from "./ToDoElement";
import {Row, Container} from 'reactstrap'
import Filter from "./Filter";
import Dialog from "./Dialog";
import doFetch from "../util/fetchUtil";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {readTodo, deleteTodo, updateTodo, addTodo} from "../actions/actions";

const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const ToDoContainer = ({initialToDos, serverUrl}) => {

    // useSelector erhält den kompletten State vom Store
    // somit kann auf einen bestimmten Teil des Stores zugegriffen werden (hier auf die todos)
    const toDos = useSelector(state => state.todos, shallowEqual);

    const [filterTerm, setFilterTerm] = useState("");

    // mit useDispatch wird eine Funktion zurückgeben, die eine Aktion an den Store weiterleiten(dispatchen) kann
    const dispatch = useDispatch();

    const readAll = () => {
        dispatch(doFetch({url: serverUrl, actionCreator: readTodo, errorText: "read todo's failed"}))
    };

    useEffect(readAll, []);

    const add = (toDoToAdd) => {
        // const dataHandler = savedTodo => setToDos([...toDos, savedTodo]);

        const hasTodoAlready = toDos.some(todo => todo.title === toDoToAdd.title);

        if (!hasTodoAlready) {
            dispatch(doFetch({
                url: serverUrl,
                requestObject: {method: "POST", ...headers, body: JSON.stringify(toDoToAdd)},
                actionCreator: addTodo,
                errorText: "add todo failed"
            }))
        }
    };

    const _delete = (id) => {
        // const dataHandler = () => setToDos(toDos.filter(toDo => toDo.id !== id));

        dispatch(doFetch({
            url: `${serverUrl}/${id}`,
            requestObject: {method: "DELETE"},
            actionCreator: deleteTodo,
            errorText: "delete todo failed"
        }));
    };

    const update = (toUpdateToDo) => {

        // const dataHandler = updatedToDo => setToDos(toDos.map(toDo => toDo.id === updatedToDo.id ? updatedToDo : toDo));

        dispatch(doFetch({
            url: `${serverUrl}/${toUpdateToDo.id}`,
            requestObject: {method: "PUT", ...headers, body: JSON.stringify(toUpdateToDo)},
            actionCreator: updateTodo,
            errorText: "update todo failed"
        }));
    };

    const filter = () => {
        const filterTermIgnore = filterTerm.toLowerCase();
        if (filterTermIgnore === '') {
            return toDos;
        }
        return toDos.filter(toDo => toDo.title.toLowerCase().includes(filterTermIgnore) || toDo.description.toLowerCase().includes(filterTermIgnore))
    };

    return (<Container>
        <Filter filterFn={setFilterTerm}/>
        <Dialog actionFn={add} toDo={{title: '', description: ''}}
                buttonStyle={{width: "100%", marginTop: "2%", marginBottom: "2%"}}
                headerText={"Add a new ToDo"} color={"success"} dialogButtonLabel={"add"} actionLabel={"create"}/>
        <Row>
            {filter().map(toDo => <ToDoElement updateFn={update} deleteFn={_delete} key={toDo.id} toDo={toDo}/>)}
        </Row>
    </Container>)

};

export default ToDoContainer
