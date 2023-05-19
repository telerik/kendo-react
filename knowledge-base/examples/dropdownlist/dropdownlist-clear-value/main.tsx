import React from 'react';
import ReactDOM from 'react-dom';

import { DropDownList } from '@progress/kendo-react-dropdowns';

class AppComponent extends React.Component {
  valueRender = (element: React.ReactElement<HTMLSpanElement>, value) => {
    if (!value) {
      return element;
    }

    const children = [
      <span
        key={1}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', flexGrow: 1 }}
      >
        {element.props.children}
      </span>,
      <span
        key={2}
        className="k-icon k-clear-value k-i-close"
        role="button"
        tabIndex={-1}
        title="Clear"
        onClick={this.clearValue}
      ></span>,
    ];

    return React.cloneElement(element, { ...element.props }, children);
  };

  clearValue = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    e.preventDefault();

    this.setState({ value: null });
  };
  sizes: string[] = [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
  ];
  state = {
    value: 'Medium',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <DropDownList
          data={this.sizes}
          value={this.state.value}
          onChange={this.handleChange}
          valueRender={this.valueRender}
        />
      </div>
    );
  }
}

ReactDOM.render(<AppComponent />, document.querySelector('my-app'));
