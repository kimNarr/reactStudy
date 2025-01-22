const initialState = {
    telList : [
        {id: 1, name: "홍길동1", tel: "111-2222-3333"},
        {id: 2, name: "홍길동2", tel: "111-2222-3333"},
        {id: 3, name: "홍길동3", tel: "111-2222-3333"},
        {id: 4, name: "홍길동4", tel: "111-2222-3333"},
    ]
}

function reducer(state = initialState, action) {
    // console.log(action)
    switch(action.type) {
        case "ADD_TEL_INFO" :
            return {
                ...state,
                telList : [...state.telList, {
                    id: Date.now(), 
                    name: action.payload.name, 
                    tel : action.payload.tel
                } ],
            }
        default :
            return {...state}
    }
}

export default reducer