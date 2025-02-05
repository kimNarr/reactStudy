import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = (id) => {
    if(id) {
        return axios.get(`http://localhost:5000/products/${id}`)
    } else {
        return axios.get(`http://localhost:5000/products`)
    }
}

export const useProductQuery = (id) => {
    return useQuery({
        queryKey : ["products", id],
        queryFn : ()=>fetchProducts(id),
        retry : 1,
        select : (data)=>{return data.data},
        gcTime : 15000,
        staleTime : 10000,
    })
}