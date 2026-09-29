import * as React from "react";

export const Weather = () => {
   return <div className="weather">
    <div className="weather-data">
   <div className="weather__icon">
      <img className="cloud-image" src={require("../../assets/cloud.png")} alt="cloud"/>
   </div>
   <div className="weather__condition">Partly Cloudy</div>
   <div className="weather__temperature">
     12 °C
   </div>
   </div>

   <div className="weather-data-container">
      <div className="weather-data-row">
        <span>Humidity:</span>
        <span>76%</span>
      </div>
      <div className="weather-data-row">
        <span>Dew:</span>
        <span>2˚C</span>
      </div>
      <div className="weather-data-row">
        <span>Pressure:</span>
        <span>1031mb</span>
      </div>
      <div className="weather-data-row">
        <span>Wind Speed:</span>
        <span>12km/h NW</span>
      </div>
    </div>

 </div>
}
