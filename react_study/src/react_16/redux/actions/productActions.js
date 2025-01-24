import axios from 'axios';

function data (searchQuery) {
    return async (dispatch, getState)=> {
        try {
            console.log(searchQuery)
            const response = await axios.get(`http://localhost:5000/products?q=${searchQuery}`);
            const filterProduct = response.data.filter(item => item.title.includes(searchQuery))
            dispatch({type: 'LIST', payload : filterProduct})
        } catch(error) {
            console.error(error)
        }
    }
}

export const productActions = {data};