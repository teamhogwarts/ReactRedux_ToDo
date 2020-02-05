const REDUCERS ={
    'LOAD_CONFIG': (state, action) => ({...state, config: action.data}),
    'READ_TODOS': (state, action) => ({...state, toDos: action.data}),
    'ADD_TODOS': (state, action) => ({...state, toDos: [...state.toDos, action.data]}),
    'UPDATE_TODOS': (state, action) => ({...state, toDos: [...state.toDos.map(toDo => toDo.id === action.data.id ? action.data :  toDo) ] }),
    'DELETE_TODOS': (state, action) => ({...state, toDos: [...state.toDos.filter(toDo => toDo !== action.data.id)]}),
    'UPDATE_FILTER_TERM': (state, action) => ({...state, filterTerm: action.data})
}

const identityFunction = x => x;
const reducer = (state, action) => (REDUCERS[action.type] || identityFunction)(state, action)

export default reducer
