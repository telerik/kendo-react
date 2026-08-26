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
      <div>
        Humidity:<br/>
        Dew:<br/>
        Pressure:<br/>
        Wind Speed:
      </div>
      <div>
        76%<br/>
        2˚C<br/>
        1031mb<br/>
        12km/h NW
      </div>
    </div>

 </div>
}
