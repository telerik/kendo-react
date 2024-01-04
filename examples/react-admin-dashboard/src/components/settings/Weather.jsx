import * as React from "react";

export const Weather = () => {
   return <div className="k-d-flex-col k-align-items-center k-justify-content-around">
    <div className="weather-data">
   <div style={{
      width: "100px",
       height: "100px",
   }}>
      <img className="cloud-image" src={require("../../assets/cloud.png")} alt="cloud"/>
   </div>
   <div className="k-state-disabled">Partly Cloudy</div>
   <div style={{
      fontFamily: 'Roboto',
      fontSize: '70px',
      fontWeight: '300',
      color: '#0058E9'
   }}>
     12 °C
   </div>
   </div>  

   <div className="weather-data-container k-d-flex-row k-align-items-center k-justify-content-center">
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

