import * as React from 'react';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';

const position = {
    topLeft: { top: 0, left: 0, alignItems: 'flex-start' },
    topCenter: { top: 0, left: '50%', transform: 'translateX(-50%)' },
    topRight: { top: 0, right: 0, alignItems: 'flex-end' },
    bottomLeft: { bottom: 0, left: 0, alignItems: 'flex-start' },
    bottomCenter: { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
    bottomRight: { bottom: 0, right: 0, alignItems: 'flex-end' }
};

const App = () => {
    const content = <span>Your data has been saved.</span>;
    const notifications = [
          <Notification key="success" type={{ style: 'success', icon: true }}>{content}</Notification>,
          <Notification key="info" type={{ style: 'info' }}>{content}</Notification>
    ];

    return (
          <React.Fragment>
            <NotificationGroup style={position.topLeft}>
              {notifications}
            </NotificationGroup>

            <NotificationGroup style={position.bottomLeft}>
              {notifications}
            </NotificationGroup>

            <NotificationGroup style={position.topCenter}>
              {notifications}
            </NotificationGroup>

            <NotificationGroup style={position.bottomCenter}>
              {notifications}
            </NotificationGroup>

            <NotificationGroup style={position.topRight}>
              {notifications}
            </NotificationGroup>

            <NotificationGroup style={position.bottomRight}>
              {notifications}
            </NotificationGroup>
          </React.Fragment>
    );
}

export default App;
