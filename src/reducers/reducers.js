const REDUCERS ={
    'LOAD_CONFIG': (state, action) => ({...state, config: action.data}),
    'READ_TODOS': (state, action) => ({...state, toDos: action.data}),
    'ADD_TODO': (state, action) => ({...state, toDos: [...state.toDos, action.data]}),
    'UPDATE_TODO': (state, action) => ({...state, toDos: [...state.toDos.map(toDo => toDo.id === action.data.id ? action.data :  toDo) ] }),
    'DELETE_TODO': (state, action) => ({...state, toDos: [...state.toDos.filter(toDo => toDo !== action.data)]}),
    'UPDATE_FILTER_TERM': (state, action) => ({...state, filterTerm: action.filterTerm})
}

const identityFunction = x => x;
const reducer = (state, action) => (REDUCERS[action.type] || identityFunction)(state, action)

export default reducer
