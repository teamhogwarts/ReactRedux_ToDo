import React, {useEffect, useState} from "react";
import ToDoElement from "./ToDoElement";
import {Row, Container} from 'reactstrap'
import Filter from "./Filter";
import Dialog from "./Dialog";



const ToDoContainer = ({initialToDos}) => {

    const [toDos, setToDos] = useState([]);

    const getId = () => {
        let higestId = 0;
        toDos.forEach(e => {
            higestId = higestId < e.id ? e.id : higestId;
        });
        return higestId + 1;
    }

    const readAll = () => {
        setToDos(initialToDos)
    }

    useEffect(readAll, [])

    const add = (toDo) => {
        const toDoWithNewID = {...toDo, id: getId()}
        
        setToDos([...toDos, toDoWithNewID])
    }

    const _delete = (id) => {
        setToDos(toDos.filter(toDo => toDo.id !== id))
    }

    const update = (updatedToDo) => {
       setToDos(toDos.map(toDo => toDo.id === updatedToDo.id ? updatedToDo : toDo))
    }

    return (<Container>
        <Filter/>
        <Dialog actionFn={add} toDo={{title: '', description: ''}} buttonStyle={{width: "100%", marginTop: "2%", marginBottom: "2%"}}
                headerText={"Add a new ToDo"} color={"success"} dialogButtonLabel={"add"} actionLabel={"create"}/>
        <Row>
            {toDos.map(toDo => <ToDoElement updateFn={update} deleteFn={_delete} key={toDo.id} toDo={toDo}/>)}
        </Row>
    </Container>)

}


export default ToDoContainer
