import React, {Component} from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import MyCommandCell from './MyCommandCell'
import { graphql, compose } from 'react-apollo';
import { getProductsQuery, deleteProductMutation } from '../queries/queries';


class GridContainer extends Component {

    constructor(props){
        super(props)
        this.remove = this.remove.bind(this);
        this.CommandCell = MyCommandCell(this.remove);
    }

    remove(dataItem) {
        this.props.deleteProductMutation({
            variables: {
                ProductID: dataItem.ProductID,
            },
            refetchQueries: [{ query: getProductsQuery }]
        });
    }

    handleRowClick = (event) => {
        this.props.changeRowSelection(event.dataItem)
    }

    handleAddItem = () => {
        this.props.addItem()
    }

    render() {
        return (
            <div className="grid-container col-md-8 col-sm-12 col-xs-12">
                <div className="header">
                    <h5>Data</h5>
                </div>
                <Grid data={this.props.getProductsQuery.loading === true ? [] : this.props.getProductsQuery.products}
                    onRowClick={this.handleRowClick}
                    style={{ maxHeight: "600px" }}
                >
                    <GridToolbar>
                        <button
                            title="Add new"
                            className="k-button k-primary"
                            onClick={this.handleAddItem}
                            disabled={!this.props.inEdit}
                        >Add new
                        </button>
                    </GridToolbar>
                    <GridColumn field="ProductID" title="ID" width="300"/>
                    <GridColumn field="ProductName" title="Product Name"/>
                    <GridColumn field="UnitPrice" title="Unit Price" width="150px"/>
                    <GridColumn field="UnitsInStock" title="Units in Stock" width="150px"/>
                    <GridColumn cell={this.CommandCell} width="120px" />
                </Grid>
            </div>
        );
    }
}

export default compose(
    graphql(getProductsQuery, { name: "getProductsQuery" }),
    graphql(deleteProductMutation, { name: "deleteProductMutation" })
)(GridContainer);