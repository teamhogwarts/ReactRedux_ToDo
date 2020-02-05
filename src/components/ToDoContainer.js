import React, {useEffect } from "react";
import ToDoElement from "./ToDoElement";
import {Row, Container} from 'reactstrap'
import Filter from "./Filter";
import Dialog from "./Dialog";
import doFetch from "../util/fetchUtil";
import {useDispatch, useSelector, shallowEqual} from "react-redux";

const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const ToDoContainer = ({serverUrl}) => {

    const toDos = useSelector(state => state.toDos, shallowEqual)
    const filterTerm = useSelector(state => state.filterTerm, shallowEqual)
    const dispatch = useDispatch();

    const readAll = () => {
        dispatch(
            doFetch({
                url: serverUrl,
                actionType: "READ_TODOS",
                errorText: "read todo's failed"
            })
        )
    };

    useEffect(readAll, []);

    // const add = (toDo) => {
    //
    //     const dataHandler = savedTodo => setToDos([...toDos, savedTodo]);
    //
    //     doFetch({
    //         url: serverUrl,
    //         requestObject: {method: "POST", ...headers, body: JSON.stringify(toDo)},
    //         dataHandler,
    //         errorText: "add todo failed"
    //     });
    // };

    // const _delete = (id) => {
    //     const dataHandler = (ghj) => setToDos(toDos.filter(toDo => toDo.id !== id));
    //     doFetch({
    //         url: `${serverUrl}/${id}`,
    //         requestObject: {method: "DELETE"},
    //         dataHandler,
    //         errorText: "delete todo failed"
    //     });
    // };
    //
    // const update = (toUpdateToDo) => {
    //     const dataHandler = updatedToDo => setToDos(toDos.map(toDo => toDo.id === updatedToDo.id ? updatedToDo : toDo));
    //     doFetch({
    //         url: `${serverUrl}/${toUpdateToDo.id}`,
    //         requestObject: {method: "PUT", ...headers, body: JSON.stringify(toUpdateToDo)},
    //         dataHandler,
    //         errorText: "update todo failed"
    //     });
    // };

    const filter = () => {
        const filterTermIgnore = filterTerm.toLowerCase();
        if (filterTermIgnore === '') {
            return toDos;
        }
        return toDos.filter(toDo => toDo.title.toLowerCase().includes(filterTermIgnore) || toDo.description.toLowerCase().includes(filterTermIgnore))
    };

    return (<Container>
        <Filter filterTerm={filterTerm}/>
        {/*<Dialog actionFn={add} toDo={{title: '', description: ''}}*/}
        {/*        buttonStyle={{width: "100%", marginTop: "2%", marginBottom: "2%"}}*/}
        {/*        headerText={"Add a new ToDo"} color={"success"} dialogButtonLabel={"add"} actionLabel={"create"}/>*/}
        <Row>
            {/*{filter().map(toDo => <ToDoElement updateFn={update} deleteFn={_delete} key={toDo.id} toDo={toDo}/>)}*/}
            {toDos.map(toDo => <ToDoElement key={toDo.id} toDo={toDo}/>)}
        </Row>
    </Container>)

};


export default ToDoContainer
