import React from 'react';
import ToDoContainer from "./components/ToDoContainer";
import { Jumbotron } from "reactstrap"

const initialState = {
    toDos: [
        {id: 1, title: "Title 1", description: "Beschreibung 1", done: false},
        {id: 2, title: "Title 2", description: "Beschreibung 2", done: false},
        {id: 3, title: "Title 3", description: "Beschreibung 3", done: false},
        {id: 4, title: "Title 4", description: "Beschreibung 4", done: false}
    ]
}

const App = () => {

    return (
        <div>
            <Jumbotron>
                <h1>ToDos:</h1>
            </Jumbotron>
            <ToDoContainer initialToDos={initialState.toDos}/>
        </div>
    );
};


export default App;
