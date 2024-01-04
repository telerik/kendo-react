import { Link } from 'react-router-dom';
import * as React from "react";
import { SvgIcon } from '@progress/kendo-react-common';
import { userIcon, bellIcon, fileTxtIcon } from '@progress/kendo-svg-icons';

export const Navigation = () => {
   return <div className="navigation-container">
      <div className="k-tilelayout-item-header k-card-header k-cursor-grab">
         <Link to="/home/account" className="dashboard-button" style={{ textDecoration: 'none' }}>
            <button style={{color: 'black'}} className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" type="button"><SvgIcon icon={userIcon}/><span className="k-button-text">Account</span></button>
         </Link>

         <Link to="/home/billing" className="dashboard-button" style={{ textDecoration: 'none' }}>
            <button style={{color: 'black'}} className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" type="button"><SvgIcon icon={fileTxtIcon}/><span className="k-button-text">Billing</span></button>
         </Link>
   
         <Link to="/home/notifications" className="dashboard-button" style={{ textDecoration: 'none' }}>
            <button style={{color: 'black'}} className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" type="button" ><SvgIcon icon={bellIcon}/><span className="k-button-text">Notifications</span></button>
         </Link>
      </div>
   </div>
}
