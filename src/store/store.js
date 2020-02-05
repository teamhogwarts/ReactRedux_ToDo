import reducer from '../reducers/reducers.js'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

const consoleMessages = store => next => action => {

    console.groupCollapsed(`Dispatching Action => ${action.type}`);
    console.log(`old state in store: `);
    console.dir(store.getState());

    const result = next(action);

    console.log(`new state in store: `);
    console.dir(store.getState());
    console.groupEnd();

    return result;
};

export default initialState => createStore(reducer, initialState, applyMiddleware(ReduxThunk, consoleMessages));

