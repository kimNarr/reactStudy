const initialState = {
    telList : [],
}

function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case "ADD_TEL_INFO" :
            return {
                ...state,
                telList : [...state.telList, {id: Date.now(), name: action.payload.name, tel : action.payload.tel} ]
            }
        default :
            return {...state}
    }
}

export default reducer