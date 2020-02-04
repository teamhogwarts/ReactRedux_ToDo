import C from '../actions/actionConstants.js';
import {combineReducers} from 'redux';

export const todos = (state=[], action) => {
    switch (action.type) {
        case C.ADD_TODO:
            return [...state, action.payload];
        case C.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case C.READ_TODO:
            return [...action.payload];
        case C.UPDATE_TODO:
            return state.map(toDo => toDo.id === action.payload.id ? action.payload : toDo);
        default:
            return state
    }
};

export const config = (state={}, action) => {
    switch (action.type) {
        case C.ADD_CONFIG:
            return action.payload;
        default:
            return state
    }
};



export default combineReducers({
    todos,
    config
});