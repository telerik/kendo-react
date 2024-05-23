import React from 'react';
import ReactDOM from 'react-dom';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import countries from './countries';

class AppComponent extends React.Component {
  state = { value: [], allSelected: true };

  handleChange = (event) => {
    const currentSelectAll = this.state.value.some((i) => i === 'Select All');
    const nextSelectAll = event.value.some((i) => i === 'Select All');
    let value = event.value;
    const currentCount = this.state.value.length;
    const nextCount = value.length;

    if (
      nextCount > currentCount &&
      !currentSelectAll &&
      !nextSelectAll &&
      countries.length - 1 === nextCount
    ) {
      value = countries;
    } else if (
      nextCount < currentCount &&
      currentCount === countries.length &&
      currentSelectAll &&
      nextSelectAll
    ) {
      value = value.filter((v) => v !== 'Select All');
    } else if (!currentSelectAll && nextSelectAll) {
      value = countries;
    } else if (currentSelectAll && !nextSelectAll) {
      value = [];
    }

    this.setState({ value });
  };

  itemRender = (li, itemProps) => {
    const itemChildren = (
      <span>
        <input
          type="checkbox"
          name={itemProps.dataItem}
          checked={itemProps.selected}
          onChange={(e) => itemProps.onClick(itemProps.index, e)}
        />
        &nbsp;{li.props.children}
      </span>
    );
    return React.cloneElement(li, li.props, itemChildren);
  };

  render() {
    const value = this.state.value;
    const selected = value.length;
    return (
      <div>
        <p>Select European countries:</p>
        <MultiSelect
          data={countries}
          itemRender={this.itemRender}
          autoClose={false}
          value={value}
          opened={true}
          onChange={this.handleChange}
          tags={
            selected > 0
              ? [{ text: `${selected} items selected`, data: [...value] }]
              : []
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<AppComponent />, document.querySelector('my-app'));
