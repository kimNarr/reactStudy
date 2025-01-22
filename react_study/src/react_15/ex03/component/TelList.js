import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function TelList() {
    const telList = useSelector(state => state.telList);

    const [userName, setUserName] = useState('');
    const [searchValue, setSearchValue] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const searchUser = ()=> {
        const filterList = telList.filter(item => item.name.includes(userName))
        setSearchValue(filterList)
    }
    
    // 초기 리스트
    const initialList = () => { 
        setSearchResult(telList)
    }

    // 검색 리스트
    const searchList = () => {
        setSearchResult(searchValue)
    }

    const searchKeyDown = (e) => {
        if(e.key === "Enter") {
            searchUser()
        }
    }

    useEffect(()=>{
        if(searchValue.length > 0) {
            searchList()
        }
    },[searchValue])

    useEffect(()=>{
        initialList()
    }, [telList]);

    return (
        <div className='tel_list'>
            <div className='search'>
                <input 
                type="text"
                onChange={(e)=> setUserName(e.target.value)}
                onKeyDown={(e)=> searchKeyDown(e)}
                value={userName}
                />
                <span>이름으로 검색</span>
                <button type="button" onClick={searchUser}>찾기</button>
            </div>
            <p className='member'>{searchResult.length} 명</p>
            <ul className='list'>
                {
                    searchResult.map(item=>(
                        <li key={item.id}>
                            <img src="./user.png" alt={item.name} />
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
