import React, {useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import ToDoContainer from "./components/ToDoContainer";
import { Jumbotron } from "reactstrap"
import doFetch from "./util/fetchUtil";


/**
 * Die Wurzel der React-App.
 */
const App = () => {

    const config = useSelector(state => state.config, shallowEqual)
    const dispatch = useDispatch();

    const readConfig = () =>{
        dispatch(
            doFetch({
                url: 'application.json',
                actionType: "LOAD_CONFIG",
                errorText: 'config error'
            })
        )
    }

    useEffect(readConfig, []);

    const renderToDoContainer = config =>
        config ? <ToDoContainer serverUrl={config.serverUrl}/> : null;

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
