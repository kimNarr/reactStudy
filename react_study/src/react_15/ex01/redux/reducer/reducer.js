let initialState = {
    products : [
        {id: 1, name: "상품A", price: "41200", count : 1},
        {id: 2, name: "상품B", price: "221200", count : 1},
        {id: 3, name: "상품C", price: "302110", count : 1},
    ],
    cart : [],
}



function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADDCART" :
            let newCart = state.cart.map(val =>{
                if(val === action.payload) {
                    console.log("111")
                    return {...val, count: val.count + 1}
                } else {
                    console.log("222")
                    state.cart.push(action.payload);
                    return {...val}
                }
            });
            console.log("333")
            return {...state, cart : newCart}
        default :
            return {...state}
    }
}

export default reducer