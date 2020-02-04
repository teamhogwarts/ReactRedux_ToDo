import reducer from '../reducers/reducers.js'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

const consoleMessages = store => next => action => {

};

// export default (initialState={}) => applyMiddleware(thunk, consoleMessages)(createStore)(reducer, initialState);
export default initialState => createStore(reducer, initialState, applyMiddleware(ReduxThunk));

