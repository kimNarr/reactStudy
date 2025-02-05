import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = (params) => {
    if(params.id === undefined) {
        return axios.get(`http://localhost:5000/products`)
    } else {
        return axios.get(`http://localhost:5000/products/${params.id}`)
    }
}

export const useProductQuery = (id) => {
    return useQuery({
        queryKey : ['products', id],
        queryFn : ()=>fetchProducts(id),
        retry : 1,
        select : (data) => {return data.data}
    })
}