import React, { useState } from 'react'

function Category({setSelect}) {
    const [inputValue, setInputValue] = useState('');
    const cities = [
        {name: 'tokyo', text: '도쿄'},
        {name: 'paris', text: '파리'},
        {name: 'london', text: '런던'},
        {name: 'berlin', text: '베를린'},
    ]
    
    const wSearchButton = () => {
        if(inputValue === '') {
            alert("검색어를 입력하세요")
        }
        setSelect(inputValue)
    }
    const wSearchEnter = (e) => {
        if(e.keyCode === 13) {
            setSelect(inputValue)
        }
    }
    return (
        <div className='city_wrap'>
            <div className='search'>
                <input 
                type="text" 
                placeholder='도시명을 입력하세요'
                onChange={(e)=>setInputValue(e.currentTarget.value)} 
                onKeyDown={wSearchEnter} />
                <button type='button' onClick={wSearchButton}>
                    <img src="/weather/search_w.png" alt="location" />
                </button>
            </div>
            <div className='btn_wrap'>
                <button className='current' onClick={()=>setSelect('current')}>
                    <img src="/weather/location_w.png" alt="location" />
                </button>
                {
                    cities.map((item,idx)=>(
                        <button key={idx} onClick={()=>setSelect((item.name))}>{item.text}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
