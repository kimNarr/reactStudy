import React from 'react'

function Category({setSelect}) {
    const cities = [
        {name: 'current', text: '현재위치'},
        {name: 'tokyo', text: '도쿄'},
        {name: 'paris', text: '파리'},
        {name: 'london', text: '런던'},
        {name: 'berlin', text: '베를린'},
    ]
    return (
        <div className='city_wrap'>
            {
                cities.map((item,idx)=>(
                    <button key={idx} onClick={()=>setSelect((item.name))}>{item.text}</button>
                ))
            }
        </div>
    )
}

export default Category
