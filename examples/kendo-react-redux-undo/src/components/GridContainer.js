import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { addProduct, updateProduct, deleteProduct, changeEdit, datastateChange } from '../actions/actions';
import { Grid, GridColumn as Column, GridToolbar, GridToolbarSort, GridToolbarFilter } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { gearIcon } from '@progress/kendo-svg-icons';
import { process } from '@progress/kendo-data-query'
import MyCommandCell from './MyCommandCell'

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
                    adaptive={true}
                    dataItemKey="ProductID"
                    autoProcessData={true}
                    navigatable={true}
                    sortable={{ mode: 'multiple' }}
                    onRowClick={this.rowClick}
                    onItemChange={this.handleItemChange}
                    data={processedProducts}
                    onDataStateChange={this.handleStateChange}
                    {...this.props.dataState}>
                    <GridToolbar>
                        <GridToolbarSort icon="gear" />
                        <GridToolbarFilter svgIcon={gearIcon} />
                        <Button
                            title="Add new"
                            className="k-button k-primary"
                            onClick={this.addItem}>
                            Add new
                        </Button>
                        <Button
                            title="Undo"
                            className="k-button button-right"
                            disabled={!this.props.canUndo}
                            onClick={this.props.onUndo}>
                            Back
                        </Button>
                        <Button
                            title="Redo"
                            className="k-button button-right"
                            disabled={!this.props.canRedo}
                            onClick={this.props.onRedo}>
                            Forward
                        </Button>
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
