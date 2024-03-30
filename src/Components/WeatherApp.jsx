import React, { useState } from 'react'
import "./WeatherApp.css"
import cloud_icon from "./pictures/cloud.png"
import drizzle_icon from "./pictures/drizzle.png"
import clear_icon from "./pictures/clear.png"
import search_icon from "./pictures/search.png"
import humidity_icon from "./pictures/humidity.png"



 function WeatherApp() {

    let api_key="dd94f859a0e52d6e4767fddf735f04a7"
    const {wicon,setWicon}=useState(cloud_icon);

    const search = async() => {
        const element = document.getElementByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }

        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`)
        let converted_data = await data.json();

        

        const humidity = document.getElementByClassName("humidity-percent")
        const wind = document.getElementByClassName("wind-rate")
        const temprature = document.getElementByClassName("weather-temp")
        const location = document.getElementByClassName("weather-location")

        humidity[0].innerHTML = converted_data.main.humidity
        wind[0].innerHTML = Math.floor(converted_data.main.speed)
        temprature[0].innerHTML = Math.floor(converted_data.main.temprature)
        location[0].innerHTML = converted_data.main.name

        if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n")
        {
          setWicon(clear_icon);
        }
        else if((data.weather[0].icon==="02d"||data.weather[0].icon==="02n"))
        {
          setWicon(cloud_icon);
        }
        else if((data.weather[0].icon==="03d"||data.weather[0].icon==="03n"))
        {
          setWicon(drizzle_icon);
        }
        

    }



  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeHolder='Search...'></input>
            <div >
                <button onClick={search()}>Search</button>
            </div>
        </div>
        <div>
            <img/>
        </div>
        <div className="weather-temp">24c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
              <img src={humidity_icon}  alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="win_element">
              <img src={wicon}  alt="" className="icon" />
              <div className="data">
                <div className="wind-rate">18 km/hr</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;