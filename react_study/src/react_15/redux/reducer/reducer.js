let initialState = {
    count : 0,
    id : "",
    pw : "",
} // 여러개의 state 값 관리를 위해 객체로 관리

function reducer(state = initialState, action) {
    console.log("action", action)
    // if(action.type === "PLUS") {
    //     return {...state, count : state.count + 1}
    // }

    // return {...state}

    switch (action.type) {
        case "PLUS":
            return {...state, count : state.count + action.payload.num}

        case "MINUS":
            return {...state, count : state.count > 0 ? state.count - action.payload.num : state.count}

        case "LOGIN":
            return {...state, id: action.payload.id, pw: action.payload.pw}

        default :
            return {...state}
    }
    
}

export default reducer