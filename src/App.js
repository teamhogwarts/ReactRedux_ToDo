import React, {useEffect} from 'react';
import ToDoContainer from "./components/ToDoContainer";
import {Jumbotron} from "reactstrap";
import doFetch from "./util/fetchUtil";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addConfig} from "./actions/actions";

const App = () => {

    const config = useSelector(state => state.config, shallowEqual);
    const dispatch = useDispatch();

    const readConfig = () => {
        dispatch(
            doFetch({
                url: 'application.json',
                actionCreator: addConfig,
            })
        )
    };

    useEffect(readConfig, []);

    const renderToDoContainer = config =>
        config ? <ToDoContainer serverUrl={config.serverUrl}/> : null;

    return (
        <div>
            <Jumbotron>
                <h1>ToDos:</h1>
            </Jumbotron>
            {renderToDoContainer(config)}
        </div>);
};

export default App;
