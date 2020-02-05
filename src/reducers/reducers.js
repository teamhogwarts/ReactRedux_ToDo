import C from '../actions/actionConstants.js';
import {combineReducers} from 'redux';

export const todos = (state = [], {type, payload}) => {
    switch (type) {
        case C.ADD_TODO:
            return [...state, payload];
        case C.DELETE_TODO:
            return state.filter(todo => todo.id !== payload);
        case C.READ_TODO:
            return [...payload];
        case C.UPDATE_TODO:
            return state.map(toDo => toDo.id === payload.id ? payload : toDo);
        default:
            return state
    }
};

export const config = (state = {}, {type, payload}) => {
    switch (type) {
        case C.ADD_CONFIG:
            return payload;
        default:
            return state
    }
};


export default combineReducers({
    todos,
    config
});


