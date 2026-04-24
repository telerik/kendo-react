import * as React from 'react'

import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const onToggle = () => setSuccess(true);

    return (
    <React.Fragment>
      <Button
        type="button"
        onClick={() => onToggle()}
      >
        Save data
      </Button>
      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: 'flex-start',
          flexWrap: 'wrap-reverse'
        }}
      >
        <Fade>
          {success && <Notification
            type={{ style: 'success', icon: true }}
            closable={true}
            onClose={() => setSuccess(false)}
          >
            <span>Your data has been saved.</span>
          </Notification>}
        </Fade>
      </NotificationGroup>
    </React.Fragment>
    );
}

export default App;
