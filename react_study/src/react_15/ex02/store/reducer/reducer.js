let iState = {
    id_count : 0,
    todo : []
}

function reducer(state = iState, action) {
    switch(action.type) {
        case "ADD_TODO" :
            console.log(state.todo)
            let todoId = state.id_count + 1
            return {
                ...state,
                id_count : todoId,
                todo : [...state.todo, {id: todoId, text : action.payload, checked: false}],
            }
        case "DEL_TODO" :
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.payload)
            }
        case "CHK_TODO" :
            return {
                ...state,
                todo: state.todo.map(item => item.id === action.payload ? 
                    {...item, checked: !item.checked} : item
                )
            }
        default :
            return {...state}
    }
}

export default reducer