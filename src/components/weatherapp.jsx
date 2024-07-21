import React, { useState } from 'react';
import style from './weatherapp.module.css';

export default function Weatherapp() {
    const apikey = '522d181fcb71794ec8c421445fc997f3';
    const apiurl = 'http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=522d181fcb71794ec8c421445fc997f3';

    const [inptval, setinputval] = useState('');
    const [apidata, setapidata] = useState(null);

    const getdata = (event) => {
        event.preventDefault();
        setapidata(null);

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inptval}&units=metric&appid=${apikey}`)
            .then((response) => {
                if (!response.ok) {
                    setapidata(null);
                    alert("Enter Correct City Name")
                    return;
                }
                return response.json();
            })
            .then((finalans) => {
                console.log(finalans);
                setapidata(finalans);
            })

    }

    return (
        <div className={`${style.maindiv}`}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-8 mx-auto text-center p-3`}>
                        <h1 className='text-white mb-3'>Weather App</h1>
                        <form onSubmit={getdata} className={`${style.inptdiv} border shadow-lg mx-auto rounded-5 p-2 bg-white d-flex justify-content-around`}>
                            <input type="text" className='py-2' value={inptval} onChange={(event) => setinputval(event.target.value)} />
                            <button className='px-md-4 border-0 rounded-5 btn btn-primary'>Enter</button>
                        </form>
                        <div className={`${style.temdiv} border mt-5 temdiv position-relative`}>
                        
                          
                        
                            {apidata ?
                                <div className="row">

                                    <div className="col-lg-8 mx-auto p-3 ">
                                        <h4><span>{apidata.sys.country}</span></h4>
                                        <h3>City: <span>{apidata.name}</span></h3>
                                        <h1>Temperature: <span>{apidata.main.temp}°C</span></h1>
                                        <img src={`https://openweathermap.org/img/wn/${apidata.weather[0].icon}.png`} alt="Weather Icon" />
                                    </div>
                                </div>
                                : <h2>No data found</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

