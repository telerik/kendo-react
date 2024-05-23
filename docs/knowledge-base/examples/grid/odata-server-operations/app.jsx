import * as React from 'react';


import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ProductsLoader } from './products-loader.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: { data: [], total: 0 },
            dataState: { take: 10, skip: 0 }
        };
    }

    dataStateChange = (e) => {
        this.setState({
            ...this.state,
            dataState: e.dataState
        });
    }

    dataReceived = (products) => {
        this.setState({
            ...this.state,
            products: products
        });
    }

    render() {
        return (
            <div>
                <Grid
                    filterable={true}
                    sortable={true}
                    pageable={true}
                    {...this.state.dataState}
                    {...this.state.products}
                    onDataStateChange={this.dataStateChange}
                >
                    <Column field="ProductID" filter="numeric" title="Id" />
                    <Column field="ProductName" title="Name" />
                    <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Price" />
                    <Column field="UnitsInStock" filter="numeric" title="In stock" />
                </Grid>

                <ProductsLoader
                    dataState={this.state.dataState}
                    onDataReceived={this.dataReceived}
                />
            </div>
        );
    }
}

export default App;
