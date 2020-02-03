import React, {useEffect, useState} from 'react';
import ToDoContainer from "./components/ToDoContainer";
import { Jumbotron } from "reactstrap"
import doFetch from "./util/fetchUtil";

const initialState = {
    toDos: [
        {id: 1, title: "Title 1", description: "Beschreibung 1", done: false},
        {id: 2, title: "Title 2", description: "Beschreibung 2", done: false},
        {id: 3, title: "Title 3", description: "Beschreibung 3", done: false},
        {id: 4, title: "Title 4", description: "Beschreibung 4", done: false}
    ]
};

const App = () => {

    const [config, setConfig] = useState(null);

    const renderToDoContainer = config =>
        config ? <ToDoContainer initialToDos={initialState.toDos} serverUrl={config.serverUrl}/> : null;

    useEffect(() => {
        doFetch({
            url: 'application.json',
            dataHandler: setConfig,
            errorText: 'config error'
        })
    }, []);

    return (
        <div>
            <Jumbotron>
                <h1>ToDos:</h1>
            </Jumbotron>
            {renderToDoContainer(config)}
        </div>
    );
};


export default App;
