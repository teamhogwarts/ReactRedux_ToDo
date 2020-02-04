import C from './actionConstants'

export const addTodo = todo => {
    return {
        type: C.ADD_TODO,
        payload: todo
    }
};

export const deleteTodo = id => {
    return {
        type: C.DELETE_TODO,
        payload: id
    }
};

export const updateTodo = todo => {
    return {
        type: C.UPDATE_TODO,
        payload: todo
    }
};

export const readTodo = todos => {
    return {
        type: C.READ_TODO,
        payload: todos
    }
};

export const addConfig = config => {
    return {
        type: C.ADD_CONFIG,
        payload: config
    }
};
