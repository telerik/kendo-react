import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Sparkline } from '@progress/kendo-react-charts';
import { Checkbox } from '@progress/kendo-react-inputs';

class SparkLineChartCell extends React.Component {
    render (){
        return (
            <td><Sparkline data={this.props.dataItem.PriceHistory}/></td>
        )
    }
}

class ActiveCell extends React.Component {
    render() {
        return (
            <td><Checkbox disabled defaultChecked={this.props.dataItem[this.props.field]} /></td>
        )
    }
}

export default class GridContainer extends React.Component {

    processData = (data) => {
        data.forEach(item => {
            item.PriceHistory = Array.from({length: 40}, () => Math.floor(Math.random() * 100));
            return item
        })
        return data;
    }


    render() {
        return (
            <div>
                <Grid
                    style={{ height: '300px' }}
                    data={this.processData(this.props.data)}
                    defaultSort={[{
                        field: "UnitPrice",
                        dir:"asc"
                    }]}
                    sortable
                >
                    <Column field="ProductID" title="ID" sortable={false} width="40px"/>
                    <Column field="ProductName" title="Name"  />
                    <Column field="UnitPrice" title="Price" width="100px" />
                    <Column field="UnitsInStock" title="In stock"  sortable={false} width="100px"/>
                    <Column field="PriceHistory" title="Price history" cells={{ data: SparkLineChartCell }} sortable={false} width="200px"/>
                    <Column field="Discontinued" title="Active" sortable={false} width="70px" cells={{ data: ActiveCell }} />
                </Grid>
            </div>
        );
    }
}