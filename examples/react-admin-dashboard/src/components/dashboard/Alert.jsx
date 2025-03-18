
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
        style={{
          color: 'black',
          fontSize: 19,
          borderBottom: '1px solid #dee2e6'
        }}
        className="pl-3 pb-2 pt-2"
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
      style={{
       color: 'black',
       fontSize: 19,
     }}
        className="pl-3 pb-2 pt-2"
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
        className="row p-2 border-bottom align-middle"
        style={{
          margin: 0,
        }}
      >
        <div className="col-2 avatar-container">
          <Avatar type="image">
            <img
             src={item.image}
             alt="name"
            />
          </Avatar>
        </div>
        <div className="col-6 message-container">
          <h1
            style={{
              fontSize: 14,
              color: 'black',
              marginBottom: 0,
            }}
          >
            {item.message}
          </h1>
          <h2
            style={{
              fontSize: 14,
              color: 'black',
              marginBottom: 0,
            }}
          >
            {item.additionalText}
          </h2>
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
       >
         <BadgeContainer>
            <SvgIcon icon={bellIcon} />
            <Badge themeColor="primary" />
         </BadgeContainer>
       </button>
       <Popup anchor={anchor.current} show={show} popupClass={'popup-content'}>
         <ListView
           data={contacts}
           item={MyItemRender}
           style={{
             width: '100%',
           }}
           header={MyHeader}
           footer={MyFooter}
         />
       </Popup>
     </div>
   );
 };