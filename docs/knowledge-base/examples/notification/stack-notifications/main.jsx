import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Notification,
  NotificationGroup,
} from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
import './styles.css';

const App = () => {
  const [state, setState] = React.useState({
    messages: [],
  });

  const addNotification = (message) => {
    let newMessages = state.messages.map((item) => item);
    newMessages.push(message);
    setState({ messages: newMessages });
  };
  return (
    <React.Fragment>
      <button
        className="k-button"
        onClick={() =>
          addNotification('new message' + new Date().toTimeString())
        }
      >
        Add message
      </button>
      <NotificationGroup
        style={{
          right: 0,
          top: 0,
          alignItems: 'flex-start',
          flexWrap: 'wrap-reverse',
        }}
      >
        {state.messages &&
          state.messages.map((message, index) => {
            return (
              <Fade key={index}>
                <Notification
                  type={{
                    style: 'info',
                    icon: true,
                  }}
                  closable={true}
                  onClose={() => {
                    let newMessages = state.messages.map((item) => item);
                    newMessages.splice(index, 1);
                    setState({ messages: newMessages });
                  }}
                >
                  <span>{message}</span>
                </Notification>
              </Fade>
            );
          })}
      </NotificationGroup>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
