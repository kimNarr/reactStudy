import React from 'react'

function WeatherButton({cities, cityClick}) {

    console.log(cities)
    return (
        <div className='btnBox'>
        {/* 현재위치 */}
        <button type='button' onClick={()=>cityClick('current')}>현재위치</button>
        {/* 도시별 버튼 */}
        {
            cities.map((item, idx)=>(
                <button type='button' key={idx} onClick={()=>cityClick(item)}>{item}</button>
            ))
        }
        </div>
    )
}

export default WeatherButton
