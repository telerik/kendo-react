import * as React from 'react';
import { ProgressBar } from '@progress/kendo-react-progressbars';


export const TopFiveCitiesBars = () => {
   return (
     <div className="top-five-cities-container">
       <div >
         <div>
           <div className="values-container">
             <div> 0 %</div>
             <div> 25 %</div>
             <div> 50 %</div>
             <div> 75 %</div>
             <div> 100 %</div>
           </div>
           <div className="progress-bar-container">
             <div className="country-name-container">
               <span className="country-name">Sofia,</span>
               <span className="country-name">Bulagria</span>
             </div>
             <ProgressBar
               className="city-progress city-progress-info"
               value={47}
               labelVisible={false}
             />
             <span className="value-span"> 47%</span>
           </div>

           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Berlin,</span>
               <span className="country-name">Germany</span>
             </div>

             <ProgressBar
               className="city-progress city-progress-secondary"
               value={52}
               labelVisible={false}
             />
             <span className="value-span"> 52%</span>
           </div>

           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Paris,</span>
               <span className="country-name">France</span>
             </div>

             <ProgressBar
               className="city-progress city-progress-tertiary"
               value={75}
               labelVisible={false}
             />
             <span className="value-span"> 75%</span>
           </div>
           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Belgrade,</span>
               <span className="country-name">Serbia</span>
             </div>

             <ProgressBar
               className="city-progress city-progress-warning"
               value={82}
               labelVisible={false}
             />
             <span className="value-span"> 82%</span>
           </div>
           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Madrid,</span>
               <span className="country-name">Spain</span>
             </div>

             <ProgressBar
               className="city-progress city-progress-error"
               value={92}
               labelVisible={false}
             />
             <span className="value-span"> 92%</span>
           </div>
         </div>
       </div>
     </div>
   );
 };