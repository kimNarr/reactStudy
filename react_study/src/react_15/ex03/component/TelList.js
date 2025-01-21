import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function TelList() {
    const telList = useSelector(state => state.telList);

    const [userName, setUserName] = useState('')

    const searchUser = ()=> {
        telList = telList.filter(item => item.name.includes(userName))
    }

    return (
        <div className='telList'>
            <div>
                <input 
                type="text"
                placeholder='이름을 입력하세요'
                onChange={(e)=> setUserName(e.target.value)}
                value={userName}
                />
                <button type="button" onClick={searchUser}>찾기</button>
            </div>
            <p>num : {telList.length}</p>
            <ul>
                {
                    telList.map(item=>(
                        <li key={item.id}>
                            <img style={{width: '60px'}} src="./user.png" alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.tel}</p>
                        </li>
                    ))
                }                    
            </ul>
        </div>
    )
}

export default TelList
