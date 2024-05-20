//Create a function to format weather and take props from parent
// DisplayWeather component

function GetWeather(prop) {

    return (
        <div>
            <img src={prop.weather.condition.icon} alt="weather icon" />
            <p>Current conditions for {prop.city}: {prop.weather.condition.text}</p>
            <p>Temperature: {prop.weather.temp_c}&deg;C/{prop.weather.temp_f}&deg;F</p>
            <p>Cloud cover: {prop.weather.cloud}%</p>
            <p>UV: {prop.weather.uv}</p>
            <p>Precipitation: {prop.weather.precip_mm}mm/{prop.weather.precip_in}in</p>
            <p>Humidity: {prop.weather.humidity}%</p>
            <p>Wind Direction: {prop.weather.wind_dir}</p>
            <p>Wind Speed: {prop.weather.wind_mph}mph/{prop.weather.wind_kph}kph</p>
            <p>Pressure: {prop.weather.pressure_mb}mb</p>
        </div>
    );
}

export default GetWeather;