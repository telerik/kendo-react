import * as React from 'react';
import { ProgressBar } from '@progress/kendo-react-progressbars';

export const TopFiveCitiesGlobal = () => {
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
               <span className="country-name">Moscow,</span>
               <span className="country-name">Russia</span>
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
               <span className="country-name">Beijing,</span>
               <span className="country-name">China</span>
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
               <span className="country-name">Dubai,</span>
               <span className="country-name">UAE</span>
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
               <span className="country-name">Tokio,</span>
               <span className="country-name">Japan</span>
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