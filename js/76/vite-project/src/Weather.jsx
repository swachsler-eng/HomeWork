import {useState,useEffect } from 'react'
export default function Weather() { 
    const [weather, setWeather] = useState();
    useEffect(
     ()=>{(async () => {
           const p = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&temperature_unit=fahrenheit');
            const weatherData = await p.json();
            console.log(weatherData.current_weather.temperature);
            setWeather(weatherData);
        })()}    
    ,[])
    return (
        <>
            <h1>Weather is {weather?.current_weather.temperature}°F</h1>
        </>
    )
}