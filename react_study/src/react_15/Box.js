import React from 'react'
import { useSelector } from 'react-redux'

function Box() {
    const count = useSelector(state => state.count)
    return (
        <div>
            <h2>Box {count}</h2>
        </div>
    )
}

export default Box
