import * as React from 'react';
import { process } from '@progress/kendo-data-query';
import {
    Grid, GridColumn as Column
} from '@progress/kendo-react-grid';

import { CustomFilterUI } from './customFilterUI.jsx';
import {
    GridColumnMenuFilter
} from '@progress/kendo-react-grid';

import products from './products.json';

class App extends React.Component {
    constructor(props) {
        super(props);

        const dataState = this.createDataState({
            take: 8,
            skip: 0
        });

        this.state = {
            ...dataState
        };
    }

    createDataState(dataState) {
        return {
            result: process(products.slice(0), dataState),
            dataState: dataState
        };
    }

    dataStateChange = (event) => {
        this.setState(this.createDataState(event.dataState));
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
              <Column field={'ProductName'} title={'Product Name'} 
              columnMenu={
                props =>
                  (<GridColumnMenuFilter
                    {...props}
                    filterUI={CustomFilterUI}
                    />)
              }/>
              <Column
                field={'Discontinued'}
                title={'Discontinued'}
                filter={'boolean'}
                    />
            </Grid>
            <br />
          </div>
        );
    }
}

export default App;