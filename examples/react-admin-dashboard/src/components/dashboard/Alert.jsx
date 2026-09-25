
import * as React from 'react';

import { Popup } from '@progress/kendo-react-popup';
import {
  ListView,
  ListViewHeader,
  ListViewFooter,
} from '@progress/kendo-react-listview';
import { Avatar } from '@progress/kendo-react-layout';
import { Notification } from '@progress/kendo-react-notification';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { bellIcon } from '@progress/kendo-svg-icons';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';

let contacts = [
   {
     message: 'Jesy joined the Team',
     image: require('../../assets/people/Joey.png'),
     additionalText: 'Congratulate her'
   },
   {
      message: 'Sam invited you to the class',
      image: require('../../assets/people/RickardPingston.png'),
      additionalText: 'Joy invited you to the class'
    },
    {
      message: 'Your order has been dispatched',
      image: require('../../assets/people/BaseAvatar.png'),
      additionalText: 'Your order has been shipped'
    },
 ];



 export const Alert = () => {
   const anchor = React.useRef(null);
   const [show, setShow] = React.useState(false);
   const [notifications ,setNotifications] = React.useState('2')

   const MyHeader = () => {
    return (
      <ListViewHeader
        className="notification-header"
      >
        Notifications <Notification type={{
           style: 'warning',
         }} >
             <span>{`${notifications} New`}</span>
           </Notification>
      </ListViewHeader>
    );
  };
  const MyFooter = () => {
    let messages = 0;
    contacts.map((i) => {
      return messages = messages + i.messages;
    });
    return (
      <ListViewFooter
        className="notification-footer"
      >
       <div>
       <Button type={'submit'} className="mark-button" onClick={() => {setNotifications('0')}}>
          Mark all as read
         </Button>
       </div>
      </ListViewFooter>
    );
  };
  const MyItemRender = (props) => {
    let item = props.dataItem;
    return (
      <div
        className="notification-item"
      >
        <div className="notification-avatar">
          <Avatar type="image">
            <img
             src={item.image}
             alt="name"
            />
          </Avatar>
        </div>
        <div className="notification-message">
          <h2>
            {item.message}
          </h2>
          <p>
            {item.additionalText}
          </p>
        </div>
      </div>
    );
  };

   const onClick = () => {
     setShow(!show);
   };
   return (
     <div>
       <button
         className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
         onClick={onClick}
         ref={anchor}
         aria-label={`${notifications} unread notifications`}
         aria-expanded={show}
         title="Notifications"
       >
         <BadgeContainer>
            <SvgIcon icon={bellIcon} />
            {notifications !== '0' && <Badge themeColor="primary">{notifications}</Badge>}
         </BadgeContainer>
       </button>
       <Popup anchor={anchor.current} show={show} popupClass={'popup-content'}>
         <ListView
           data={contacts}
           item={MyItemRender}
           className="notification-list"
           header={MyHeader}
           footer={MyFooter}
         />
       </Popup>
     </div>
   );
 };