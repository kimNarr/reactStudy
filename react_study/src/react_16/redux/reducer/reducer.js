let initialState = {
    product : []
}

function reducer(state = initialState, action) {

    let {type, payload} = action;

    switch(type) {
        case "LIST" :
            return {...state, product : payload}
        default :
            return {...state}
    }
}

export default reducer