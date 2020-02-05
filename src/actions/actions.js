import C from './actionConstants'

export const addTodo = todo => ({
        type: C.ADD_TODO,
        payload: todo
    }
);

export const deleteTodo = id => ({
        type: C.DELETE_TODO,
        payload: id
    }
);

export const updateTodo = todo => ({
        type: C.UPDATE_TODO,
        payload: todo
    }
);

export const readTodo = todos => ({
        type: C.READ_TODO,
        payload: todos
    }
);

export const addConfig = config => ({
        type: C.ADD_CONFIG,
        payload: config
    }
);
