import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function AddTel() {
    const [userName, setUserName] = useState('');
    const [userTel, setUserTel] = useState('');
    
    const dispatch = useDispatch();

    const addTelInfo = () => {
        dispatch({type: "ADD_TEL_INFO", payload: {name: userName, tel: userTel}})
    }

    return (
        <div className='addTel'>
            <div>
                <span>이름</span>
                <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div>
                <span>전화번호</span>
                <input type="text" onChange={(e)=>setUserTel(e.target.value)}/>
            </div>
            <button type="button" onClick={addTelInfo}>전송</button>
        </div>
    )
}

export default AddTel
