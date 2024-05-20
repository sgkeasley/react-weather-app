import { useState, useRef, useEffect } from 'react';

// Create an input and button function to allow user to input city
export default function City(prop) {
    const [city, setCity] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <label>Enter city: 
                <input
                    ref={inputRef}
                    onChange={(event) => setCity(event.target.value)}
                    name="cityInput"
                    value={city}
                />
                <button
                    onClick={(event) => prop.updateCity(event.target.value)}
                    value={city}> Get Weather </button>
            </label>
        </div>
    );
}