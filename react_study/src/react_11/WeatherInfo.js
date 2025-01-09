import React from 'react'

function WeatherInfo({weather}) {
    let Celsius = (weather?.main.temp - 273.15).toFixed(1);
    let Fahrenheit = ((Celsius * 9/5) + 32).toFixed(1);
    
    return (
        <div className='weather_info'>
            <h2 className='location'>{weather?.name}</h2>
            <figure>
              <img className='w_icon' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt={weather?.name} />
            </figure>
            <div className='text_wrap'>
              <p className='description'>{weather?.weather[0].description}</p>
              <div className='temp'>
                <p className='celsius'>{Celsius} °C</p>
                /
                <p className='fahrenheit'>{Fahrenheit} °F</p>
              </div>
            </div>
        </div>
    )
}

export default WeatherInfo
