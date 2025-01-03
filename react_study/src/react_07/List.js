import React from 'react'

function List({list, setList, setOnList, onList}) {
    const deleteList = (idx) => {
        const newList = list.filter((li, i)=> {
            return idx !== i
        })
        setList(newList)
        console.log(newList)
    }
    
    const changeCheck = (idx) => {
        const newList = list.map((li, i)=>({
            ...li, checked: i === idx ? !li.checked : li.checked,
        }));
        setList(newList)
        console.log(newList)
        console.log(list)

    }
    return (
        <div className='list_wrap'>
        <ul>
            {onList.map((li, idx)=>(
                <li key={idx}>
                    <div className='todolist'>
                        <input type="checkbox" id={idx} onChange={()=>{changeCheck(idx)}} checked={li.checked}/>
                        <label htmlFor={idx}>{li.text}</label>
                        <button type='button' onClick={()=>{deleteList(idx)}}>삭제</button>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default List
