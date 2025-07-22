import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.04,
        temp: 24.04,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 72,
        weather: "Clouds",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style = {{textAlign: 'center' }}>
        
            
          <h2>Weather App</h2>
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={weatherInfo}/>

        </div>
        
    );
}