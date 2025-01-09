import React from 'react'

function WeatherBox({weather}) {
    console.log(weather)
    return (
        <div className='weather_box'>
            {/* 
                옵셔널 채이닝 '변수?'
                객체가 존재하지 않으면(undefind 또는 null) 
                에러를 발생시키지 않고 대신 undefined 반환
            */}
            <h1>도시이름 : {weather?.name}</h1>
            <h2>섭씨 : {(weather?.main.temp - 273.15).toFixed(1)}℃</h2>
            <h2>화씨 : {(((weather?.main.temp -273.15)* 9 / 5) + 32).toFixed(1)}Ｆ</h2>
            <h3>날씨 상태 : {weather?.weather[0].description}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt={weather?.weather[0].description} />
        </div>
    )
}

export default WeatherBox
