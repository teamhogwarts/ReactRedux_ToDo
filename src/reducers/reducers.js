const REDUCERS ={

}

const identityFunction = x => x;
const reducer = (state, action) => (REDUCERS[action.type] || identityFunction)(state, action)