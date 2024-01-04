import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Sparkline } from '@progress/kendo-react-charts';
import { process } from '@progress/kendo-data-query';

class SparkLineChartCell extends React.Component {
    render (){
        return (
            <td><Sparkline data={this.props.dataItem.PriceHistory}/></td>
        )
    }
}

export default class GridContainer extends React.Component {

    state = {
        dataState:{
            sort:[{
                field: "UnitPrice",
                dir:"asc"
            }]
        }
    }
    processData = (data) => {
        data.forEach(item => {
            item.PriceHistory = Array.from({length: 40}, () => Math.floor(Math.random() * 100));
            return item
        })
        return process(data,this.state.dataState);
    }

    handleDataStateChange = (e) => {
        this.setState({
            dataState: e.dataState
        })
    }

    render() {
        return (
            <div>
                <Grid
                    style={{ height: '300px' }}
                    data={this.processData(this.props.data)}
                    {...this.state.dataState}
                    onDataStateChange={this.handleDataStateChange}
                    sortable
                >
                    <Column field="ProductID" title="ID" sortable={false} width="40px"/>
                    <Column field="ProductName" title="Name" />
                    <Column field="UnitPrice" title="Price" width="100px" />
                    <Column field="UnitsInStock" title="In stock"  sortable={false} width="100px"/>
                    <Column field="PriceHistory" title="Price history" cell={SparkLineChartCell}sortable={false} width="200px"/>
                    <Column field="Discontinued" title="Active" sortable={false} width="100px"
                        cell={(props) => (
                            <td>
                                <input type="checkbox" disabled className="k-checkbox" defaultChecked={props.dataItem[props.field]} />
                                <label className="k-checkbox-label"></label>
                            </td>
                        )} />
                </Grid>
            </div>
        );
    }
}