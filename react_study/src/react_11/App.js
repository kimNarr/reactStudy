import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Category from './Category';
import WeatherInfo from './WeatherInfo';
import './App.css'

function App() {
    const [weather, setWeather] = useState(null);
    const [select, setSelect] = useState('current')

    const getCurrentLoaction = () => {
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude; // 위도
            let lon = position.coords.longitude; // 경도
            getWeather(lat, lon)
        })
    }

    const getWeather = async (lat, lon) => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=35127e4bf233deb6ef6220afd31750d9`;
            const response = await axios.get(url);
            setWeather(response.data)
            console.log("location",response.data)
        } catch(error) {
            alert("도시를 찾을 수 없습니다. 도시명을 정확히 입력해주세요")
        }
    }

    const getCityWeather = async () => {
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${select}&appid=35127e4bf233deb6ef6220afd31750d9`;
            const response = await axios.get(url)
            setWeather(response.data)
            console.log("city", response.data)
        } catch(error) {
            alert("도시를 찾을 수 없습니다. 도시명을 정확히 입력해주세요")
        }
    }

    console.log(weather);

    useEffect(()=>{
        if(select === 'current') {
            getCurrentLoaction();
        } else {
            getCityWeather()
        }
    },[select])

    return (
        <div className='weather_wrap'>
            {/* 
            1. 앱 실행시 현재 위치를 기반으로 한 날씨 정보 표시
            2. 날씨정보에는 도시이름, 섭씨온도, 화씨온도, 날씨상태(weather.main, weather.description)
            3. 4개의 도시버튼과 1개의 현재위치 버튼 or input 박스(검색)
            4. 도시 버튼, 입력 시 해당 도시의 날씨 정보 표시
            5. 현재위치 버튼 클릭시 다시 현재 위치 기반 날씨 정보 표시
            */}

            <Category setSelect={setSelect}/>
            <WeatherInfo weather={weather} />
        </div>
    )
}

export default App