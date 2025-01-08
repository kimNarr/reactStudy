import React from 'react'

function WeatherInfo({weather}) {
    // console.log("weather",weather?.weather[0].main)
  return (
    <div className='weather_info'>
        <h2>{weather.name}</h2>
        {/* <p> && {weather?.weather[0].description}</p> */}
    </div>
  )
}

export default WeatherInfo
