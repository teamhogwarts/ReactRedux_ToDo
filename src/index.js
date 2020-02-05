import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk'    // für ASYNC-Dispatching (zB. Fetching)
import  reducer from './reducers/reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const initialState = {
    toDos: [],
    filterTerm: '',
    config: null // null, damit der Null-Test beim Rendern funktioniert und NICHTS gerendert wird
};

const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
