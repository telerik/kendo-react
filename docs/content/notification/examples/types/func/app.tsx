import * as React from 'react';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Button } from '@progress/kendo-react-buttons';

interface State {
    success: boolean,
    error: boolean,
    warning: boolean,
    info: boolean,
    none: boolean
}

const App = () => {
    const [state, setState] = React.useState<State>({ none: false, success: false, error: false, warning: false, info: false });

    const onToggle = (flag: string) => setState({ ...state, [flag]: !state[flag] });

    const { none, success, error, warning, info } = state;

    return (
    <React.Fragment>
      <Button
        type="button"
        onClick={() => onToggle('none')}
      >
        {(none ? 'hide ' : 'show ') + 'Default'}
      </Button>
      <Button
        type="button"
        onClick={() => onToggle('success')}
      >
        {(success ? 'hide ' : 'show ') + 'Success'}
      </Button>
      &nbsp;
      <Button
        type="button"
        onClick={() => onToggle('error')}
      >
        {(error ? 'hide ' : 'show ') + 'Error'}
      </Button>
      &nbsp;
      <Button
        type="button"
        onClick={() => onToggle('warning')}
      >
        {(warning ? 'hide ' : 'show ') + 'Warning'}
      </Button>
      &nbsp;
      <Button
        type="button"
        onClick={() => onToggle('info')}
      >
        {(info ? 'hide ' : 'show ') + 'Info'}
      </Button>
      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: 'flex-start',
          flexWrap: 'wrap-reverse'
        }}
      >
        {none && (
          <Notification
            type={{ style: 'none', icon: false }}
            closable={true}
            onClose={() => setState({ ...state, none: false })}
          >
            Default Notification
          </Notification>)}
        {success && (
          <Notification
            type={{ style: 'success', icon: true }}
            closable={true}
            onClose={() => setState({ ...state, success: false })}
          >
            Success Notification
          </Notification>)}
        {error && (
          <Notification
            type={{ style: 'error', icon: true }}
            closable={true}
            onClose={() => setState({ ...state, error: false })}
          >
            Error Notification
          </Notification>)}
        {warning && (
          <Notification
            type={{ style: 'warning', icon: true }}
            closable={true}
            onClose={() => setState({ ...state, warning: false })}
          >
            Warning Notification
          </Notification>)}
        {info && (
          <Notification
            type={{ style: 'info', icon: true }}
            closable={true}
            onClose={() => setState({ ...state, info: false })}
          >
            Info Notification
          </Notification>)}
      </NotificationGroup>
    </React.Fragment>
    );
}

export default App;
