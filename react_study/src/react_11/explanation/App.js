import React, {useState, useEffect} from 'react'
import axios from 'axios'
import WeatherBox from './WeatherBox';
import WeatherButton from './WeatherButton';
import ClipLoader from 'react-spinners/ClipLoader'

function App() {

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const cities = ['Paris', 'New york', 'Tokyo', 'London'];
    const [loading, setLoading] = useState(false);
    const [inputCity, setInputCity] = useState('');

    //현재 위치를 가져오는 함수
    const getCurrentLoaction = () => {
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeather(lat, lon)
        });
    }

    // 현재 위치 날씨 데이터를 가져오는 함수
    const getWeather = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=35127e4bf233deb6ef6220afd31750d9&lang=kr`
        setLoading(true);
        try {
            const response = await axios.get(url);
            // console.log(response.data)
            setWeather(response.data);
        } catch(error) {
            console.log("error");
        } finally {
            //작업을 마친 다음 실행
            setLoading(false); // 로딩종료
        }
    }

    // 선택된 도시 날씨 데이터 가져오기
    const getCityWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35127e4bf233deb6ef6220afd31750d9&lang=kr`
        setLoading(true);
        try {
            const response = await axios.get(url);
            setWeather(response.data);
        } catch(error) {
            console.log("error");
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(city === '') {
            getCurrentLoaction()
        } else {
            getCityWeather()
        }
    }, [city])

    // console.log(weather)

    // 버튼 클릭시 이벤트
    const cityClick = (select) => {
        if(select === "current") {
            setCity('')
        } else {
            setCity(select)
        }
    }

    // 인풋박스 엔터키 이벤트
    const enter = (e) => {
        // 엔터키 확인 및 공백입력 방지
        if(e.key === "Enter" && inputCity.trim() !== "") {
            setCity(inputCity)
            setInputCity('')
        }
    }

    return (
        <div>
            {/* 
            1. 앱 실행시 현재 위치를 기반으로 한 날씨 정보 표시
            2. 날씨정보에는 도시이름, 섭씨온도, 화씨온도, 날씨상태(weather.main, weather.description)
            3. 4개의 도시버튼과 1개의 현재위치 버튼 or input 박스(검색)
            4. 도시 버튼, 입력 시 해당 도시의 날씨 정보 표시
            5. 현재위치 버튼 클릭시 다시 현재 위치 기반 날씨 정보 표시
            6. 로딩스피너 라이브러리
                npm install react-spinners
            7. 인풋박스 도시 입력시 변경
            */}
            { loading ? 
                (
                    <>
                        <ClipLoader color="red" loading={loading} size={50}/>
                        <p>loading</p>
                    </>
                )
             : 
                (<>
                    <input 
                    type="text" 
                    placeholder='도시의 입력을 영어로 입력하세요' 
                    value={inputCity} 
                    onChange={(e)=> setInputCity(e.target.value)}
                    onKeyDown={enter}
                    />
                    <WeatherBox weather={weather}/>
                    <WeatherButton cities={cities} cityClick={cityClick}/>
                </>)
            }
        </div>
    )
}

export default App
