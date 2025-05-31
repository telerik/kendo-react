import React from 'react';
import {connect} from 'react-redux';
import {addProduct, updateProduct, deleteProduct, changeEdit, datastateChange} from '../actions/actions';
import MyCommandCell from './MyCommandCell'
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import {Grid, GridColumn as Column, GridToolbar} from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query'

class GridContainer extends React.Component {
    constructor(props) {
        super(props);
        this.CommandCell = MyCommandCell(this.remove);
    }

    addItem = () => {
        this.props.addProduct();
    }

    handleItemChange = (dataItem) => {
        this.props.updateProduct(dataItem)
    }

    handleStateChange = (event) => {
        this.props.datastateChange(event)
    }

    remove = (dataItem) => {
       this.props.deleteProduct(dataItem);
    }

    rowClick = (event) => {
        this.props.changeEdit(event.dataItem);
    }

    render() {
        const processedProducts = process(this.props.products, this.props.dataState)
        console.log(this.props.products.length)
        return (
            <div className="grid-container">
                <Grid
                    onRowClick={this.rowClick}
                    onItemChange={this.handleItemChange}
                    data={processedProducts}
                    total={this.props.products.length}
                    pageable={true}
                    sortable={true}
                    filterable={true}
                    onDataStateChange={this.handleStateChange}
                    editField="inEdit"
                    {...this.props.dataState}>
                    <GridToolbar>
                        <button
                            title="Add new"
                            className="k-button k-primary"
                            onClick={this.addItem}>
                            Add new
                        </button>
                        <button
                            title="Undo"
                            className="k-button button-right"
                            disabled={!this.props.canUndo}
                            onClick={this.props.onUndo}>
                            Back
                        </button>
                        <button
                            title="Redo"
                            className="k-button button-right"
                            disabled={!this.props.canRedo}
                            onClick={this.props.onRedo}>
                            Forward
                        </button>
                    </GridToolbar>
                    <Column field="ProductID" title="ID" editable={false} filter="numeric"/>
                    <Column field="ProductName" title="Name"/>
                    <Column field="UnitPrice" title="Price" editor="numeric" filter="numeric"/>
                    <Column field="UnitsInStock" title="In stock" editor="numeric" filter="numeric"/>
                    <Column cell={this.CommandCell}/>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onUndo: () => dispatch(UndoActionCreators.undo()),
      onRedo: () => dispatch(UndoActionCreators.redo()),
      addProduct: () => dispatch(addProduct()),
      updateProduct: (dataItem) => dispatch(updateProduct(dataItem)),
      deleteProduct: (dataItem) => dispatch(deleteProduct(dataItem)),
      changeEdit: (row) => dispatch(changeEdit(row)),
      datastateChange: (event) => dispatch(datastateChange(event))
    }
  }

function mapStateToProps(state) {
    return {
        products: state.products.present.products,
        dataState: state.dataState.present,
        canUndo: state.products.past.length > 0,
        canRedo: state.products.future.length > 0,
        dataState: state.dataState.present
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
