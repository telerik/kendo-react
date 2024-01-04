import * as React from 'react';
import { CircularGauge } from '@progress/kendo-react-gauges';

export const ConversionsChart = () => {

  const [value] = React.useState(78);
  const [secondValue] = React.useState(20);

  const arcOptions = {
    value: value,
    transitions: false,
  };

  const arcSecondOptions = {
    value: secondValue,
    transitions: false,
  };
  
  const arcCenterRenderer = () => {
    return (
      <h3>
        +3.1K
      </h3>
      
    );
  };

  const secondArcCenterRenderer = () => {
    return (
      <h3>
        -1.2K
      </h3>
    );
  };
  return (
    <div>
       <div className="circular-gauge-container">
        <div>
        <CircularGauge {...arcOptions} arcCenterRender={arcCenterRenderer}  style={{height: '120px'}}
  scale={{
          startAngle: 250,
        }}/> 
        <div
         style={{
          marginLeft: '30px',
          marginTop: '50px'
         }}
         >
         <br/>
        <h4 
         style={{
          fontSize: '20px',
          color: '#666666'
         }}
        >Active Users</h4>
        <br/>
        <h3
         style={{
          fontSize: '20px',
          color: '#666666'
         }}
         >1,500,200</h3>
        </div>
        </div>
       
       <div>
       <CircularGauge {...arcSecondOptions} arcCenterRender={secondArcCenterRenderer}  style={{height: '120px'}} color='#666666'
     scale={{
          startAngle: 300,
        }}/>
         <div
           style={{
            marginLeft: '30px',
            marginTop: '50px'
           }}
         >
          <br/>
        <h4
          style={{
            fontSize: '20px',
            color: '#666666'
           }}
         >Inactive Users</h4>
        <br/>
        <h3
         style={{
          fontSize: '20px',
          color: '#666666'
         }}
        >1,500,200</h3>
        </div>
       </div>

         <div>
      
         </div>
    </div>
    </div>
  );
};
