import React from 'react';
import ReactDOM from 'react-dom';

import { Popup } from '@progress/kendo-react-popup';
import { process } from '@progress/kendo-data-query';

class AppComponent extends React.Component {
  anchor = null;
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      if (!e.target.className.includes('k-popup')) {
        this.setState({
          show: false,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button
          className="k-button"
          onClick={this.onClick}
          ref={(button) => {
            this.anchor = button;
          }}
        >
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        <Popup
          anchor={this.anchor}
          show={this.state.show}
          popupClass={'popup-content'}
        >
          Popup content.
        </Popup>
      </div>
    );
  }

  onClick = () => {
    this.setState({ show: !this.state.show });
  };
}

ReactDOM.render(<AppComponent />, document.querySelector('my-app'));
