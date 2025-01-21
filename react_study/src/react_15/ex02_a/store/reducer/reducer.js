const initialState = {
    todos : []
}

function reducer(state=initialState, action) {
    console.log(action);
    console.log(state.todos);
    switch(action.type) {
        case "ADD_TODO" :
            return {
                ...state,
                todos : [...state.todos, {id:Date.now(), text: action.payload.text, completed: false}]
            }
        case "TOGGLE_TODO" :
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload ?
                    {...todo, completed: !todo.completed} : todo)
            }
        case "REMOVE" :
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.payload)
            }
        default :
            return {...state}
    }
}

export default reducer