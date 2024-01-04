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
               style={{
                 height: '6px',
               }}
               value={47}
               progressStyle={{ backgroundColor: '#28B4C8' }}
               labelVisible={false}
             />
             <span className="value-span"> 47%</span>
           </div>
           <br />
 
           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Beijing,</span>
               <span className="country-name">China</span>
             </div>
 
             <ProgressBar
               style={{
                 height: '6px',
               }}
               value={52}
               progressStyle={{ backgroundColor: '#2D73F5' }}
               labelVisible={false}
             />
             <span className="value-span"> 52%</span>
           </div>
           <br />
 
           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Paris,</span>
               <span className="country-name">France</span>
             </div>
 
             <ProgressBar
               style={{
                 height: '6px',
               }}
               value={75}
               progressStyle={{ backgroundColor: '#AA46BE' }}
               labelVisible={false}
             />
             <span className="value-span"> 75%</span>
           </div>
           <br />
           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Dubai,</span>
               <span className="country-name">UAE</span>
             </div>
 
             <ProgressBar
               style={{
                 height: '6px',
               }}
               value={82}
               progressStyle={{ backgroundColor: '#FFD246' }}
               labelVisible={false}
             />
             <span className="value-span"> 82%</span>
           </div>
           <br />
           <div className="progress-bar-container">
           <div className="country-name-container">
               <span className="country-name">Tokio,</span>
               <span className="country-name">Japan</span>
             </div>
 
             <ProgressBar
               style={{
                 height: '6px',
               }}
               value={92}
               progressStyle={{ backgroundColor: '#FF6358' }}
               labelVisible={false}
             />
             <span className="value-span"> 92%</span>
           </div>
         </div>
       </div>
     </div>
   );
 };