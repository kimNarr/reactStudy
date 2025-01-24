import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        plus : (state, action) => {
            state.count += action.payload
        },
        minus : (state, action) => {
            state.count -= action.payload
        },
        gop : (state, action) => {
            state.count *= action.payload
        },
        reset : (state, action) => {
            state.count = 0
        }
    }
})

export const {plus, minus, gop, reset} = counterSlice.actions
export default counterSlice.reducer

// function reducer(state = initialState, action) {
//     switch(action.type) {
//         case "PLUS" :
//             return {...state, count: state.count + action.payload}
//         default :
//             return {...state}
//     }
// }

// export default reducer