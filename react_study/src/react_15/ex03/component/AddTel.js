import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

function AddTel() {
    const [userName, setUserName] = useState('');
    const [userTel, setUserTel] = useState('');

    const inputRef = useRef();
    
    const dispatch = useDispatch();

    const addTelInfo = (e) => {
        e.preventDefault();
        if(userName.trim() !== "" && userTel.trim() !== "") {
            dispatch({type: "ADD_TEL_INFO", payload: {name: userName, tel: userTel}})
            setUserName('');
            setUserTel('');
            inputRef.current.focus();
        }
    }

    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    return (
        <div className='add_tel' >
            <form onSubmit={addTelInfo}>
                <div className='name'>
                    <input 
                    type='text' 
                    onChange={(e)=>setUserName(e.target.value)} 
                    value={userName}
                    ref={inputRef}
                    required
                    />
                    <span className={userName.length === 0 ? '': 'fill'}>이름</span>
                </div>
                <div className='num'>
                    <input 
                    type='text' 
                    onChange={(e)=>setUserTel(e.target.value)} 
                    value={userTel}
                    
                    required/>
                    <span className={userTel.length === 0 ? '': 'fill'}>전화번호</span>
                </div>
                <button type="submit">저장</button>
            </form>
            <button type="button"></button>
        </div>
    )
}

export default AddTel
