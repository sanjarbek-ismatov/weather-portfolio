import React, {useState} from "react";
import './css/style.css';

function Weather(){
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [temp, setTemp] = useState();
    const [work, setWork] = useState(false);
    let url;
    const api = "c83594dd15b82e8b1ed09847827831b3";
    const fetchData = (target) => {
        if (target.key === 'Enter' && target.value !== ''){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
                    fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setTemp(data.main.temp);
                        setWork(true);
                        setCountry(data.name)
                    })
                }
    };
    function Working(){
        if (work){
            return (
                <>
                <div>
                    <h1>Country: {country}</h1>
                    <h2>Temp: {Math.round(temp - 273)}<sup>&deg;C</sup></h2>
                </div>
                </>
            );
        }
        else{
            return <p>Enter your city</p>
        }
    }
    return (
        <>
            <div className="main">
                <input placeholder="Your city" type='text' onChange={({target}) => setCity(target.value)} onKeyPress={fetchData} />
                {Working()}
            </div>
        </>
    )
}
export default Weather;

    