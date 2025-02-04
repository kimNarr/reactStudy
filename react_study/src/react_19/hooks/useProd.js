import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchProducts = (id) => {
    console.log("fp",id)
    // const id = queryData.queryKey[1];
    return axios.get(`http://localhost:5000/products`);
}

export const useProductQuery = (id) =>{
    return  useQuery({
        queryKey : ['products', id],
        queryFn : ()=>fetchProducts(id),
        retry : 1, 
        //요청 실패시 재요청 횟수
        select : (data)=>{return data.data}, 
        // 데이터 변환 또는 필터링에 사용, 반환되는 데이터의 특정 부분만 선택
        // select : (data)=>{return data.data.filter(()=>{})}, 처럼 필터처리해서 사용 가능
        // gcTime : 15000, // cash 유지 할 시간을 제어하는 옵션, ms 단위
        // staleTime : 10000, // 데이터가 stale(오래된) 상태 간주 시간, fresh유지 시간, ms 단위
        //항상 gcTime > staleTime
        // refetchInterval : 3000, // api재요청 반복, 해당시간마다 재요청시 사용, false 기본값
        // refetchInterval : (data)=>{
        //     return data.state.dataUpdateCount < 5 ? 3000 : false
        //     // console.log("data", data.state.dataUpdateCount)
        // }
        // refetchOnMount : false, // 컴포넌트가 마운트 될 때 데이터를 다시 가져올지 여부를 제어
        // option : false, 'always'
        // refetchOnWindowFocus : false, // 윈도우 화면에 포커스 잡히는 경우 자동으로 새로고침
        // refetchIntervalInBackground : true, //창이 비활성화되어도 리패치 할 것 인지 결정 
        // enabled: false, // 조건부 쿼리를 실행 할 때
    })
} 