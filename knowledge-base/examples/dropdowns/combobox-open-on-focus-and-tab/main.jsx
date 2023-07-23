import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';

const sports = [
  { text: 'Basketball', id: 1 },
  { text: 'Football', id: 2 },
  { text: 'Tennis', id: 3 },
  { text: 'Volleyball', id: 4 },
];

class App extends React.Component {
  state = {
    value: { text: 'Football', id: 2 },
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onComboBoxFocus = (props) => {
    setTimeout(() => {
      if (!props.target.state.opened) {
        props.target.toggleBtnClick();
      }
    });
  };
  render() {
    return (
      <div>
        <div>
          <ComboBox
            data={sports}
            textField="text"
            dataItemKey="id"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.onComboBoxFocus}
          />
        </div>

        <div>
          <ComboBox
            data={sports}
            textField="text"
            dataItemKey="id"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.onComboBoxFocus}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('my-app'));
