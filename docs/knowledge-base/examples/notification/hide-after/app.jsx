import * as React from 'react';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification'
import { Fade } from '@progress/kendo-react-animation'

class App extends React.Component {
  state = { success: false };
  onToggle = flag => {
    this.setState({ success: !this.state.success });
    if(!this.state.success){
      setTimeout(()=>{
        this.setState({ success: false });
      },3000)
    }
  }

  render() {
    const { success } = this.state;

    return (
      <React.Fragment>
        <button
          className="k-button"
          onClick={() => this.onToggle('success')}
        >
          {(success ? 'hide ' : 'show ') + 'Success'}
        </button>

        <NotificationGroup
          style={{
            right: 0,
            bottom: 0,
            alignItems: 'flex-start',
            flexWrap: 'wrap-reverse'
          }}
        >
          <Fade enter={true} exit={true}>
            {success && <Notification
              type={{ style: 'success', icon: true }}
              closable={true}
              onClose={() => this.setState({ success: false })}
            >
              <span>Your data has been saved.</span>
            </Notification>}
          </Fade>
        </NotificationGroup>
      </React.Fragment>
    );
  }
}

export default App;

