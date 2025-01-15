import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Prod() {

    let [query, setQuery] = useSearchParams();
    console.log("usp", query.get("page"))

    return (
        <div>
            <h1>전체상품페이지</h1>
        </div>
    )
}

export default Prod
