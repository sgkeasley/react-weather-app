import { useState, useEffect } from 'react';
import City from './CityInput';
import GetWeather from './GetWeather';

// Create a function to fetch weather from the API and display
// input and weather elements
export default function DisplayWeather() {

    const [submitCity, setSubmitCity] = useState("");
    const [weather, setWeather] = useState(null);

    // Create a function to handle change
    function updateCity(submitCity) {
        setSubmitCity(submitCity);
        console.log(submitCity);
    };

    useEffect(() => {
            async function fetchData() {
                let response = await
                fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${submitCity}`);
                let data = await response.json();
                console.log(data.current)
                setWeather(data.current)
            }
            fetchData();
        }, [submitCity])
         

    return (
        <div>
            <City city={submitCity} updateCity={updateCity} />
            {weather && <GetWeather city={submitCity} weather={weather} />}
        </div>
    );
}