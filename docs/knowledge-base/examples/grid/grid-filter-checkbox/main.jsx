import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { process } from '@progress/kendo-data-query';
import {
  Grid, GridColumn as Column
} from '@progress/kendo-react-grid';

import { CustomColumnMenu } from './customColumnMenu';

import products from './products.json';

const createDataState = (dataState) => {
  return {
    result: process(products.slice(0), dataState),
    dataState: dataState
  };
}

const dataState = createDataState({
  take: 8,
  skip: 0
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [{ field: 'ProductName' }, { field: 'ProductID' }],
      ...dataState
    };
  }

  dataStateChange = (event) => {
    this.setState(createDataState(event.data));
  }

  onReset = () => {
    this.setState({
      result: process(products.slice(this.state.take), this.state.dataState)
    });
  }

  onColumnsSubmit = (data) => {
    let filterData = data.filter(item => {
      if (item.filterChecked) {
        return item
      }
    })
    this.setState({
      result: process(filterData, this.state.dataState)
    });
  }

  render() {
    return (
      <div>
        <Grid
          data={this.state.result}
          {...this.state.dataState}
          onDataStateChange={this.dataStateChange}
          sortable={true}
          pageable={true}
          pageSize={8}
        >
          {
            this.state.columns.map((column, idx) =>
              (<Column
                key={idx}
                field={column.field}
                title={column.title}
                columnMenu={
                  props =>
                    <CustomColumnMenu
                      {...props}
                      field={column.field}
                      data={products}
                      onReset={this.onReset}
                      onColumnsSubmit={this.onColumnsSubmit}
                    />
                }
              />)
            )}
        </Grid>
        <br />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('my-app'));