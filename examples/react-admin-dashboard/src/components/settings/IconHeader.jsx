/* eslint-disable jsx-a11y/anchor-is-valid */
import { globeIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";

export const IconHeader = () => (
   <div className="icon-header-container"> 
     <div>
      <p>Weather</p>
     </div>
      <div>
         <SvgIcon icon={globeIcon}/>
         <a>Sofia</a>
      </div>
    </div> 
);