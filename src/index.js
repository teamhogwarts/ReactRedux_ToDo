import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from "react-redux";
import storeFactory from "./store/store.js"


const initialState = {
    todos: [],
    config: null
};

const store = storeFactory(initialState);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
