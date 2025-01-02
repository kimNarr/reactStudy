import React from 'react'

function List({list, setList}) {
    const deleteList = (idx) => {
        const newList = list.filter((li, i)=> {
            return idx !== i
        })
        setList(newList)
    }
    return (
        <div className='list_wrap'>
        <ul>
            {list.map((li, idx)=>(
                <li key={idx}>
                    <div className='todolist'>
                        <input type="checkbox" id={"check" + idx}/>
                        <label htmlFor={"check" + idx}>{li.text}</label>
                        <button type='button' onClick={()=>{deleteList(idx)}}>삭제</button>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default List
